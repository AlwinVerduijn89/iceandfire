import { Avatar, AvatarGroup, ListIcon, ListItem } from "@chakra-ui/react";
import { HouseItemProps } from "../interfaces";

const HouseListItem = ({ name, passedIcon }: HouseItemProps) => {
    const PassedIcon = passedIcon;

    return (
        <>
            <ListItem key={name}>
                <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                <div style={{marginLeft: "10px", display: "inline-block"}}>{name}</div>
            </ListItem>
        </>
    )
}

export default HouseListItem;