# Lab 5: YOUR_FIRSTNAME LASTNAME

### Flip-flops

1. Listing of VHDL architecture for T-type flip-flop. Always use syntax highlighting, meaningful comments, and follow VHDL guidelines:

```vhdl
architecture Behavioral of t_ff_rst is
    signal s_q : std_logic;
begin

    p_t_ff_rst : process(clk)
    begin
        if rising_edge(clk) then  -- Synchronous process

            -- USE HIGH-ACTIVE RESET HERE
            if (rst = '1') then
                s_q <= '0';
            elsif (t = '0') then
                s_q <= s_q;
            else
                s_q <= not s_q;
            end if;
        end if;
    end process p_t_ff_rst;
    
    q     <= s_q;
    q_bar <= not s_q;
end architecture Behavioral;
```

2. Screenshot with simulated time waveforms. Try to simulate both flip-flops in a single testbench with a maximum duration of 200 ns, including reset. Always display all inputs and outputs (display the inputs at the top of the image, the outputs below them) at the appropriate time scale!

   <img width="985" alt="Snímka obrazovky 2022-03-16 o 16 28 14" src="https://user-images.githubusercontent.com/99388246/158627058-eb5c532c-046a-44df-8564-f8e1c101552f.png">


### Shift register

1. Image of the shift register `top` level schematic. The image can be drawn on a computer or by hand. Always name all inputs, outputs, components and internal signals!

![IMG_3404](https://user-images.githubusercontent.com/99388246/158626849-7d969906-117a-4493-aa83-c353a6e4b960.jpg)


   
