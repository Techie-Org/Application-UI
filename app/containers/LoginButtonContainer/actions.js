import { CLOSE_MODAL, OPEN_MODAL } from './constants';

// Action creator to open the sign in modal
export function openModal() {
  return {
    type: OPEN_MODAL,
  };
}

// Action creator to close the sign in modal
export function closeModal() {
  return {
    type: CLOSE_MODAL,
  };
}
