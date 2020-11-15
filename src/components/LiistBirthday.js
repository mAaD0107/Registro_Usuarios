import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import AddBirthday from './AddBirthday'
import ActionBar from './ActionBar'

export default function LiistBirthday() {

    const [showList, setShowList] = useState(false);

    return (
        <View style={styles.container}>
            {showList ? (
                <>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                    <Text>LIST</Text>
                    <Text>LIST</Text> 
                </>
            ) : (
                <AddBirthday />
            )}
            <ActionBar showList = {showList} setShowList = {setShowList}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        height: "100%",
    },

})

