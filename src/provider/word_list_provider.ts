import {CompletrSettings} from "../settings";
import {readFile} from "fs/promises";
import {DictionaryProvider} from "./dictionary_provider";

class WordListSuggestionProvider extends DictionaryProvider {

    readonly wordMap: Map<string, string[]> = new Map<string, string[]>();

    isEnabled(settings: CompletrSettings): boolean {
        return settings.wordListProviderEnabled;
    }

    async loadFromFiles(settings: CompletrSettings) {
        this.wordMap.clear();

        //Read all files
        for (let i = settings.wordListFiles.length - 1; i >= 0; i--) {
            let data: string;
            try {
                data = (await readFile(settings.wordListFiles[i]))?.toString();
            } catch (e) {
                settings.wordListFiles.splice(i, 1);
                continue;
            }

            //Each line is a word
            const lines = data.split("\n");
            for (let line of lines) {
                if (line === "" || line.length < settings.minWordLength)
                    continue;

                let list = this.wordMap.get(line.charAt(0));
                if (!list) {
                    list = [];
                    this.wordMap.set(line.charAt(0), list);
                }

                list.push(line.trim());
            }
        }

        let count = 0;
        //Sort by length
        for (let entry of this.wordMap.entries()) {
            entry[1] = entry[1].sort((a, b) => a.length - b.length);
            count += entry[1].length;
        }

        if (count > 0)
            console.log("Completr: Loaded " + count + " words");
    }
}

export const WordList = new WordListSuggestionProvider();