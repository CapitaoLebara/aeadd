import React from 'react'
import { useState } from 'react'




const Home = () => {
    const [lot,setLot] = useState({
        TipeTable:'Regular',
        valorMe:'',
        metro:'',
        vista:'',
        parce12:'',
        parce24:'',
        parce36:'',
        parce48:'',
        parce60:'',
        parce80:'',
        parce100:'',
        parce120:'',
        parce150:'',
        parce200:'',
    })
    

//MUDANÇA DE ATUALIZAÇÃO AUTOMATICA DA METRAGEM DO LOTE
const handleOnChangeLot=(event,key)=>{
    setLot({...lot,[key]:event.target.value})
}

//EVENT PARCE RIGHT
function Regular(){
    const x = parseFloat(lot.metro)
    var valor_do_metro = 100
    /*LOT A VISTA */
    var lotVista = x*valor_do_metro
    

/*============= 12 ========*/
    var lot_parcelado12 = (lotVista+(lotVista*0.05148))/12


/*============= 24 ========*/
var lot_parcelado24 = (lotVista+(lotVista*0.10296))/24


/*============= 36 ========*/
var lot_parcelado36 = (lotVista+(lotVista*0.15444))/36


/*============= 48 ========*/
var lot_parcelado48 = (lotVista+(lotVista*0.20592))/48


/*============= 60 ========*/
var lot_parcelado60 = (lotVista+(lotVista*0.2574))/60




/*============= 80 ========*/
var lot_parcelado80 = (lotVista+(lotVista*0.3432))/80



/*============= 100 ========*/
var lot_parcelado100 = (lotVista+(lotVista*0.429))/100
// 


/*============= 120 ========*/
var lot_parcelado120 = (lotVista+(lotVista*0.5148))/120
// 

/*============= 150 ========*/
var lot_parcelado150 = (lotVista+(lotVista*0.6435))/150
// 

/*============= 200 ========*/
var lot_parcelado200 = (lotVista+(lotVista*0.858))/200
// 
setLot({...lot, vista:lotVista.toFixed(2),
    parce12:lot_parcelado12.toFixed(2),
    parce24:lot_parcelado24.toFixed(2),
    parce36:lot_parcelado36.toFixed(2),
    parce48:lot_parcelado48.toFixed(2),
    parce60:lot_parcelado60.toFixed(2),
    parce80:lot_parcelado80.toFixed(2),
    parce100:lot_parcelado100.toFixed(2),
    parce120:lot_parcelado120.toFixed(2),
    parce150:lot_parcelado150.toFixed(2),
    parce200:lot_parcelado200.toFixed(2)})
}

//EVENT PARCE ERR
function Irregular(){
    const x = parseFloat(lot.metro)
    var valor_do_metro = 78.57
    /*LOT A VISTA */
    var lotVista = x*valor_do_metro

    
/*============= 12 ========*/
var lot_parcelado12 = (lotVista+(lotVista*0.05148))/12


/*============= 24 ========*/
var lot_parcelado24 = (lotVista+(lotVista*0.10296))/24


/*============= 36 ========*/
var lot_parcelado36 = (lotVista+(lotVista*0.15444))/36


/*============= 48 ========*/
var lot_parcelado48 = (lotVista+(lotVista*0.20592))/48


/*============= 60 ========*/
var lot_parcelado60 = (lotVista+(lotVista*0.2574))/60




/*============= 80 ========*/
var lot_parcelado80 = (lotVista+(lotVista*0.3432))/80



/*============= 100 ========*/
var lot_parcelado100 = (lotVista+(lotVista*0.429))/100
// 


/*============= 120 ========*/
var lot_parcelado120 = (lotVista+(lotVista*0.5148))/120
// 

/*============= 150 ========*/
var lot_parcelado150 = (lotVista+(lotVista*0.6435))/150
// 

/*============= 200 ========*/
var lot_parcelado200 = (lotVista+(lotVista*0.858))/200



setLot({...lot, vista:lotVista.toFixed(2),
    parce12:lot_parcelado12.toFixed(2),
    parce24:lot_parcelado24.toFixed(2),
    parce36:lot_parcelado36.toFixed(2),
    parce48:lot_parcelado48.toFixed(2),
    parce60:lot_parcelado60.toFixed(2),
    parce80:lot_parcelado80.toFixed(2),
    parce100:lot_parcelado100.toFixed(2),
    parce120:lot_parcelado120.toFixed(2),
    parce150:lot_parcelado150.toFixed(2),
    parce200:lot_parcelado200.toFixed(2)
})

}

// EVENDO TE TECLADO
if(lot.TipeTable =='Regular'){
    document.onkeydown=(e)=>{
        if(e.keyCode==13 || e.keyCode==32){
            Regular()
        }
    }
}
if(lot.TipeTable =='Irregular'){
    document.onkeydown=(e)=>{
        if(e.keyCode==13 || e.keyCode==32){
            Irregular()
        }
    }
}





  return (
            <form className=' w-[640px] flex flex-col'>
                {/* TIPO DE TABELA PARA O CALCULO DOS LOTES */}
                <div className='flex text-xl'>
                    <h1 className='text-xl rounded-md rounded-r-none bg-black text-white px-2 py-1'>Tabela de Lotes:</h1>
                    <select value={lot.TipeTable} onChange={(event)=>handleOnChangeLot(event,'TipeTable')}  className='text-center uppercase text-xl border border-black appearance-none bg-white outline-none font-medium px-4 rounded-md rounded-l-none'>
                        <option value="Regular">Regular</option>
                        <option value="Irregular">Irregular</option>
                    </select>

                </div>

                {/* METRAGEM DO LOTE */}
                <div className= 'flex mx-auto text-center w-full'>
                        <label className='border w-full border-black'><p className=' text-lg'> Metragem do lote:</p></label>
                            <input value={lot.metro} onChange={(event)=>handleOnChangeLot(event,'metro')} type="number" className='font-medium outline-none w-full text-sm border border-black uppercase p-2 text-center' />
                    </div>
                    {/* VALOR DO METRO */}
                    <div className= 'flex mx-auto text-center w-full'>
                        <label className='border w-full border-black'><p className=' text-lg'> Valor do metro Quadrado:</p></label>
                        {lot.TipeTable=='Regular'?
                        (<input type="text" value='100' className='font-medium outline-none w-full text-sm border border-black uppercase p-2 text-center' />):
                        ( <input type="text" value='78,57' className='font-medium outline-none w-full text-sm border border-black uppercase p-2 text-center' />)}
                           
                    </div>
                    {/* JUROS AO MÊS */}
                    <div className= 'flex mx-auto text-center w-full'>
                        <label className='border w-full border-black'><p className=' text-lg'> Juros ao Mês:</p></label>
                            <input type="text" value='0.42900%' className='font-medium outline-none w-full text-sm border border-black uppercase p-2 text-center' />
                    </div>
                    {/* VALOR DO LOTE A VISTA */}
                    <div className= 'flex mx-auto text-center w-full'>
                        <label className='border w-full border-black'><p className=' text-lg'>Valor do Lote a vista:</p></label>
                            <input type="text" value={lot.vista} className='font-medium outline-none w-full text-sm border border-black uppercase p-2 text-center' />
                    </div>

                    {/* PARCELAS */}
                    <div className=' text-center mt-4 pb-4' >
                        <h1>Parcelas</h1> 
                        <div className= 'flex flex-col  mx-auto text-center w-full  mb-6'>
                            <div className=' flex flex-col  p-4 bg-white rounded-lg'>
                                <label  className='border justify-center items-center p-1 w-full font-bold border-black'><p className=' mt-2 text-lg'>12 parcelas</p></label>
                                
                                <div className='flex'>
                                    <div className='flex w-full flex-col'>
                                        <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas</p></label>
                                        <input value={lot.parce12} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                    </div>
                        
                                    <div className='flex w-full flex-col '>
                                        <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor do jursos</p></label>
                                        <input value='0,5148%' type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                    </div>
                                    <div className='flex w-full flex-col '>
                                        <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor total com juros</p></label>
                                        <input value={lot.parce12} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <div className= 'flex flex-col  mx-auto text-center w-full  mb-6'>
                            <div className=' flex flex-col  p-4 bg-white rounded-lg'>
                            <label  className='border w-full justify-center items-center p-1 border-black'><p className=' mt-2 text-lg'>24 parcelas</p></label>
                                
                                    <div className='flex'>
                                        <div className='flex w-full flex-col'>
                                            <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas</p></label>
                                            <input value={lot.parce24} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                        </div>
                                        <div className='flex w-full flex-col'>
                                            <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor do juros</p></label>
                                            <input value='10,296%' type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                        </div>
                                        <div className='flex w-full flex-col'>
                                            <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor total com juros</p></label>
                                            <input value={lot.parce24} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                        </div>
                                    </div>
                                    
                               
                            </div>
                        </div>

                        <div className= 'flex flex-col  mx-auto text-center w-full  mb-6'>
                            <div className=' flex flex-col  p-4 bg-white rounded-lg'>
                            <label  className='border justify-center items-center p-1 w-full border-black'><p className=' mt-2 text-lg'>36 parcelas</p></label>
                            <div className='flex'>
                                        <div className='flex w-full flex-col'>
                                            <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas</p></label>
                                            <input value={lot.parce36} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                        </div>
                                        <div className='flex w-full flex-col'>
                                            <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor do juros</p></label>
                                            <input value='15,444%' type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                        </div>
                                        <div className='flex w-full flex-col'>
                                            <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor total com juros</p></label>
                                            <input value={lot.parce36} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                        </div>
                                    </div>
                            </div>
                        </div>

                        <div className= 'flex flex-col  mx-auto text-center w-full  mb-6'>
                            <div className=' flex flex-col  p-4 bg-white rounded-lg'>
                            <label  className='border justify-center items-center p-1 w-full border-black'><p className=' mt-2 text-lg'>48 parcelas</p></label>
                                <div className='flex'>
                                            <div className='flex w-full flex-col'>
                                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas</p></label>
                                                <input value={lot.parce48} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                            </div>
                                            <div className='flex w-full flex-col'>
                                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor do juros</p></label>
                                                <input value='20,592%' type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                            </div>
                                            <div className='flex w-full flex-col'>
                                                <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor total com juros</p></label>
                                                <input value={lot.parce48} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                            </div>
                                </div>
                            </div>
                        </div>
                    
                        <div className= 'flex flex-col  mx-auto text-center w-full  mb-6'>
                            <div className=' flex flex-col  p-4 bg-white rounded-lg'>
                            <label  className='border justify-center items-center p-1 w-full border-black'><p className=' mt-2 text-lg'>60 parcelas</p></label>
                                    <div className='flex'>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas</p></label>
                                                    <input value={lot.parce60} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor do juros</p></label>
                                                    <input value='25,74%' type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor total com juros</p></label>
                                                    <input value={lot.parce60} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                    </div>
                            </div>
                        </div>

                        <div className= 'flex flex-col  mx-auto text-center w-full  mb-6'>
                            <div className=' flex flex-col  p-4 bg-white rounded-lg'>
                            <label  className='border justify-center items-center p-1 w-full border-black'><p className=' mt-2 text-lg'>80 parcelas</p></label>
                                    <div className='flex'>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas</p></label>
                                                    <input value={lot.parce80} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor do juros</p></label>
                                                    <input value='34,32%' type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor total com juros</p></label>
                                                    <input value={lot.parce80} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                    </div>
                            </div>
                        </div>

                        <div className= 'flex flex-col  mx-auto text-center w-full  mb-6'>
                            <div className=' flex flex-col  p-4 bg-white rounded-lg'>
                            <label  className='border justify-center items-center p-1 w-full border-black'><p className=' mt-2 text-lg'>100 parcelas</p></label>
                                    <div className='flex'>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas</p></label>
                                                    <input value={lot.parce100} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor do juros</p></label>
                                                    <input value='42,90%' type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor total com juros</p></label>
                                                    <input value={lot.parce100} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                    </div>
                            </div>
                        </div>
                        <div className= 'flex flex-col  mx-auto text-center w-full  mb-6'>
                            <div className=' flex flex-col  p-4 bg-white rounded-lg'>
                            <label  className='border justify-center items-center p-1 w-full border-black'><p className=' mt-2 text-lg'>120 parcelas</p></label>
                                     <div className='flex'>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas</p></label>
                                                    <input value={lot.parce120} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor do juros</p></label>
                                                    <input value='51,48%' type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor total com juros</p></label>
                                                    <input value={lot.parce120} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                    </div>
                            </div>
                        </div>

                        <div className= 'flex flex-col  mx-auto text-center w-full  mb-6'>
                            <div className=' flex flex-col  p-4 bg-white rounded-lg'>
                            <label  className='border justify-center items-center p-1 w-full border-black'><p className=' mt-2 text-lg'>150 parcelas</p></label>
                                     <div className='flex'>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas</p></label>
                                                    <input value={lot.parce150} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor do juros</p></label>
                                                    <input value='64,35%' type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor total com juros</p></label>
                                                    <input value={lot.parce150} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                    </div>
                            </div>
                        </div>

                        <div className= 'flex flex-col  mx-auto text-center w-full  mb-6'>
                            <div className=' flex flex-col  p-4 bg-white rounded-lg'>
                            <label  className='border justify-center items-center p-1 w-full border-black'><p className=' mt-2 text-lg'>200 parcelas</p></label>
                            <div className='flex'>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor das parcelas</p></label>
                                                    <input value={lot.parce200} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor do juros</p></label>
                                                    <input value='85,80%' type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                                <div className='flex w-full flex-col'>
                                                    <label  className='border border-black'><p className='text-lg bg-black text-white'>Valor total com juros</p></label>
                                                    <input value={lot.parce200} type="text"className='font-medium outline-none w-full text-sm border border-black uppercase p-1 text-center' />
                                                </div>
                                    </div>
                            </div>
                        </div>
                    </div>

                    {/* BUTTON EXECUT EVENT */}
            {lot.TipeTable=='Regular' ?
            (<input className='p-2 hover:bg-gray-600 hover:transition-all cursor-pointer bg-gray-700 mb-10 text-white' type="button" value="Regular" onClick={Regular}/>) :  
            (<input className='p-2  hover:bg-gray-600 hover:transition-all cursor-pointer bg-gray-700 mb-10  text-white' type="button" value="Irregular" onClick={Irregular} />)}
            </form>
  )
}


export default Home