import { Component } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
/** cart component*/
export class CartComponent {
    /** cart ctor */
    constructor() {

      //var filterBar = document.getElementById('filter-bar');
      //if (filterBar) {
      //  noUiSlider.create(filterBar, {
      //    start: [0, 2000],
      //    connect: true,
      //    range: {
      //      'min': 0,
      //      'max': 2000
      //    }
      //  });

      //  var skipValues = [
      //    document.getElementById('value-lower'),
      //    document.getElementById('value-upper')
      //  ];

      //  filterBar.noUiSlider.on('update', function (values, handle) {
      //    skipValues[handle].innerHTML = Math.round(values[handle]).toString();
      //  });
      //}
    }
}
