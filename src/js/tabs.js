class Tabs {
  constructor({
    rootSelector,
    activeControlClass,
    activePaneClass,
    activeTab = 1,
  }) {
    this._refs = this._getRefs(rootSelector);
    this._activeControllClass = activeControlClass;
    this._activePaneClass = activePaneClass;
    this._activeTabIdx = activeTab - 1;

    this._bindEvents();

    this._setActiveTab();
  }

  _getRefs(root) {
    const refs = {};

    refs.controls = document.querySelector(`${root} [data-controls]`);
    refs.panes = document.querySelector(`${root} [data-panes]`);

    return refs;
  }

  _bindEvents() {
    this._refs.controls.addEventListener(
      'click',
      this._onControlsClick.bind(this),
    );
  }

  _onControlsClick(event) {
    event.preventDefault();

    if (event.target.nodeName !== 'A') {
      return;
    }

    const currentActiveControlItem = this._refs.controls.querySelector(
      `.${this._activeControllClass}`,
    );

    if (currentActiveControlItem) {
      currentActiveControlItem.classList.remove(this._activeControllClass);

      const paneId = currentActiveControlItem.getAttribute('href');

      const pane = this._refs.panes.querySelector(paneId);
      pane.classList.remove(this._activePaneClass);
    }

    const controlItem = event.target;
    controlItem.classList.add(this._activeControllClass);

    const paneId = controlItem.getAttribute('href');

    const pane = this._refs.panes.querySelector(paneId);
    pane.classList.add(this._activePaneClass);
  }

  _setActiveTab() {
    const controlItems = this._refs.controls.querySelectorAll('a');

    const control = controlItems[this._activeTabIdx];

    control.classList.add(this._activeControllClass);

    const paneId = control.getAttribute('href');

    const pane = this._refs.panes.querySelector(paneId);
    pane.classList.add(this._activePaneClass);
  }
}

export default Tabs;
