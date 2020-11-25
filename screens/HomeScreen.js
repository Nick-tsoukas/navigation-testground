import React from 'react';
import { StyleSheet } from 'react-native';
import { Layout, Text, Button } from '@ui-kitten/components';

const HomeScreen = ({navigation}, props ) => {
    return(
        <Layout style={styles.screen}>
           <Button>
               Click Me 
           </Button>
        </Layout>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default HomeScreen;