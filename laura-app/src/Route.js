import TextBox from "./TextBox";
import {useState} from "react";
import {AwesomeButton} from "react-awesome-button";
import axios from "axios";

function Route() {
    const [srcLat, setSrcLat] = useState(0);
    const [destLat, setDestLat] = useState(0);
    const [srcLong, setSrcLong] = useState(0);
    const [destLong, setDestLong] = useState(0);
    const [route, setRoute] = useState([]);

    /**
     * Makes an axios request.
     */
    const requestRoute = () => {
        const toSend = {
            srclat: srcLat,
            srclong: srcLong,
            destlat: destLat,
            destlong: destLong,
        };

        let config = {
            headers: {
                "Content-Type": "application/json",
                'Access-Control-Allow-Origin': '*',
            }
        }

        axios.post(
                'http://localhost:4567/route',
                toSend,
                config
        )
            .then(response => {
                console.log(response.data);
                setRoute(response.data["route"]);
            })

            .catch(function (error) {
                console.log(error);

            });
    }


    return (
        <div className="Route">
            <header className="Route-header">
                My Route
            </header>
            <TextBox label={"Source Latitude"} change={setSrcLat}/>
            <TextBox label={"Destination Latitude"} change={setDestLat}/>
            <TextBox label={"Source Longitude"} change={setSrcLong}/>
            <TextBox label={"Destination Longitude"} change={setDestLong}/>

            <AwesomeButton onPress={requestRoute}>Submit</AwesomeButton>

            <div>
                {route.map((element, i) => (
                    <p>{element[0]} , {element[1]}</p>
                    ))}
            </div>
            
        </div>
    );
}

export default Route;