import { Component, OnInit, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '../../../../../../node_modules/@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: 'input.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: InputComponent,
        multi: true
    }]
})

export class InputComponent implements OnInit {
    @Input() title: String;
    @Input() tooltip: String;
    @Input() model_name: String;


    constructor() { }

    ngOnInit() { }
}