import type { EventRef, Events as ObsidianEvents } from 'obsidian';

import type { State } from '../caching/Cache';
import obsidian_ToDo from '../todos/obsidian-todo';

/**
 * What is  the difference between CahceUpdate and RequestCacheUpdate?
*/
enum Event {    
    CacheUpdate = 'obsidian-todo-plugin:cache-update',
    RequestCacheUpdate = 'obsidian-todo-plugin:request-cache-update',
}

interface CacheUpdateData {
    toDos: obsidian_ToDo[];
    state: State;
}

export class obsidian_ToDo_Events {
    private obsidianEvents: ObsidianEvents;

    constructor({ obsidianEvents }: { obsidianEvents: ObsidianEvents }) {
        this.obsidianEvents = obsidianEvents;
    }

    public onCacheUpdate(handler: (cacheData: CacheUpdateData) => void): EventRef {
        return this.obsidianEvents.on(Event.CacheUpdate, handler);
    }

    public triggerCacheUpdate(cacheData: CacheUpdateData): void {
        this.obsidianEvents.trigger(Event.CacheUpdate, cacheData);
    }

    public onRequestCacheUpdate(handler: (fn: (cacheData: CacheUpdateData) => void) => void): EventRef {
        return this.obsidianEvents.on(Event.RequestCacheUpdate, handler);
    }

    public triggerRequestCacheUpdate(fn: (cacheData: CacheUpdateData) => void): void {
        this.obsidianEvents.trigger(Event.RequestCacheUpdate, fn);
    }

    public off(eventRef: EventRef): void {
        this.obsidianEvents.offref(eventRef);
    }
}
