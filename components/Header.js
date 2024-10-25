import React from 'react';
import { Box, HStack, IconButton, Image } from 'native-base';

// Function Component with props
const Header = (props) => {
    return (
        <Box bg="#AA0002" p={4}>
            <HStack justifyContent="space-between" alignItems="center">
                <IconButton
                    icon={<Image source={require('../assets/menu.png')} alt="menu" width={5} height={5} />}
                    onPress={() => props.drawer.current.openDrawer()}
                />
                <HStack space={4}>
                    <Image source={require("../assets/facebook.png")} alt="facebook" width={18} height={18} />
                    <Image source={require("../assets/youtube.png")} alt="youtube" width={18} height={18} />
                    <Image source={require("../assets/twitter.png")} alt="twitter" width={18} height={18} />
                    <Image source={require("../assets/search.png")} alt="search" width={18} height={18} />
                </HStack>
            </HStack>
        </Box>
    );
};

export default Header;