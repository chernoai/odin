const container = document.querySelector('#container');

const div = document.createElement('div');
div.classList.add('div');
div.textContent = 'This is the glorious text-content!';
container.appendChild(div);

const p = document.createElement('p')
p.textContent = 'Hey I’m red!'
p.style.color = 'red'
container.appendChild(p)

const h3 = document.createElement('h3')
h3.textContent = 'I’m a blue h3!'
h3.style.color = 'blue'
container.appendChild(h3)

const div2 = document.createElement('div')
div2.style.border = '1px solid #000';
div2.style['background-color'] = 'pink'
container.appendChild(div2)

const h1 = document.createElement('h1')
h1.textContent = 'I’m in a div'
div2.appendChild(h1)

const p2 = document.createElement('p')
p2.textContent = 'ME TOO!'
div2.appendChild(p2)