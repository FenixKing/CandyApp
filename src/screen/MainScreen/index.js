import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch, faMapMarkerAlt, faPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {
    Content,
    GroupTitle,
    Title,
    Menu,
    MenuText,
    MenuTouchable,
    GroupCard,
    Card,
    ViewImage,
    ImageCard,
    BodyCard,
    TextCard,
    PriceCard,
    PlustIcon,
    GroupPlaces,
    TitlePlaces,
    CardPlaces,
    ImagePlaces,
    GroupTitleCardPlaces,
    TitleCardPlaces,
    SubTitleCardPlaces,
    GroupButton
} from './styled';

import { data } from '../../services/data';
import { Button } from '../../components/Button'

export const Main = () => {
    const [selected, useSelected] = useState('1')

    const menu = [
        {
            key: '1',
            name: 'Cadies',
            marginRight: 30
        },
        {
            key: '2',
            name: 'Gummy',
            marginRight: 30
        },
        {
            key: '3',
            name: 'Chocolate',
            marginRight: 30
        },
        {
            key: '4',
            name: 'Jelly beans',
            marginRight: 70
        }
    ];

    const card = [
        {
            key: '1',
            image: require('../../../assets/Cards/GummyBear.png'),
            name: `Gummy\nBears`,
            price: '$ 3.50',
            color: '#FEA177',
            colorPlus: '#FE5A40',
            width: 35,
            height: 70,
        },
        {
            key: '2',
            image: require('../../../assets/Cards/GummyBears.png'),
            name: `Gummy\nLemon`,
            price: '$ 4.50',
            color: '#F9C35C',
            colorPlus: '#E1A722',
            width: 70,
            height: 70,
        },
        {
            key: '3',
            image: require('../../../assets/Cards/GummyBears.png'),
            name: `Thumbs\nUp Gum`,
            price: '$4.50',
            color: '#7ACCF4',
            colorPlus: '#1BA0C7',
            width: 70,
            height: 70,
            marginRight: 40
        },
    ];


    return (
        <FlatList
            vertical
            data={['1']}
            keyExtractor={item => item}
            renderItem={({ item }) => (
                <Content>
                    <GroupTitle>
                        <Title>{`Best Deals\nfor you`}</Title>
                        <FontAwesomeIcon icon={faSearch} style={{ marginTop: 12 }} color='#FE5A40' size={24} />
                    </GroupTitle>
                    <Menu>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={menu}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => (
                                <MenuTouchable onPress={() => useSelected(item.key)} style={{ marginRight: item.marginRight }}>
                                    <MenuText style={selected === item.key ? { color: '#555' } : { color: "#999" }}>{item.name}</MenuText>
                                </MenuTouchable>
                            )}
                        />
                    </Menu>
                    <GroupCard>
                        <FlatList
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            data={card}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => (
                                <Card style={{ marginRight: item.marginRight }}>
                                    <BodyCard style={{ backgroundColor: item.color }}>
                                        <TextCard>{item.name}</TextCard>
                                        <PriceCard>{item.price}</PriceCard>
                                        <PlustIcon style={{ backgroundColor: item.colorPlus }}>
                                            <FontAwesomeIcon icon={faPlus} color='#fff' />
                                        </PlustIcon>
                                    </BodyCard>
                                    <ViewImage>
                                        <ImageCard source={item.image} style={{ width: item.width, height: item.height }} />
                                    </ViewImage>
                                </Card>
                            )}
                        />
                    </GroupCard>
                    <GroupPlaces>
                        <TitlePlaces>Top Markets</TitlePlaces>
                        <FlatList
                            vertical
                            showsVerticalScrollIndicator={false}
                            data={data}
                            keyExtractor={item => item.key}
                            renderItem={({ item }) => (
                                <CardPlaces>
                                    <ImagePlaces source={item.image} />
                                    <GroupTitleCardPlaces>
                                        <TitleCardPlaces>{item.title}</TitleCardPlaces>
                                        <SubTitleCardPlaces>{item.subtitle}</SubTitleCardPlaces>
                                    </GroupTitleCardPlaces>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} style={{ marginLeft: 70 }} size={22} color='#FE5A4060' />
                                </CardPlaces>
                            )}
                        />
                    </GroupPlaces>
                    <GroupButton>
                        <Button
                            color={{ color: '#fff', marginLeft: -70, fontSize: 18, marginTop: 6 }}
                            title='$12.50'
                            style={{ flexDirection: 'row', backgroundColor: '#EF6A35', marginLeft: 130, top: -33, height: 65, borderRadius: 70 }}
                            more={<FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: 80, marginTop: 6 }} color="#fff" size={24} />}
                        />
                    </GroupButton>
                </Content >
            )}
        />
    )
}