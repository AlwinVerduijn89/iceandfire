import {useState, useEffect, ReactChild, ReactFragment, ReactPortal} from "react";
import axios from 'axios';
import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Avatar,
  } from "@chakra-ui/react"
import Filters from "../components/Filters";

const baseURL = "https://www.anapioficeandfire.com/api/houses";

const HouseList = () => {
    const [page, setPage] = useState(1);
    const [houses, setHouses] = useState<any[]>([]);

    function handlePageDecrement() {
        setPage(page - 1);
    }

    function handlePageIncrement() {
        setPage(page + 1);
    }

    useEffect(() => {
        loadHouses();
    }, [page])
    
    function loadHouses() {
        axios
            .get(baseURL, { params: { page } })
            .then((response) => {
                setHouses(response?.data);
            });
    }

    return (
        <>
            <Accordion>
                {
                    houses?.map(house => {
                        return (
                            <AccordionItem key={house.name}>
                                <h2>
                                    <AccordionButton>
                                    <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                                    <div style={{marginLeft: "10px", display: "inline-block"}}>{house.name}</div>
                                    <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    <dl>
                                    <dt>Region:</dt> <dd>{house.region}</dd>
                                    <dt>Coat of Arms:</dt> <dd>{house.coatOfArms}</dd>
                                    {house.words && <><dt>Words:</dt> <dd>{house.words}</dd></>}
                                    {house.swornMembers && 
                                        <>
                                            <dt>Sworn Members:</dt>
                                            <dd>
                                                <ul>
                                                    {house.swornMembers.map((memberUrl: string) => {
                                                        axios.get(memberUrl).then(function(response) {
                                                            <li key={response.data.name}>{response.data.name}</li>
                                                        })
                                                        .catch(function(err) {
                                                            console.log(err)
                                                        })
                                                    })}
                                                </ul>
                                            </dd>
                                        </>}
                                    </dl>
                                </AccordionPanel>
                            </AccordionItem>
                        )
                    })
                }
            </Accordion>
            <Filters onPageDecrement={handlePageDecrement} onPageIncrement={handlePageIncrement} page={page} />
        </>
    )
}

export default HouseList;