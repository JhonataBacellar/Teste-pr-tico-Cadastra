
export const createFilters = (): void => {
    const colors: Array<string> = ["Amarelo", "Azul", "Branco", "Cinza", "Laranja", "Verde", "Vermelho", "Preto", "Rosa", "Vinho"];

    const container = document.getElementById('cotainerCheckoutColor');

    colors.forEach(color => {
        const label = document.createElement('label');
        const input = document.createElement('input');

        input.type = 'checkbox';
        input.className = 'customCeked';
        input.name = 'colors';
        input.value = color;

        label.appendChild(input);
        label.appendChild(document.createTextNode(color));

        container.appendChild(label);


        
    });
    const createFilterSize = () => {
        const sizes: Array<string> = ["P", "M", "G", "GG", "U", "36", "38", "40"];
    
        const container = document.getElementById('containerSize');
    
        sizes.forEach(size => {
            const li = document.createElement('li');
            const input = document.createElement('input');
    
            input.type = 'button';
            input.value = size;
    
            li.appendChild(input);
            container.appendChild(li);
        });
    }

    const createFilterPrice = (): void => {
        const priceRange: Array<string> = 
        ['de R$0 até R$50', 
        'de R$51 até R$150', 
        'de R$151 até R$300', 
        'de R$301 até R$500',
        'a partir de R$500']
        const container = document.getElementById('containerChekoutPrice');

        priceRange.forEach(price => {
            const label = document.createElement('label');
            const input = document.createElement('input');
    
            input.type = 'checkbox';
            input.className = 'customCeked';
            input.name = 'price';
            input.value = price;
    
            label.appendChild(input);
            label.appendChild(document.createTextNode(price));
    
            container.appendChild(label);
        })
    }

    createFilterSize()
    createFilterPrice()
}



export const openFilterColor = (): void => {
    const containerHeckBox = document.getElementById('cotainerCheckoutColor')
    const button = document.getElementById('openOptionsColor')

    button.addEventListener('click', () => {
        if(containerHeckBox.style.display === "none"){
            containerHeckBox.style.display = "flex";
        } else {
            containerHeckBox.style.display = "none";
        }
    })
}

export const openFilterSize = (): void => {
    const containerHeckBox = document.getElementById('containerSize')
    const button = document.getElementById('openSizeFilter')

    button.addEventListener('click', () => {
        if(containerHeckBox.style.display === "none"){
            containerHeckBox.style.display = "flex";
        } else {
            containerHeckBox.style.display = "none";
        }
    })
}

export const openFilterPriceRange = (): void => {
    'containerChekoutPrice'

    const containerHeckBox = document.getElementById('containerChekoutPrice')
    const button = document.getElementById('openPriceRenge')

    button.addEventListener('click', () => {
        if(containerHeckBox.style.display === "none"){
            containerHeckBox.style.display = "flex";
        } else {
            containerHeckBox.style.display = "none";
        }
    })

}

document.addEventListener('DOMContentLoaded', createFilters)
document.addEventListener('DOMContentLoaded', openFilterColor)
document.addEventListener('DOMContentLoaded', openFilterSize)
document.addEventListener('DOMContentLoaded', openFilterPriceRange)