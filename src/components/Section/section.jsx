import { useState } from 'react'
import carro1 from '../../assets/1.png'
import carro2 from '../../assets/2.png'
import carro3 from '../../assets/3.png'
import arrow from '../../assets/arrow.png'
import './section.css'

    
function Section() {
    let [active, setActive] = useState(0)
    let prevButton = document.getElementById('prev')
    let nextButton = document.getElementById('next')

    prevButton = () => {
        let container = document.querySelector('.container')
        let items = container.querySelectorAll('.list .item')
        let indicator = document.querySelector('.indicators')
        let dots = indicator.querySelectorAll('ul li')
        let list = container.querySelector('.list')
        let itemOld = container.querySelector('.list .item.active')
        itemOld.classList.remove('active')

        list.style.setProperty('--calculation', - 1) 

        let firstPosition = 0
        let lastPosition = items.length - 1

        if (active - 1 < firstPosition) {
            active = lastPosition
        } else {
            active = active - 1
        }

        items[active].classList.add('active')

        let dotsOld = indicator.querySelector('ul li.active')
        dotsOld.classList.remove('active')
        dots[active].classList.add('active')

        indicator.querySelector('.number').innerHTML = '0' + (active + 1)
    }

    nextButton = () => {
        let container = document.querySelector('.container')
        let list = container.querySelector('.list')
        let items = container.querySelectorAll('.list .item')
        let indicator = document.querySelector('.indicators')
        let dots = indicator.querySelectorAll('ul li')
        let itemOld = container.querySelector('.list .item.active')
        itemOld.classList.remove('active')

        list.style.setProperty('--calculation', 1) 

        let lastPosition = items.length - 1

        if (active + 1 > lastPosition) {
            active = 0
        } else {
            active ++
        }
        
        items[active].classList.add('active')
        
        let dotsOld = indicator.querySelector('ul li.active')
        dotsOld.classList.remove('active')
        dots[active].classList.add('active')

        indicator.querySelector('.number').innerHTML = '0' + (active + 1) 
    }
    
    
    return (
        <section id='container' className='container'>
            <div className='list'>
                <div className='item active'>
                    <div className='car-img'>
                        <img src={carro1} alt="imagem carro" />
                    </div>
                    <div className='content'>
                        <p className='car-info'>Único dono</p>
                        <h2>911 Turbo</h2>
                        <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam deleniti quos sequi. Voluptates, illo, labore natus architecto repudiandae repellat ratione atque veritatis tenetur, quo velit adipisci. Quisquam cumque tenetur enim.</p>
                        <button className='information'>Saiba Mais</button>
                    </div>
                </div>

                <div className='item'>
                    <div className='car-img'>
                        <img src={carro2} alt="imagem carro" />
                    </div>
                    <div className='content'>
                        <p className='car-info'>Conversível</p>
                        <h2>Ferrari</h2>
                        <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam deleniti quos sequi. Voluptates, illo, labore natus architecto repudiandae repellat ratione atque veritatis tenetur, quo velit adipisci. Quisquam cumque tenetur enim.</p>
                        <button className='information'>Saiba Mais</button>
                    </div>
                </div>

                <div className='item'>
                    <div className='car-img'>
                        <img src={carro3} alt="imagem carro" />
                    </div>
                    <div className='content'>
                        <p className='car-info'>2016</p>
                        <h2>Lamborghini</h2>
                        <p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam deleniti quos sequi. Voluptates, illo, labore natus architecto repudiandae repellat ratione atque veritatis tenetur, quo velit adipisci. Quisquam cumque tenetur enim.</p>
                        <button className='information'>Saiba Mais</button>
                    </div>
                </div>
            </div>

            <div className='arrows'>
                <button onClick={prevButton} id='prev'><img src={arrow} alt="arrow left" /></button>
                <button onClick={nextButton} id='next' ><img src={arrow} alt="arrow right" /></button>
            </div>

            <div className='indicators'>
                <div className='number'>01</div>
                <ul>
                    <li className='active'></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </section>
    )
}

export default Section