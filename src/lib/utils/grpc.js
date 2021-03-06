import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

const url = 'https://whu-lambda.moe/api/v1';
const protoPromise = protoLoader.load('static/whu_lambda_web.proto').then((def) => grpc.loadPackageDefinition(def).whu.lambda.moe.dto);
const anonymousPromise = protoPromise.then((proto) => new proto.Anonymous(url, grpc.credentials.createSsl()));
const authedPromise = protoPromise.then((proto) => new proto.Authenticated(url, grpc.credentials.createSsl()));

export { anonymousPromise, authedPromise };
