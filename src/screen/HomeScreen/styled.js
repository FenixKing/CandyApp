import styled from 'styled-components';

export const Container = styled.View({
    flex: 1
});

export const Content = styled.View({
});

export const Image = styled.Image({
    width: 50,
    height: 50,
    borderRadius: 10,
    marginBottom: 50,
});

export const Title = styled.Text({ fontSize: 32, color: '#fff' });

export const ButtonSignUp = styled.TouchableOpacity({
    marginTop: 260,
    width: 260,
    height: 60,
    border: 'white',
    borderRadius: 30,
    padding: 15,
    paddingLeft: 95,
});

export const ButtonSignUpText = styled.Text({ fontSize: 20, color: '#fff' });

export const ButtonSignIn = styled.TouchableOpacity({
    marginTop: 20,
    width: 260,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 15,
    paddingLeft: 95,
});

export const ButtonSignInText = styled.Text({ fontSize: 20, color: '#EF6A35' });

export const ForgotPassword = styled.TouchableOpacity({
    borderBottomColor: 'white',
    borderBottomWidth: 2,
    width: 130,
    marginLeft: 60,
    marginTop: 40,

});
export const ForgotPasswordText = styled.Text({ color: '#fff', fontSize: 16, });

