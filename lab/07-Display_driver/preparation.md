## Preparation tasks (done before the lab at home)

A common way to control multiple displays is to gradually switch between them. We control (connect to supply voltage) only one of the displays at a time, as can be seen [here](https://engineeringtutorial.com/seven-segment-display-working-principle/).

Due to the physiological properties of human vision, it is necessary that the time required to display the whole value is a maximum of 16&nbsp;ms. If we display four digits, then the duration of one of them is 4&nbsp;ms. If we display eight digits, the time is reduced to 2&nbsp;ms, etc.

1. See schematic of the Nexys A7 board, find out the connection of 7-segment displays, and complete the signal timing to display four-digit value `3.142`.

  <img width="515" alt="Snímka obrazovky 2022-03-24 o 8 59 25" src="https://user-images.githubusercontent.com/99388246/159869615-1df4f301-2896-43c3-ab05-dbe33c0f3752.png">

  <img width="582" alt="Snímka obrazovky 2022-03-24 o 8 59 30" src="https://user-images.githubusercontent.com/99388246/159869531-c45d5b1b-6cd3-4864-8626-bb1be35e8c49.png">

<img width="701" alt="Snímka obrazovky 2022-03-24 o 8 59 35" src="https://user-images.githubusercontent.com/99388246/159869587-1fb2c70b-27c1-4803-97d7-8abbe4ad959e.png">


  > The figure above was created in [WaveDrom](https://wavedrom.com/) digital timing diagram online tool. The figure source code is as follows:
  >
  ```javascript
  {
  signal:
  [
    ['Digit position',
      {name: 'Common anode: AN(3)', wave: 'xx01..01..01'},
      {name: 'Common anode: AN(2)', wave: 'xx101..01..0'},
      {name: 'Common anode: AN(1)', wave: 'xx1.01..01..'},
      {name: 'Common anode: AN(0)', wave: 'xx1..01..01.'},
    ],
    ['Seven-segment data',
      {name: '4-digit value to display', wave: 'xx3333555599', data: ['3','1','4','2','3','1','4','2','3','1']},
      {name: 'Cathod A: CA', wave: 'xx01.0.1.0.1'},
      {name: 'Cathod B: CB', wave: 'xx0.........'},
      {name: 'Cathod C: CC', wave: 'xx0..10..10.'},
      {name: 'Cathod D: CD', wave: 'xx01.0.1.0.1'},
      {name: 'Cathod E: CE', wave: 'xx1..01..01.'},
      {name: 'Cathod F: CF', wave: 'xx1.01..01..'},
      {name: 'Cathod G: CG', wave: 'xx010..10..1'},
    ],
    {name: 'Decimal point: DP', wave: 'xx01..01..01'},
  ],
  head:
  {
    text: '                    4ms   4ms   4ms   4ms   4ms   4ms   4ms   4ms   4ms   4ms',
  },
}
  ```

<a name="part1"></a>
