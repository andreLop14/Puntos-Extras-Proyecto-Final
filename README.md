# Sistema de Cotización de Seguros

Este programa permite calcular el costo total de una póliza de seguro basada en diferentes factores de riesgo (edad, familia, bienes y salario).

### Funcionamiento
El programa utiliza un ciclo infinito que se rompe únicamente cuando el usuario escribe la palabra **"Salir"** en el campo de nombre. Calcula recargos sobre un precio base de **Q.2000** y suma cargos adicionales basados en el salario del cliente.

### Factores a Considerar
1.  **Edad:** El riesgo aumenta con la edad tanto del asegurado como del cónyuge.
2.  **Carga Familiar:** Cada hijo representa un costo operativo adicional.
3.  **Patrimonio:** Se aplica un 35% de recargo por cada propiedad sobre el precio base.
4.  **Ingresos:** Se aplica un 5% directamente sobre el salario mensual.

