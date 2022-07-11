import ExList from './Components/exList';
import ExForm from './Components/exForm';
import ExItem from './Components/exItem';
import Alert from './Components/Alert';
import {stringify, v4 as uuidv4} from 'uuid';
import React,{useState,useEffect} from 'react';

 
import './App.css';
//*const initilExpenses =[
 // {id:uuidv4(), charge:"rent",amount: 1600},
  //{id:uuidv4(), charge:"car ",amount: 145},
 // {id :uuidv4(), charge:"tonbila",amount: 0},
//];
const initilExpenses= localStorage.getItem("expenses")? 
JSON.parse(localStorage.getItem("expenses")):
[];
function App() {

  ///***************state*******+
  /// all expenses 
  const [expenses,setEcpenses] = useState(initilExpenses);

  //// single expense
  const [charge,setCharge] = useState('');

 //// single amoun
  const [amount,setAmount] = useState('');

  // Alert

  const [alert ,setAlert] = useState({show:false})

  //  edit 
  const [edit,setEdit] =useState(false)
  // deit  item 
  const [id, setId] = useState(0);


  useEffect(() =>{
  
    console.log(" useeffect"); 
    localStorage.setItem('expenses',JSON.stringify(expenses));
    },[expenses])


  ////fuctionality 




  const handleCharge = e => {

    setCharge(e.target.value)
  };

  const handleAmount = e => {
    
    setAmount(e.target.value)
  };

  //handle alert
 const handleAlert = ({type,text})=> {
  setAlert({show:true,type,text})
  setTimeout (()=>{
setAlert({show:false})
  },7050)
 }


 //// cler


 const clearitem =  ()  =>{
setEcpenses([]);
 }


const handledelet = (id) => {
  let tempExpenses = expenses.filter( item =>  item.id !==id);
  setEcpenses(tempExpenses)
  handleAlert({type:"danger",text:"item deleted "})
}
const handledit = (id) => {
  let  expense = expenses.find(item  => item.id === id );

  let {charge,amount} =expense 

  setCharge(charge)
  setAmount(amount)
  setEdit(true)
  setId(id)



}


const handleSubmit = e => {
  e.preventDefault ();
 
  if (charge !=""  && amount >0 ) {
    if (edit){
     let  tempExpenses = expenses.map (item => {
      return item.id === id?{...item,charge,amount} : item;

     });
     setEcpenses(tempExpenses);
     setEdit(false);
     handleAlert({type:"success", text:"item eddited "});


    }else{
      const singleExpense = {id:uuidv4(),charge,amount};
    setEcpenses([...expenses,singleExpense]);
    handleAlert({type:"success", text:"item adde"});
    }

   
    setCharge('');
    setAmount('');
    
    


  }else{
    //handle alert call 

    handleAlert({type:'danger' ,text:" maimknch dkhlt dakchi ghalet "
    })
  }

  
};

  return (
    <>
    {alert.show &&  < Alert  type={alert.type} text ={alert.text}  />}
<Alert/>


    <h1>budjet calculation</h1>
    <main className='App'>


    <ExForm charge={charge} amount={amount}
    handleAmount={handleAmount} handleCharge={handleCharge} handleSubmit={handleSubmit} edit={edit}
    
    />

    <ExList expenses= {expenses}  handledelet={handledelet}   handledit={handledit}  clearitem={clearitem}/>
    

    </main>
    <h1>
      total spendig : {""}
      <span className='total'>
        $
        {expenses.reduce ((acc, curr)=>{
           
          return (acc += parseInt(curr.amount));
        
        },0)}

      </span>
    </h1>
     
      
    
     
    </>
  );
}

export default App;
