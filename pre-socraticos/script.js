document.addEventListener('DOMContentLoaded', function() {
            const pesoInput = document.getElementById('peso');
            const alturaInput = document.getElementById('altura');
            const calcularBtn = document.getElementById('calcularBtn');
            const imcDisplay = document.getElementById('imc');
            const classificacaoDisplay = document.getElementById('classificacao');
            const resultCard = document.getElementById('resultCard');

            // Input masks
            pesoInput.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9.,]/g, '').replace(/(\..*)\./g, '$1').replace(/(\,.*)\,/g, '$1');
            });

            alturaInput.addEventListener('input', function() {
                this.value = this.value.replace(/[^0-9.,]/g, '').replace(/(\..*)\./g, '$1').replace(/(\,.*)\,/g, '$1');
            });

            calcularBtn.addEventListener('click', function() {
                // Get values and convert commas to dots
                let peso = parseFloat(pesoInput.value.replace(',', '.'));
                let altura = parseFloat(alturaInput.value.replace(',', '.'));

                // Validate inputs
                if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
                    alert('Por favor, insira valores válidos para peso e altura.');
                    return;
                }

                // Calculate BMI
                let imc = peso / (altura * altura);
                let classificacao = '';
                let classColor = '';

                // Classify BMI
                if (imc < 18.5) {
                    classificacao = 'Baixo peso';
                    classColor = 'baixo-peso';
                } else if (imc < 25) {
                    classificacao = 'Peso normal';
                    classColor = 'normal';
                } else if (imc < 30) {
                    classificacao = 'Sobrepeso';
                    classColor = 'sobrepeso';
                } else {
                    classificacao = 'Obesidade';
                    classColor = 'obesidade';
                }

                // Display results
                imcDisplay.textContent = imc.toFixed(1);
                classificacaoDisplay.textContent = classificacao;
                classificacaoDisplay.className = 'classification ' + classColor;

                // Show result card with animation
                resultCard.classList.add('show');

                // Scroll to results if needed
                resultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            });

            // Add focus effects for inputs
            const inputs = document.querySelectorAll('input');
            inputs.forEach(input => {
                input.addEventListener('focus', function() {
                    this.parentElement.classList.add('focused');
                });
                input.addEventListener('blur', function() {
                    this.parentElement.classList.remove('focused');
                });
            });
        });