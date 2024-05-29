
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

    createFilterSize()
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

document.addEventListener('DOMContentLoaded', createFilters)
document.addEventListener('DOMContentLoaded', openFilterColor)
document.addEventListener('DOMContentLoaded', openFilterSize)