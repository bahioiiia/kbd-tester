import React, { useEffect, useState } from 'react';
import styles from './Keyboard.module.css';
import keysData from './keys.json';
import KeyboardBlock from './KeyboardBlock';

function Keyboard({ keysPressed, workingKeys, pressedKeys }) {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    setKeys(keysData.keys);
  }, []);

  const blocks = {
    escF12: [],
    main: [],
    functional: [],
    arrows: [],
    numpad: []
  };

  keys.forEach((key) => {
    if (['Escape', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12'].includes(key.code)) {
      blocks.escF12.push(key);
    } else if (
      ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'MetaRight', 'ContextMenu', 'ControlRight'].includes(key.code)
    ) {
      blocks.main.push(key);
    } else if (
      ['Insert', 'Home', 'PageUp', 'Delete', 'End', 'PageDown'].includes(key.code)
    ) {
      blocks.functional.push(key);
    } else if (
      ['ArrowUp', 'ArrowLeft', 'ArrowDown', 'ArrowRight'].includes(key.code)
    ) {
      blocks.arrows.push(key);
    } else if (
      ['NumLock', 'NumpadDivide', 'NumpadMultiply', 'NumpadSubtract', 'Numpad7', 'Numpad8', 'Numpad9', 'NumpadAdd', 'Numpad4', 'Numpad5', 'Numpad6', 'Numpad1', 'Numpad2', 'Numpad3', 'NumpadEnter', 'Numpad0', 'NumpadDecimal'].includes(key.code)
    ) {
      blocks.numpad.push(key);
    }
  });

  return (
    <div className={styles.keyboard}>
      <KeyboardBlock
        blockKeys={[blocks.escF12]}
        keysPressed={keysPressed}
        workingKeys={workingKeys}
        pressedKeys={pressedKeys}
      />
      <KeyboardBlock
        blockKeys={[blocks.main]}
        keysPressed={keysPressed}
        workingKeys={workingKeys}
        pressedKeys={pressedKeys}
      />
      <KeyboardBlock
        blockKeys={[blocks.functional]}
        keysPressed={keysPressed}
        workingKeys={workingKeys}
        pressedKeys={pressedKeys}
      />
      <KeyboardBlock
        blockKeys={[blocks.arrows]}
        keysPressed={keysPressed}
        workingKeys={workingKeys}
        pressedKeys={pressedKeys}
      />
      <KeyboardBlock
        blockKeys={[blocks.numpad]}
        keysPressed={keysPressed}
        workingKeys={workingKeys}
        pressedKeys={pressedKeys}
      />
    </div>
  );
}

export default Keyboard;
