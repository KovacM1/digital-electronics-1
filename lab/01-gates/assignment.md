# Lab 1: Martin Kováč

### De Morgan's laws

1. Equations of all three versions of logic function f(c,b,a):

   <img width="137" alt="Snímka obrazovky 2022-02-14 o 20 47 23" src="https://user-images.githubusercontent.com/99388246/153935457-2706867a-8adf-48e4-8f27-6d2052769bbe.png">


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

   ![Logic function](<img width="1381" alt="Snímka obrazovky 2022-02-13 o 17 42 07" src="https://user-images.githubusercontent.com/99388246/153766551-bb7f3bad-1ddf-4773-8c10-05bd87744c43.png">
)

2. Link to your public EDA Playground example:

   [https://www.edaplayground.com/x/eGgQ#&togetherjs=rI3Slk9jSx](https://www.edaplayground.com/x/eGgQ#&togetherjs=rI3Slk9jSx)
