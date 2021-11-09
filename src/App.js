import CardComponents from "./components/CardComponents";
import GreetingsComponent from "./components/GreetingsComponent";
import RandomComponent from "./components/RandomComponent";
import BoxColorComponent from "./components/BoxColorComponent";
import CreditCardComponent from "./components/CreditCardComponent";
import { Grid } from "@chakra-ui/layout";
import RatingComponent from "./components/RatingComponent";

function App() {
  return (
    <div>
        <CardComponents 
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <CardComponents 
          lastName = 'Delores' 
          firstName = 'Obrien' 
          gender = 'female' 
          height = { 172 } 
          birth = { new  Date ( "1988-05-11" ) } 
          picture = "https://randomuser.me/api/portraits/women/44.jpg" 
        />

        <GreetingsComponent lang='de'> Ludwing </GreetingsComponent>
        <GreetingsComponent lang='fr'> François </GreetingsComponent>
        <GreetingsComponent lang='en'> François </GreetingsComponent>
        <GreetingsComponent lang='es'> François </GreetingsComponent>

        <RandomComponent min={1} max={6}/>
        <RandomComponent min={1} max={100}/>

        <BoxColorComponent color={'#95e64f'} textColor={'#000'} />
        <BoxColorComponent color={'#E64A21'} textColor={'#ffff'} />
      
        <Grid templateColumns='repeat(3, 1fr)' gap={4} mt='10px'> 
          <CreditCardComponent
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" 
          />

          <CreditCardComponent
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222" />

          <CreditCardComponent
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" 
            />
        </Grid> 

        <RatingComponent>0</RatingComponent>
        <RatingComponent>1.49</RatingComponent>
        <RatingComponent>1.5</RatingComponent>
        <RatingComponent>3</RatingComponent>
        <RatingComponent>4</RatingComponent>
        <RatingComponent>5</RatingComponent>
        

    </div>
  );
}

export default App;
