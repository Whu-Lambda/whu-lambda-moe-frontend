import grpc from '@grpc/grpc-js';
import protoLoader from '@grpc/proto-loader';

const url = 'https://whu-lambda.moe';
const protoPromise = protoLoader.load('../protos/whu_lambda_web.proto').then((def) => grpc.loadPackageDefinition(def).whu.lambda.moe.dto);
const anonymousPromise = protoPromise.then((proto) => new proto.Anonymous(url, grpc.credentials.createSsl()));
const authedPromise = protoPromise.then((proto) => new proto.Authenticated(url, grpc.credentials.createSsl()));

export { anonymousPromise, authedPromise };
