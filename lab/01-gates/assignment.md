# Lab 1: Martin Kováč

### De Morgan's laws

1. Equations of all three versions of logic function f(c,b,a):

   Main function:
   <img src="https://latex.codecogs.com/svg.image?\bg_white&space;f_{cba}=&space;\bar{b}\cdot&space;a&space;&plus;&space;\bar{c}&space;\cdot&space;\bar{b}&space;" title="\bg_white f_{cba}= \bar{b}\cdot a + \bar{c} \cdot \bar{b} " />
   
   Function NOR only:
<img src="https://latex.codecogs.com/svg.image?\bg_white&space;f_{cba_{(NOR)}}=&space;\overline{b&space;&plus;&space;\bar{a}}&space;&plus;&space;\overline{c&space;&plus;&space;b}" title="\bg_white f_{cba_{(NOR)}}= \overline{b + \bar{a}} + \overline{c + b}" />
   
   Function NAND only:
<img src="https://latex.codecogs.com/svg.image?\bg_white&space;f_{cba_{(NAND)}}=&space;\bar{b}&space;\cdot&space;(\overline{\bar{a}&space;&plus;&space;c})" title="\bg_white f_{cba_{(NAND)}}= \bar{b} \cdot (\overline{\bar{a} + c})" />


2. Listing of VHDL architecture from design file (`design.vhd`) for all three functions. Always use syntax highlighting, meaningful comments, and follow VHDL guidelines:

```vhdl
architecture dataflow of demorgan is
begin
    f_o      <= (not b_i and a_i) or (not c_i and not b_i);
    f_nand_o <= not (not ( not b_i and a_i) and not ( not c_i and not b_i));
    f_nor_o  <= not (b_i or not a_i) or not ( c_i or b_i);
end architecture dataflow;
```

3. Complete table with logic functions' values:

| **c** | **b** |**a** | **f(c,b,a)** | **f_NAND(c,b,a)** | **f_NOR(c,b,a)** |
| :-: | :-: | :-: | :-: | :-: | :-: |
| 0 | 0 | 0 | 1 | 1 | 1 |
| 0 | 0 | 1 | 1 | 1 | 1 |
| 0 | 1 | 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 | 0 | 0 |
| 1 | 0 | 0 | 0 | 0 | 0 |
| 1 | 0 | 1 | 1 | 1 | 1 |
| 1 | 1 | 0 | 0 | 0 | 0 |
| 1 | 1 | 1 | 0 | 0 | 0 |

### Distributive laws

1. Screenshot with simulated time waveforms. Always display all inputs and outputs (display the inputs at the top of the image, the outputs below them) at the appropriate time scale!

<img width="994" alt="Snímka obrazovky 2022-02-14 o 20 51 24" src="https://user-images.githubusercontent.com/99388246/153936086-386d036b-b7be-409e-b701-490e1ed67127.png">

2. Link to your public EDA Playground example:

   [https://www.edaplayground.com/x/eGgQ#&togetherjs=rI3Slk9jSx](https://www.edaplayground.com/x/eGgQ#&togetherjs=rI3Slk9jSx)
