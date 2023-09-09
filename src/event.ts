function subscribe(eventName: string, listener: (event: any) => void) {
  document.addEventListener(eventName, listener);
}

function unsubscribe(eventName: string, listener: (event: any) => void) {
  document.removeEventListener(eventName, listener);
}

function publish(eventName: string, payload: object) {
  const event = new CustomEvent(eventName, { detail: payload });
  document.dispatchEvent(event);
}

export { publish, subscribe, unsubscribe };
