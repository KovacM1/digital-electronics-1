# Lab 2: Martin Kováč

### 2-bit comparator

1. Karnaugh maps for other two functions:

   Greater than:

   <img width="419" alt="Snímka obrazovky 2022-02-17 o 11 19 37" src="https://user-images.githubusercontent.com/99388246/154534313-1e75ab43-126d-4707-8a30-e196451775aa.png">


   Less than:

   <img width="358" alt="Snímka obrazovky 2022-02-17 o 11 28 14" src="https://user-images.githubusercontent.com/99388246/154534340-6f549e6d-cd48-46bc-8574-ad66ccfa6a67.png">


2. Equations of simplified SoP (Sum of the Products) form of the "greater than" function and simplified PoS (Product of the Sums) form of the "less than" function.

   ![Logic functions](images/comparator_min.png)

### 4-bit comparator

1. Listing of VHDL stimulus process from testbench file (`testbench.vhd`) with at least one assert (use BCD codes of your student ID digits as input combinations). Always use syntax highlighting, meaningful comments, and follow VHDL guidelines:

   Last two digits of my student ID: **xxxx73**

```vhdl
    p_stimulus : process
    begin
        -- Report a note at the beginning of stimulus process
        report "Stimulus process started" severity note;

        -- First test case
        s_b <= "BCD_OF_YOUR_SECOND_LAST_ID_DIGIT"; -- Such as "0101" if ID = xxxx56
        s_a <= "BCD_OF_YOUR_LAST_ID_DIGIT";        -- Such as "0110" if ID = xxxx56
        wait for 100 ns;
        -- Expected output
        assert ((s_B_greater_A = 'WRITE_CORRECT_VALUE_HERE') and
                (s_B_equals_A  = 'WRITE_CORRECT_VALUE_HERE') and
                (s_B_less_A    = 'WRITE_CORRECT_VALUE_HERE'))
        -- If false, then report an error
        report "Input combination COMPLETE_THIS_TEXT FAILED" severity error;

        -- Report a note at the end of stimulus process
        report "Stimulus process finished" severity note;
        wait;
    end process p_stimulus;
```

2. Text console screenshot during your simulation, including reports.

   <img width="920" alt="Snímka obrazovky 2022-02-17 o 18 34 16" src="https://user-images.githubusercontent.com/99388246/154538418-45930e47-51d0-4c23-8917-46bac6960a76.png">


3. Link to your public EDA Playground example:

   [https://www.edaplayground.com/...](https://www.edaplayground.com/...)
