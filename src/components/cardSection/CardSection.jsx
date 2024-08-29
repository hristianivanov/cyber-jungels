import './cardSection.scss'

import HeroCard from '../heroCard/HeroCard';

import crocodile from '../../assets/crocodile.png'
import bear from '../../assets/bear.png'
import alpaca from '../../assets/alpaca.png'
import shark from '../../assets/shark.png'

import tiger from '../../assets/tiger.png'
import owl from '../../assets/owl.png'
import wolf from '../../assets/wolf.png'
import hamster from '../../assets/hamster.png'

import cat from '../../assets/cat.png'
import eagle from '../../assets/eagle.png'
import deer from '../../assets/deer.png'
import scorpion from '../../assets/scorpion.png'

import hippopotamus from '../../assets/hippopotamus.png'
import orca from '../../assets/orca.png'
import lion from '../../assets/lion.png'
import dog from '../../assets/dog.png'

import dolphin from '../../assets/dolphin.png'
import boar from '../../assets/boar.jpg'
import piranha from '../../assets/piranha.png'
import penguin from '../../assets/penguin.png'

import fox from '../../assets/fox.png'
import frog from '../../assets/frog.png'
import mongoose from '../../assets/mongoose.png'
import ram from '../../assets/ram.png'

import giraffe from '../../assets/giraffe.png'
import hyena from '../../assets/hyena.png'
import mosquito from '../../assets/mosquito.png'
import whale from '../../assets/whale.png'

import raccoon from '../../assets/raccoon.png'
import panda from '../../assets/panda.png'
import rhinoceros from '../../assets/rhinoceros.png'
import puma from '../../assets/puma.png'

export default function HeroSection() {
    return (
        <div className="hero-section">
            <h2 className="title">
                CA<span className="colored">R</span>DS
            </h2>
            <div className="card-list">
                <HeroCard img={crocodile} name="crocodile" overall={8} attack={5} defens={7} align='10%' />
                <HeroCard img={bear} name="bear" overall={10} attack={10} defens={9} />
                <HeroCard img={alpaca} name="alpaca" overall={4} attack={5} defens={3} />
                <HeroCard img={shark} name="shark" overall={9} attack={7} defens={9} align={'10%'} />

                <HeroCard img={tiger} name="tiger" overall={10} attack={8} defens={10} align='80%' />
                <HeroCard img={owl} name="owl" overall={6} attack={4} defens={4} />
                <HeroCard img={wolf} name="wolf" overall={9} attack={7} defens={10} />
                <HeroCard img={hamster} name="hamster" overall={3} attack={4} defens={2} />

                <HeroCard img={cat} name="cat" overall={6} attack={9} defens={6} align={'25%'} />
                <HeroCard img={eagle} name="eagle" overall={7} attack={5} defens={7} />
                <HeroCard img={deer} name="deer" overall={7} attack={5} defens={7} />
                <HeroCard img={scorpion} name="scorpion" overall={7} attack={6} defens={6} />

                <HeroCard img={hippopotamus} name="hippopotamus" overall={8} attack={9} defens={8} align={'10%'} />
                <HeroCard img={orca} name="orca" overall={8} attack={9} defens={7} align={'80%'} />
                <HeroCard img={lion} name="lion" overall={10} attack={9} defens={10} />
                <HeroCard img={dog} name="dog" overall={8} attack={5} defens={7} align={'80%'} />

                <HeroCard img={dolphin} name="dolphin" overall={8} attack={7} defens={7} align={'5%'} />
                <HeroCard img={boar} name="boar" overall={8} attack={7} defens={7} align={'70%'} />
                <HeroCard img={piranha} name="piranha" overall={5} attack={3} defens={6} align={'65%'} />
                <HeroCard img={penguin} name="penguin" overall={3} attack={4} defens={2} />

                <HeroCard img={fox} name="fox" overall={5} attack={6} defens={5} />
                <HeroCard img={frog} name="frog" overall={3} attack={3} defens={2} />
                <HeroCard img={mongoose} name="mongoose" overall={5} attack={5} defens={5} />
                <HeroCard img={ram} name="ram" overall={8} attack={5} defens={7} align={'15%'} />

                <HeroCard img={giraffe} name="giraffe" overall={8} attack={5} defens={7} />
                <HeroCard img={hyena} name="hyena" overall={10} attack={10} defens={9} align={'15%'} />
                <HeroCard img={mosquito} name="mosquito" overall={2} attack={2} defens={1} />
                <HeroCard img={whale} name="whale" overall={9} attack={8} defens={9} align={'10%'} />

                <HeroCard img={raccoon} name="raccoon" overall={5} attack={5} defens={4} />
                <HeroCard img={panda} name="panda" overall={6} attack={6} defens={4} />
                <HeroCard img={rhinoceros} name="rhinoceros" overall={9} attack={10} defens={9} align={'8%'} />
                <HeroCard img={puma} name="puma" overall={10} attack={8} defens={10} align={'10%'} />
            </div>
        </div>
    );
}