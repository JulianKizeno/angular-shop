import { AbstractControl } from '@angular/forms'

export class MyValidators {

    static isPriceValid(control: AbstractControl){
        const currentValue = control.value
        console.log(currentValue)
        if (currentValue > 10000) {
            return {price_invalid: true}
        }
        return null;
    }

}

