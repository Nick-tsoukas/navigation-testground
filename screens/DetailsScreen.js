import React from 'react'
import * as eva from '@eva-design/eva';
import { StyleSheet } from 'react-native';
import { Layout, Text } from '@ui-kitten/components';

const DetailsScreen = ({navigation}, props ) => {
    return(
        <Layout>
            <Text>This is the details screen</Text>
        </Layout>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});

export default DetailsScreen