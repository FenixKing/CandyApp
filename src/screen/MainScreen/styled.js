import styled from 'styled-components';

export const Content = styled.View({
    paddingTop: 80,
    paddingLeft: 40,
    flex: 1,
    backgroundColor: '#fff'
});

export const GroupTitle = styled.View({
    flexDirection: 'row',
    marginBottom: 30
});
export const Title = styled.Text({
    marginRight: 90,
    fontSize: 34
});
export const Menu = styled.View({
    marginTop: 20,
    width: 350,
});
export const MenuTouchable = styled.TouchableOpacity({});
export const MenuText = styled.Text({
    fontSize: 18,
});


export const GroupCard = styled.View({
    width: 350,
    height: 260
});
export const ViewImage = styled.View({
    width: 70,
    height: 70,
});
export const ImageCard = styled.Image({
    marginLeft: 20,
});
export const Card = styled.View({
    paddingRight: 60,
    marginTop: 40,
});
export const BodyCard = styled.View({
    position: 'absolute',
    width: 110,
    height: 150,
    borderRadius: 30,
    padding: 20,
    marginTop: 30,
});
export const TextCard = styled.Text({
    marginTop: 35,
    color: '#fff'
});
export const PriceCard = styled.Text({
    fontWeight: 'bold',
    marginTop: 15,
    color: '#fff'
});
export const PlustIcon = styled.View({
    width: 30,
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 60,
});

export const GroupPlaces = styled.View({
    paddingLeft: 40,
    marginTop: 495,
    height: 300,
    position: 'absolute'
});
export const TitlePlaces = styled.Text({
    fontSize: 22,
    marginTop: 20,
    marginBottom: 40,
});
export const CardPlaces = styled.View({
    flexDirection: 'row',
    paddingBottom: 30
});
export const ImagePlaces = styled.Image({
    width: 40,
    height: 40,
    borderRadius: 10
});
export const GroupTitleCardPlaces = styled.View({
    paddingLeft: 20,
    width: 150
});
export const TitleCardPlaces = styled.Text({
    marginBottom: 1,
    fontSize: 16,
});
export const SubTitleCardPlaces = styled.Text({
    fontSize: 12,
    color: '#999'
});

export const GroupButton = styled.View({
    backgroundColor: '#ffffff70',
    height: 50,
    marginTop: 200,
    marginLeft: -40,
});
