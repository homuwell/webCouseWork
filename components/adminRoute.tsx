import React from 'react';
import {VERIFY_ADMIN} from "../src/GraphQL/Query";
import {initializeApollo} from "../lib/apolloClients";
const AdminRoute = (WrappedComponent) => {
    return class extends React.Component {
        static async getInitialProps(ctx) {
            let isAdmin;
            if (ctx.req) {
                const apolloClient = initializeApollo();
                await apolloClient.query({
                    query: VERIFY_ADMIN,
                    variables: {
                        token: ctx.req.cookies.token,
                    }
                }).then((res) => {
                    isAdmin = res.data.getUserData.type
                }).catch(err => {
                    isAdmin = false;
                })
            }
            console.log(isAdmin);
            if(isAdmin) {
                const pageProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));
                return {...pageProps}
            } else {
                ctx.res.writeHead(302, {
                    Location: 'http://localhost:3000'
                });
                ctx.res.end();
            }
        }
        render() {
            return <WrappedComponent {...this.props} />
        }
    };
}

export default AdminRoute;