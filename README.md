# ToDoMD

This plugin provides advanced auto-completion functionality for obsidian. Legacy editor not supported.

## Features

- [x] ?ToDoMD auto completion
- [ ] ?ToDoMD query feature
- [ ] ?ToDoMD sidebar
- [ ] ?ToDoMD in editor styling

## Installation

### Community plugin list
To be released.
After release, browse the community plugins list and search for `ToDoMD`.

### After installation

1. Restart obsidian to ensure internal hooks can get registered properly

## Configuration

### Hotkeys

- All hotkeys are changeable from the hotkeys settings page
- The "bypass" hotkeys are useful to run actions which pretend that the popup isn't open.
    - If for example your insertion key is `Enter`, you couldn't press enter to go to the next line while the popup is
      open. This is where you could use the bypass key.
    - This also allows for other modifiers to be used, for example pressing `Tab` might require holding `Shift` to move
      backwards. Only modifiers which are not used in the bypass keybinding will be forwarded.
    - Note: The default bypass hotkeys might be shadowed by a built-in command. Check your keybindings if they don't
      work.
- If you want to change a hotkey without using any modifier, you need to use a workaround which can be
  found [here](https://forum.obsidian.md/t/be-able-of-using-the-function-keys-f1-f12-to-perform-functions/15748/7)
  or [here](https://forum.obsidian.md/t/function-keys-cant-be-bound-as-hotkeys-without-modifiers/26956/4), as Obsidian
  currently does not support this.

## Example usage

## Development

- Clone the repo to the `plugins` folder of an obsidian vault
- Run `npm i` and `npm run dev`
- Enable the plugin in obsidian
