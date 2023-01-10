class Signal<ListenerType> {
  public listeners: Array<(params: ListenerType) => void>;

  constructor() {
    this.listeners = [];
  }

  add(listener: (params: ListenerType) => void) {
    console.log(this.listeners);
    this.listeners.push(listener);
  }

  remove(listener: (params: ListenerType) => void) {
    this.listeners = this.listeners.filter((elem) => elem !== listener);
  }

  emit(params: ListenerType) {
    this.listeners.forEach((listener) => listener(params));
  }
}
export default Signal;
