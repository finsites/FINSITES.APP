import { LightningElement } from 'lwc';

export default class LightningElementSLDS extends LightningElement {
    constructor() {
        super();

        // Add SLDS CSS
        let _sldsPath = '../resources/styles';
        _sldsPath += '/finsites-lightning-design-system.css';
        const styles = document.createElement('link');
        styles.href = _sldsPath;
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }
}
