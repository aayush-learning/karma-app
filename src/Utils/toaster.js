import Toast from 'react-native-root-toast';
import font from '../asset/Font/Font';

const toastMessageQueue = [];
let toast = null;

export default class Toaster {
  /**
   *
   * @example
   * Toaster.show('message'); // toast visible for Toast.durations.SHORT by default
   * Toaster.show('message', 1500, {}); // toast visible for given timestamp
   * Toaster.show('hello', 5000, { backgroundColor: 'yellow' }); // toast visible for given timestamp with bg color
   *
   * @param {string} message - toast message
   * @param {number} duration - time duration
   * @param {object} options - pass any configuration of toaster
   */
  static show(message, duration = Toast.durations.SHORT, options = {}) {
    toastMessageQueue.push({ message, duration, options });
    if (toastMessageQueue.length === 1) {
      showToaster();
    }
  }

  static hide() {
    Toast.hide(toast);
  }

  static options = {
    // default options
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    delay: 0,
    textStyle: {
      color: 'white',
      fontFamily: font.regular,
    },
  };
}

function processMessageQueue() {
  toastMessageQueue.shift();
  if (toastMessageQueue.length) {
    showToaster();
  }
}

function hideToaster() {
  Toast.hide(toast);
  processMessageQueue();
}

function showToaster() {
  const { duration, message, options } = toastMessageQueue[0];
  toast = Toast.show(message, { ...Toaster.options, ...options });
  setTimeout(hideToaster, duration);
}
