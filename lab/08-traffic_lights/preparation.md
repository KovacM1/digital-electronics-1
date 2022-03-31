## Preparation tasks (done before the lab at home)

1. See schematic of the Nexys A7 board and find out the connection of two RGB LEDs, ie to which FPGA pins are connected and how. How you can control them to get red, yellow, or green colors? Draw the schematic with RGB LEDs.

<img width="301" alt="Snímka obrazovky 2022-03-31 o 10 01 37" src="https://user-images.githubusercontent.com/99388246/161007008-26ce21a9-71c4-4ed8-ba16-faa35d84cb4d.png">

| **RGB LED** | **Artix-7 pin names** | **Red** | **Yellow** | **Green** |
| :-: | :-: | :-: | :-: | :-: |
| LD16 | N15, M16, R12 | `1,0,0` | `1,1,0` | `0,1,0` |
| LD17 | N16, R11, G14 | `1,0,0` | `1,1,0` | `0,1,0` |

2. See schematic of the Nexys A7 board and find out to which FPGA pins Pmod ports JA, JB, JC, and JD are connected.

     Each 12-pin Pmod port provides two 3.3V VCC signals (pins 6 and 12), two Ground signals (pins 5 and 11), and eight logic signals. The VCC and Ground pins can deliver up to 1A of current. Pmod data signals are not matched pairs, and they are routed using best-available tracks without impedance control or delay matching. 

<img width="811" alt="Snímka obrazovky 2022-03-31 o 10 01 53" src="https://user-images.githubusercontent.com/99388246/161007034-178c826e-37a7-46d3-9ec8-b36c22634974.png">
