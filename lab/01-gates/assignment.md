# Lab 1: Martin Kováč

### De Morgan's laws

1. Equations of all three versions of logic function f(c,b,a):

   Main function
   <img width="137" alt="Snímka obrazovky 2022-02-14 o 20 47 23" src="https://user-images.githubusercontent.com/99388246/153935457-2706867a-8adf-48e4-8f27-6d2052769bbe.png">
   Function NOR only
   <img width="188" alt="Snímka obrazovky 2022-02-14 o 20 49 47" src="https://user-images.githubusercontent.com/99388246/153935848-892fb32d-d676-4528-8b17-e0303ab22e34.png">
   Function NAND only
   <img width="172" alt="Snímka obrazovky 2022-02-14 o 20 50 09" src="https://user-images.githubusercontent.com/99388246/153935917-0e5f83e7-7876-4cb9-82ad-35b14a3bb1cc.png">


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
