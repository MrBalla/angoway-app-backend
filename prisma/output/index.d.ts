
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Driver
 * 
 */
export type Driver = $Result.DefaultSelection<Prisma.$DriverPayload>
/**
 * Model Bus
 * 
 */
export type Bus = $Result.DefaultSelection<Prisma.$BusPayload>
/**
 * Model Travel
 * 
 */
export type Travel = $Result.DefaultSelection<Prisma.$TravelPayload>
/**
 * Model Route
 * 
 */
export type Route = $Result.DefaultSelection<Prisma.$RoutePayload>
/**
 * Model RouteSchedule
 * 
 */
export type RouteSchedule = $Result.DefaultSelection<Prisma.$RouteSchedulePayload>
/**
 * Model Stop
 * 
 */
export type Stop = $Result.DefaultSelection<Prisma.$StopPayload>
/**
 * Model RouteStop
 * 
 */
export type RouteStop = $Result.DefaultSelection<Prisma.$RouteStopPayload>
/**
 * Model Feedback
 * 
 */
export type Feedback = $Result.DefaultSelection<Prisma.$FeedbackPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.driver`: Exposes CRUD operations for the **Driver** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.driver.findMany()
    * ```
    */
  get driver(): Prisma.DriverDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bus`: Exposes CRUD operations for the **Bus** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Buses
    * const buses = await prisma.bus.findMany()
    * ```
    */
  get bus(): Prisma.BusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.travel`: Exposes CRUD operations for the **Travel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Travels
    * const travels = await prisma.travel.findMany()
    * ```
    */
  get travel(): Prisma.TravelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.route`: Exposes CRUD operations for the **Route** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Routes
    * const routes = await prisma.route.findMany()
    * ```
    */
  get route(): Prisma.RouteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routeSchedule`: Exposes CRUD operations for the **RouteSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteSchedules
    * const routeSchedules = await prisma.routeSchedule.findMany()
    * ```
    */
  get routeSchedule(): Prisma.RouteScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stop`: Exposes CRUD operations for the **Stop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stops
    * const stops = await prisma.stop.findMany()
    * ```
    */
  get stop(): Prisma.StopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.routeStop`: Exposes CRUD operations for the **RouteStop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RouteStops
    * const routeStops = await prisma.routeStop.findMany()
    * ```
    */
  get routeStop(): Prisma.RouteStopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.feedback`: Exposes CRUD operations for the **Feedback** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feedbacks
    * const feedbacks = await prisma.feedback.findMany()
    * ```
    */
  get feedback(): Prisma.FeedbackDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Driver: 'Driver',
    Bus: 'Bus',
    Travel: 'Travel',
    Route: 'Route',
    RouteSchedule: 'RouteSchedule',
    Stop: 'Stop',
    RouteStop: 'RouteStop',
    Feedback: 'Feedback',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "driver" | "bus" | "travel" | "route" | "routeSchedule" | "stop" | "routeStop" | "feedback" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Driver: {
        payload: Prisma.$DriverPayload<ExtArgs>
        fields: Prisma.DriverFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DriverFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DriverFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findFirst: {
            args: Prisma.DriverFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DriverFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          findMany: {
            args: Prisma.DriverFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          create: {
            args: Prisma.DriverCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          createMany: {
            args: Prisma.DriverCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DriverCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          delete: {
            args: Prisma.DriverDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          update: {
            args: Prisma.DriverUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          deleteMany: {
            args: Prisma.DriverDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DriverUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DriverUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>[]
          }
          upsert: {
            args: Prisma.DriverUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DriverPayload>
          }
          aggregate: {
            args: Prisma.DriverAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDriver>
          }
          groupBy: {
            args: Prisma.DriverGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriverGroupByOutputType>[]
          }
          count: {
            args: Prisma.DriverCountArgs<ExtArgs>
            result: $Utils.Optional<DriverCountAggregateOutputType> | number
          }
        }
      }
      Bus: {
        payload: Prisma.$BusPayload<ExtArgs>
        fields: Prisma.BusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findFirst: {
            args: Prisma.BusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          findMany: {
            args: Prisma.BusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          create: {
            args: Prisma.BusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          createMany: {
            args: Prisma.BusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          delete: {
            args: Prisma.BusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          update: {
            args: Prisma.BusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          deleteMany: {
            args: Prisma.BusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>[]
          }
          upsert: {
            args: Prisma.BusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusPayload>
          }
          aggregate: {
            args: Prisma.BusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBus>
          }
          groupBy: {
            args: Prisma.BusGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusCountArgs<ExtArgs>
            result: $Utils.Optional<BusCountAggregateOutputType> | number
          }
        }
      }
      Travel: {
        payload: Prisma.$TravelPayload<ExtArgs>
        fields: Prisma.TravelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TravelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TravelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          findFirst: {
            args: Prisma.TravelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TravelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          findMany: {
            args: Prisma.TravelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>[]
          }
          create: {
            args: Prisma.TravelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          createMany: {
            args: Prisma.TravelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TravelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>[]
          }
          delete: {
            args: Prisma.TravelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          update: {
            args: Prisma.TravelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          deleteMany: {
            args: Prisma.TravelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TravelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TravelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>[]
          }
          upsert: {
            args: Prisma.TravelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TravelPayload>
          }
          aggregate: {
            args: Prisma.TravelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTravel>
          }
          groupBy: {
            args: Prisma.TravelGroupByArgs<ExtArgs>
            result: $Utils.Optional<TravelGroupByOutputType>[]
          }
          count: {
            args: Prisma.TravelCountArgs<ExtArgs>
            result: $Utils.Optional<TravelCountAggregateOutputType> | number
          }
        }
      }
      Route: {
        payload: Prisma.$RoutePayload<ExtArgs>
        fields: Prisma.RouteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findFirst: {
            args: Prisma.RouteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          findMany: {
            args: Prisma.RouteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          create: {
            args: Prisma.RouteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          createMany: {
            args: Prisma.RouteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          delete: {
            args: Prisma.RouteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          update: {
            args: Prisma.RouteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          deleteMany: {
            args: Prisma.RouteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>[]
          }
          upsert: {
            args: Prisma.RouteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoutePayload>
          }
          aggregate: {
            args: Prisma.RouteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoute>
          }
          groupBy: {
            args: Prisma.RouteGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteCountArgs<ExtArgs>
            result: $Utils.Optional<RouteCountAggregateOutputType> | number
          }
        }
      }
      RouteSchedule: {
        payload: Prisma.$RouteSchedulePayload<ExtArgs>
        fields: Prisma.RouteScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>
          }
          findFirst: {
            args: Prisma.RouteScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>
          }
          findMany: {
            args: Prisma.RouteScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>[]
          }
          create: {
            args: Prisma.RouteScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>
          }
          createMany: {
            args: Prisma.RouteScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>[]
          }
          delete: {
            args: Prisma.RouteScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>
          }
          update: {
            args: Prisma.RouteScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>
          }
          deleteMany: {
            args: Prisma.RouteScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>[]
          }
          upsert: {
            args: Prisma.RouteScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteSchedulePayload>
          }
          aggregate: {
            args: Prisma.RouteScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteSchedule>
          }
          groupBy: {
            args: Prisma.RouteScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<RouteScheduleCountAggregateOutputType> | number
          }
        }
      }
      Stop: {
        payload: Prisma.$StopPayload<ExtArgs>
        fields: Prisma.StopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>
          }
          findFirst: {
            args: Prisma.StopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>
          }
          findMany: {
            args: Prisma.StopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>[]
          }
          create: {
            args: Prisma.StopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>
          }
          createMany: {
            args: Prisma.StopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>[]
          }
          delete: {
            args: Prisma.StopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>
          }
          update: {
            args: Prisma.StopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>
          }
          deleteMany: {
            args: Prisma.StopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>[]
          }
          upsert: {
            args: Prisma.StopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StopPayload>
          }
          aggregate: {
            args: Prisma.StopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStop>
          }
          groupBy: {
            args: Prisma.StopGroupByArgs<ExtArgs>
            result: $Utils.Optional<StopGroupByOutputType>[]
          }
          count: {
            args: Prisma.StopCountArgs<ExtArgs>
            result: $Utils.Optional<StopCountAggregateOutputType> | number
          }
        }
      }
      RouteStop: {
        payload: Prisma.$RouteStopPayload<ExtArgs>
        fields: Prisma.RouteStopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RouteStopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RouteStopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>
          }
          findFirst: {
            args: Prisma.RouteStopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RouteStopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>
          }
          findMany: {
            args: Prisma.RouteStopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>[]
          }
          create: {
            args: Prisma.RouteStopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>
          }
          createMany: {
            args: Prisma.RouteStopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RouteStopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>[]
          }
          delete: {
            args: Prisma.RouteStopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>
          }
          update: {
            args: Prisma.RouteStopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>
          }
          deleteMany: {
            args: Prisma.RouteStopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RouteStopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RouteStopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>[]
          }
          upsert: {
            args: Prisma.RouteStopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RouteStopPayload>
          }
          aggregate: {
            args: Prisma.RouteStopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRouteStop>
          }
          groupBy: {
            args: Prisma.RouteStopGroupByArgs<ExtArgs>
            result: $Utils.Optional<RouteStopGroupByOutputType>[]
          }
          count: {
            args: Prisma.RouteStopCountArgs<ExtArgs>
            result: $Utils.Optional<RouteStopCountAggregateOutputType> | number
          }
        }
      }
      Feedback: {
        payload: Prisma.$FeedbackPayload<ExtArgs>
        fields: Prisma.FeedbackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedbackFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedbackFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findFirst: {
            args: Prisma.FeedbackFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedbackFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          findMany: {
            args: Prisma.FeedbackFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          create: {
            args: Prisma.FeedbackCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          createMany: {
            args: Prisma.FeedbackCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FeedbackCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          delete: {
            args: Prisma.FeedbackDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          update: {
            args: Prisma.FeedbackUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          deleteMany: {
            args: Prisma.FeedbackDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FeedbackUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FeedbackUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>[]
          }
          upsert: {
            args: Prisma.FeedbackUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FeedbackPayload>
          }
          aggregate: {
            args: Prisma.FeedbackAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFeedback>
          }
          groupBy: {
            args: Prisma.FeedbackGroupByArgs<ExtArgs>
            result: $Utils.Optional<FeedbackGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedbackCountArgs<ExtArgs>
            result: $Utils.Optional<FeedbackCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    driver?: DriverOmit
    bus?: BusOmit
    travel?: TravelOmit
    route?: RouteOmit
    routeSchedule?: RouteScheduleOmit
    stop?: StopOmit
    routeStop?: RouteStopOmit
    feedback?: FeedbackOmit
    notification?: NotificationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    feedbacks: number
    notifications: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbacks?: boolean | UserCountOutputTypeCountFeedbacksArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type DriverCountOutputType
   */

  export type DriverCountOutputType = {
    travels: number
    feedbacks: number
    notifications: number
  }

  export type DriverCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travels?: boolean | DriverCountOutputTypeCountTravelsArgs
    feedbacks?: boolean | DriverCountOutputTypeCountFeedbacksArgs
    notifications?: boolean | DriverCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DriverCountOutputType
     */
    select?: DriverCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountTravelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }

  /**
   * DriverCountOutputType without action
   */
  export type DriverCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Count Type BusCountOutputType
   */

  export type BusCountOutputType = {
    travels: number
    feedbacks: number
  }

  export type BusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    travels?: boolean | BusCountOutputTypeCountTravelsArgs
    feedbacks?: boolean | BusCountOutputTypeCountFeedbacksArgs
  }

  // Custom InputTypes
  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusCountOutputType
     */
    select?: BusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountTravelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
  }

  /**
   * BusCountOutputType without action
   */
  export type BusCountOutputTypeCountFeedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
  }


  /**
   * Count Type RouteCountOutputType
   */

  export type RouteCountOutputType = {
    buses: number
    routeStops: number
    travels: number
    schedules: number
  }

  export type RouteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | RouteCountOutputTypeCountBusesArgs
    routeStops?: boolean | RouteCountOutputTypeCountRouteStopsArgs
    travels?: boolean | RouteCountOutputTypeCountTravelsArgs
    schedules?: boolean | RouteCountOutputTypeCountSchedulesArgs
  }

  // Custom InputTypes
  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteCountOutputType
     */
    select?: RouteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountBusesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountRouteStopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteStopWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountTravelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
  }

  /**
   * RouteCountOutputType without action
   */
  export type RouteCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteScheduleWhereInput
  }


  /**
   * Count Type StopCountOutputType
   */

  export type StopCountOutputType = {
    routeStops: number
  }

  export type StopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routeStops?: boolean | StopCountOutputTypeCountRouteStopsArgs
  }

  // Custom InputTypes
  /**
   * StopCountOutputType without action
   */
  export type StopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StopCountOutputType
     */
    select?: StopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StopCountOutputType without action
   */
  export type StopCountOutputTypeCountRouteStopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteStopWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    number: string | null
    password: string | null
    disability: string | null
    url_foto_de_perfil: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    number: string | null
    password: string | null
    disability: string | null
    url_foto_de_perfil: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    number: number
    password: number
    disability: number
    url_foto_de_perfil: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    number?: true
    password?: true
    disability?: true
    url_foto_de_perfil?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    number?: true
    password?: true
    disability?: true
    url_foto_de_perfil?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    number?: true
    password?: true
    disability?: true
    url_foto_de_perfil?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    number: string
    password: string
    disability: string | null
    url_foto_de_perfil: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    number?: boolean
    password?: boolean
    disability?: boolean
    url_foto_de_perfil?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    feedbacks?: boolean | User$feedbacksArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    number?: boolean
    password?: boolean
    disability?: boolean
    url_foto_de_perfil?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    number?: boolean
    password?: boolean
    disability?: boolean
    url_foto_de_perfil?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    number?: boolean
    password?: boolean
    disability?: boolean
    url_foto_de_perfil?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "number" | "password" | "disability" | "url_foto_de_perfil" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    feedbacks?: boolean | User$feedbacksArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      number: string
      password: string
      disability: string | null
      url_foto_de_perfil: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    feedbacks<T extends User$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, User$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly number: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly disability: FieldRef<"User", 'String'>
    readonly url_foto_de_perfil: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.feedbacks
   */
  export type User$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Driver
   */

  export type AggregateDriver = {
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  export type DriverAvgAggregateOutputType = {
    id: number | null
    experienceTime: number | null
    currentLatitude: number | null
    currentLongitude: number | null
    rating: number | null
  }

  export type DriverSumAggregateOutputType = {
    id: number | null
    experienceTime: number | null
    currentLatitude: number | null
    currentLongitude: number | null
    rating: number | null
  }

  export type DriverMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    licenseNumber: string | null
    url_foto_de_perfil: string | null
    experienceTime: number | null
    effectiveDate: Date | null
    status: string | null
    currentLatitude: number | null
    currentLongitude: number | null
    lastLogin: Date | null
    deviceToken: string | null
    isVerified: boolean | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    licenseNumber: string | null
    url_foto_de_perfil: string | null
    experienceTime: number | null
    effectiveDate: Date | null
    status: string | null
    currentLatitude: number | null
    currentLongitude: number | null
    lastLogin: Date | null
    deviceToken: string | null
    isVerified: boolean | null
    rating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DriverCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    licenseNumber: number
    url_foto_de_perfil: number
    experienceTime: number
    effectiveDate: number
    status: number
    currentLatitude: number
    currentLongitude: number
    lastLogin: number
    deviceToken: number
    isVerified: number
    rating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DriverAvgAggregateInputType = {
    id?: true
    experienceTime?: true
    currentLatitude?: true
    currentLongitude?: true
    rating?: true
  }

  export type DriverSumAggregateInputType = {
    id?: true
    experienceTime?: true
    currentLatitude?: true
    currentLongitude?: true
    rating?: true
  }

  export type DriverMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    licenseNumber?: true
    url_foto_de_perfil?: true
    experienceTime?: true
    effectiveDate?: true
    status?: true
    currentLatitude?: true
    currentLongitude?: true
    lastLogin?: true
    deviceToken?: true
    isVerified?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    licenseNumber?: true
    url_foto_de_perfil?: true
    experienceTime?: true
    effectiveDate?: true
    status?: true
    currentLatitude?: true
    currentLongitude?: true
    lastLogin?: true
    deviceToken?: true
    isVerified?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DriverCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    licenseNumber?: true
    url_foto_de_perfil?: true
    experienceTime?: true
    effectiveDate?: true
    status?: true
    currentLatitude?: true
    currentLongitude?: true
    lastLogin?: true
    deviceToken?: true
    isVerified?: true
    rating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DriverAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Driver to aggregate.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Drivers
    **/
    _count?: true | DriverCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriverAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriverSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriverMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriverMaxAggregateInputType
  }

  export type GetDriverAggregateType<T extends DriverAggregateArgs> = {
        [P in keyof T & keyof AggregateDriver]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDriver[P]>
      : GetScalarType<T[P], AggregateDriver[P]>
  }




  export type DriverGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DriverWhereInput
    orderBy?: DriverOrderByWithAggregationInput | DriverOrderByWithAggregationInput[]
    by: DriverScalarFieldEnum[] | DriverScalarFieldEnum
    having?: DriverScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriverCountAggregateInputType | true
    _avg?: DriverAvgAggregateInputType
    _sum?: DriverSumAggregateInputType
    _min?: DriverMinAggregateInputType
    _max?: DriverMaxAggregateInputType
  }

  export type DriverGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    password: string
    licenseNumber: string
    url_foto_de_perfil: string | null
    experienceTime: number
    effectiveDate: Date | null
    status: string
    currentLatitude: number | null
    currentLongitude: number | null
    lastLogin: Date | null
    deviceToken: string | null
    isVerified: boolean
    rating: number
    createdAt: Date
    updatedAt: Date
    _count: DriverCountAggregateOutputType | null
    _avg: DriverAvgAggregateOutputType | null
    _sum: DriverSumAggregateOutputType | null
    _min: DriverMinAggregateOutputType | null
    _max: DriverMaxAggregateOutputType | null
  }

  type GetDriverGroupByPayload<T extends DriverGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriverGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriverGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriverGroupByOutputType[P]>
            : GetScalarType<T[P], DriverGroupByOutputType[P]>
        }
      >
    >


  export type DriverSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    licenseNumber?: boolean
    url_foto_de_perfil?: boolean
    experienceTime?: boolean
    effectiveDate?: boolean
    status?: boolean
    currentLatitude?: boolean
    currentLongitude?: boolean
    lastLogin?: boolean
    deviceToken?: boolean
    isVerified?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedBus?: boolean | Driver$assignedBusArgs<ExtArgs>
    travels?: boolean | Driver$travelsArgs<ExtArgs>
    feedbacks?: boolean | Driver$feedbacksArgs<ExtArgs>
    notifications?: boolean | Driver$notificationsArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    licenseNumber?: boolean
    url_foto_de_perfil?: boolean
    experienceTime?: boolean
    effectiveDate?: boolean
    status?: boolean
    currentLatitude?: boolean
    currentLongitude?: boolean
    lastLogin?: boolean
    deviceToken?: boolean
    isVerified?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    licenseNumber?: boolean
    url_foto_de_perfil?: boolean
    experienceTime?: boolean
    effectiveDate?: boolean
    status?: boolean
    currentLatitude?: boolean
    currentLongitude?: boolean
    lastLogin?: boolean
    deviceToken?: boolean
    isVerified?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["driver"]>

  export type DriverSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    licenseNumber?: boolean
    url_foto_de_perfil?: boolean
    experienceTime?: boolean
    effectiveDate?: boolean
    status?: boolean
    currentLatitude?: boolean
    currentLongitude?: boolean
    lastLogin?: boolean
    deviceToken?: boolean
    isVerified?: boolean
    rating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DriverOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "password" | "licenseNumber" | "url_foto_de_perfil" | "experienceTime" | "effectiveDate" | "status" | "currentLatitude" | "currentLongitude" | "lastLogin" | "deviceToken" | "isVerified" | "rating" | "createdAt" | "updatedAt", ExtArgs["result"]["driver"]>
  export type DriverInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedBus?: boolean | Driver$assignedBusArgs<ExtArgs>
    travels?: boolean | Driver$travelsArgs<ExtArgs>
    feedbacks?: boolean | Driver$feedbacksArgs<ExtArgs>
    notifications?: boolean | Driver$notificationsArgs<ExtArgs>
    _count?: boolean | DriverCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DriverIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DriverIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DriverPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Driver"
    objects: {
      assignedBus: Prisma.$BusPayload<ExtArgs> | null
      travels: Prisma.$TravelPayload<ExtArgs>[]
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      password: string
      licenseNumber: string
      url_foto_de_perfil: string | null
      experienceTime: number
      effectiveDate: Date | null
      status: string
      currentLatitude: number | null
      currentLongitude: number | null
      lastLogin: Date | null
      deviceToken: string | null
      isVerified: boolean
      rating: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["driver"]>
    composites: {}
  }

  type DriverGetPayload<S extends boolean | null | undefined | DriverDefaultArgs> = $Result.GetResult<Prisma.$DriverPayload, S>

  type DriverCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DriverFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriverCountAggregateInputType | true
    }

  export interface DriverDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Driver'], meta: { name: 'Driver' } }
    /**
     * Find zero or one Driver that matches the filter.
     * @param {DriverFindUniqueArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DriverFindUniqueArgs>(args: SelectSubset<T, DriverFindUniqueArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Driver that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DriverFindUniqueOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DriverFindUniqueOrThrowArgs>(args: SelectSubset<T, DriverFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DriverFindFirstArgs>(args?: SelectSubset<T, DriverFindFirstArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Driver that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindFirstOrThrowArgs} args - Arguments to find a Driver
     * @example
     * // Get one Driver
     * const driver = await prisma.driver.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DriverFindFirstOrThrowArgs>(args?: SelectSubset<T, DriverFindFirstOrThrowArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.driver.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.driver.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driverWithIdOnly = await prisma.driver.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DriverFindManyArgs>(args?: SelectSubset<T, DriverFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Driver.
     * @param {DriverCreateArgs} args - Arguments to create a Driver.
     * @example
     * // Create one Driver
     * const Driver = await prisma.driver.create({
     *   data: {
     *     // ... data to create a Driver
     *   }
     * })
     * 
     */
    create<T extends DriverCreateArgs>(args: SelectSubset<T, DriverCreateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {DriverCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DriverCreateManyArgs>(args?: SelectSubset<T, DriverCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {DriverCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const driver = await prisma.driver.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DriverCreateManyAndReturnArgs>(args?: SelectSubset<T, DriverCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Driver.
     * @param {DriverDeleteArgs} args - Arguments to delete one Driver.
     * @example
     * // Delete one Driver
     * const Driver = await prisma.driver.delete({
     *   where: {
     *     // ... filter to delete one Driver
     *   }
     * })
     * 
     */
    delete<T extends DriverDeleteArgs>(args: SelectSubset<T, DriverDeleteArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Driver.
     * @param {DriverUpdateArgs} args - Arguments to update one Driver.
     * @example
     * // Update one Driver
     * const driver = await prisma.driver.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DriverUpdateArgs>(args: SelectSubset<T, DriverUpdateArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {DriverDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.driver.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DriverDeleteManyArgs>(args?: SelectSubset<T, DriverDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DriverUpdateManyArgs>(args: SelectSubset<T, DriverUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {DriverUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const driver = await prisma.driver.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driverWithIdOnly = await prisma.driver.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DriverUpdateManyAndReturnArgs>(args: SelectSubset<T, DriverUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Driver.
     * @param {DriverUpsertArgs} args - Arguments to update or create a Driver.
     * @example
     * // Update or create a Driver
     * const driver = await prisma.driver.upsert({
     *   create: {
     *     // ... data to create a Driver
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Driver we want to update
     *   }
     * })
     */
    upsert<T extends DriverUpsertArgs>(args: SelectSubset<T, DriverUpsertArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.driver.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends DriverCountArgs>(
      args?: Subset<T, DriverCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriverCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DriverAggregateArgs>(args: Subset<T, DriverAggregateArgs>): Prisma.PrismaPromise<GetDriverAggregateType<T>>

    /**
     * Group by Driver.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriverGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DriverGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DriverGroupByArgs['orderBy'] }
        : { orderBy?: DriverGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DriverGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriverGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Driver model
   */
  readonly fields: DriverFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Driver.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DriverClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignedBus<T extends Driver$assignedBusArgs<ExtArgs> = {}>(args?: Subset<T, Driver$assignedBusArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    travels<T extends Driver$travelsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$travelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacks<T extends Driver$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, Driver$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Driver$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Driver$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Driver model
   */
  interface DriverFieldRefs {
    readonly id: FieldRef<"Driver", 'Int'>
    readonly name: FieldRef<"Driver", 'String'>
    readonly email: FieldRef<"Driver", 'String'>
    readonly phone: FieldRef<"Driver", 'String'>
    readonly password: FieldRef<"Driver", 'String'>
    readonly licenseNumber: FieldRef<"Driver", 'String'>
    readonly url_foto_de_perfil: FieldRef<"Driver", 'String'>
    readonly experienceTime: FieldRef<"Driver", 'Int'>
    readonly effectiveDate: FieldRef<"Driver", 'DateTime'>
    readonly status: FieldRef<"Driver", 'String'>
    readonly currentLatitude: FieldRef<"Driver", 'Float'>
    readonly currentLongitude: FieldRef<"Driver", 'Float'>
    readonly lastLogin: FieldRef<"Driver", 'DateTime'>
    readonly deviceToken: FieldRef<"Driver", 'String'>
    readonly isVerified: FieldRef<"Driver", 'Boolean'>
    readonly rating: FieldRef<"Driver", 'Float'>
    readonly createdAt: FieldRef<"Driver", 'DateTime'>
    readonly updatedAt: FieldRef<"Driver", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Driver findUnique
   */
  export type DriverFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findUniqueOrThrow
   */
  export type DriverFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver findFirst
   */
  export type DriverFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findFirstOrThrow
   */
  export type DriverFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Driver to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Drivers.
     */
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver findMany
   */
  export type DriverFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter, which Drivers to fetch.
     */
    where?: DriverWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Drivers to fetch.
     */
    orderBy?: DriverOrderByWithRelationInput | DriverOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Drivers.
     */
    cursor?: DriverWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Drivers.
     */
    skip?: number
    distinct?: DriverScalarFieldEnum | DriverScalarFieldEnum[]
  }

  /**
   * Driver create
   */
  export type DriverCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to create a Driver.
     */
    data: XOR<DriverCreateInput, DriverUncheckedCreateInput>
  }

  /**
   * Driver createMany
   */
  export type DriverCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
  }

  /**
   * Driver createManyAndReturn
   */
  export type DriverCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to create many Drivers.
     */
    data: DriverCreateManyInput | DriverCreateManyInput[]
  }

  /**
   * Driver update
   */
  export type DriverUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The data needed to update a Driver.
     */
    data: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
    /**
     * Choose, which Driver to update.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver updateMany
   */
  export type DriverUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver updateManyAndReturn
   */
  export type DriverUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * The data used to update Drivers.
     */
    data: XOR<DriverUpdateManyMutationInput, DriverUncheckedUpdateManyInput>
    /**
     * Filter which Drivers to update
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to update.
     */
    limit?: number
  }

  /**
   * Driver upsert
   */
  export type DriverUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * The filter to search for the Driver to update in case it exists.
     */
    where: DriverWhereUniqueInput
    /**
     * In case the Driver found by the `where` argument doesn't exist, create a new Driver with this data.
     */
    create: XOR<DriverCreateInput, DriverUncheckedCreateInput>
    /**
     * In case the Driver was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DriverUpdateInput, DriverUncheckedUpdateInput>
  }

  /**
   * Driver delete
   */
  export type DriverDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    /**
     * Filter which Driver to delete.
     */
    where: DriverWhereUniqueInput
  }

  /**
   * Driver deleteMany
   */
  export type DriverDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Drivers to delete
     */
    where?: DriverWhereInput
    /**
     * Limit how many Drivers to delete.
     */
    limit?: number
  }

  /**
   * Driver.assignedBus
   */
  export type Driver$assignedBusArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
  }

  /**
   * Driver.travels
   */
  export type Driver$travelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    cursor?: TravelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Driver.feedbacks
   */
  export type Driver$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Driver.notifications
   */
  export type Driver$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Driver without action
   */
  export type DriverDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
  }


  /**
   * Model Bus
   */

  export type AggregateBus = {
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  export type BusAvgAggregateOutputType = {
    id: number | null
    driverId: number | null
    routeId: number | null
    capacity: number | null
    currentLoad: number | null
  }

  export type BusSumAggregateOutputType = {
    id: number | null
    driverId: number | null
    routeId: number | null
    capacity: number | null
    currentLoad: number | null
  }

  export type BusMinAggregateOutputType = {
    id: number | null
    matricula: string | null
    nia: string | null
    driverId: number | null
    routeId: number | null
    status: string | null
    capacity: number | null
    currentLoad: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusMaxAggregateOutputType = {
    id: number | null
    matricula: string | null
    nia: string | null
    driverId: number | null
    routeId: number | null
    status: string | null
    capacity: number | null
    currentLoad: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BusCountAggregateOutputType = {
    id: number
    matricula: number
    nia: number
    driverId: number
    routeId: number
    status: number
    capacity: number
    currentLoad: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BusAvgAggregateInputType = {
    id?: true
    driverId?: true
    routeId?: true
    capacity?: true
    currentLoad?: true
  }

  export type BusSumAggregateInputType = {
    id?: true
    driverId?: true
    routeId?: true
    capacity?: true
    currentLoad?: true
  }

  export type BusMinAggregateInputType = {
    id?: true
    matricula?: true
    nia?: true
    driverId?: true
    routeId?: true
    status?: true
    capacity?: true
    currentLoad?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusMaxAggregateInputType = {
    id?: true
    matricula?: true
    nia?: true
    driverId?: true
    routeId?: true
    status?: true
    capacity?: true
    currentLoad?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BusCountAggregateInputType = {
    id?: true
    matricula?: true
    nia?: true
    driverId?: true
    routeId?: true
    status?: true
    capacity?: true
    currentLoad?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bus to aggregate.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Buses
    **/
    _count?: true | BusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusMaxAggregateInputType
  }

  export type GetBusAggregateType<T extends BusAggregateArgs> = {
        [P in keyof T & keyof AggregateBus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBus[P]>
      : GetScalarType<T[P], AggregateBus[P]>
  }




  export type BusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusWhereInput
    orderBy?: BusOrderByWithAggregationInput | BusOrderByWithAggregationInput[]
    by: BusScalarFieldEnum[] | BusScalarFieldEnum
    having?: BusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusCountAggregateInputType | true
    _avg?: BusAvgAggregateInputType
    _sum?: BusSumAggregateInputType
    _min?: BusMinAggregateInputType
    _max?: BusMaxAggregateInputType
  }

  export type BusGroupByOutputType = {
    id: number
    matricula: string
    nia: string
    driverId: number | null
    routeId: number
    status: string
    capacity: number
    currentLoad: number
    createdAt: Date
    updatedAt: Date
    _count: BusCountAggregateOutputType | null
    _avg: BusAvgAggregateOutputType | null
    _sum: BusSumAggregateOutputType | null
    _min: BusMinAggregateOutputType | null
    _max: BusMaxAggregateOutputType | null
  }

  type GetBusGroupByPayload<T extends BusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusGroupByOutputType[P]>
            : GetScalarType<T[P], BusGroupByOutputType[P]>
        }
      >
    >


  export type BusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricula?: boolean
    nia?: boolean
    driverId?: boolean
    routeId?: boolean
    status?: boolean
    capacity?: boolean
    currentLoad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | Bus$driverArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    travels?: boolean | Bus$travelsArgs<ExtArgs>
    feedbacks?: boolean | Bus$feedbacksArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricula?: boolean
    nia?: boolean
    driverId?: boolean
    routeId?: boolean
    status?: boolean
    capacity?: boolean
    currentLoad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | Bus$driverArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    matricula?: boolean
    nia?: boolean
    driverId?: boolean
    routeId?: boolean
    status?: boolean
    capacity?: boolean
    currentLoad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    driver?: boolean | Bus$driverArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bus"]>

  export type BusSelectScalar = {
    id?: boolean
    matricula?: boolean
    nia?: boolean
    driverId?: boolean
    routeId?: boolean
    status?: boolean
    capacity?: boolean
    currentLoad?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "matricula" | "nia" | "driverId" | "routeId" | "status" | "capacity" | "currentLoad" | "createdAt" | "updatedAt", ExtArgs["result"]["bus"]>
  export type BusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | Bus$driverArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
    travels?: boolean | Bus$travelsArgs<ExtArgs>
    feedbacks?: boolean | Bus$feedbacksArgs<ExtArgs>
    _count?: boolean | BusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | Bus$driverArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type BusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    driver?: boolean | Bus$driverArgs<ExtArgs>
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }

  export type $BusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bus"
    objects: {
      driver: Prisma.$DriverPayload<ExtArgs> | null
      route: Prisma.$RoutePayload<ExtArgs>
      travels: Prisma.$TravelPayload<ExtArgs>[]
      feedbacks: Prisma.$FeedbackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      matricula: string
      nia: string
      driverId: number | null
      routeId: number
      status: string
      capacity: number
      currentLoad: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bus"]>
    composites: {}
  }

  type BusGetPayload<S extends boolean | null | undefined | BusDefaultArgs> = $Result.GetResult<Prisma.$BusPayload, S>

  type BusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusCountAggregateInputType | true
    }

  export interface BusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bus'], meta: { name: 'Bus' } }
    /**
     * Find zero or one Bus that matches the filter.
     * @param {BusFindUniqueArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusFindUniqueArgs>(args: SelectSubset<T, BusFindUniqueArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bus that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusFindUniqueOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusFindUniqueOrThrowArgs>(args: SelectSubset<T, BusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusFindFirstArgs>(args?: SelectSubset<T, BusFindFirstArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bus that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindFirstOrThrowArgs} args - Arguments to find a Bus
     * @example
     * // Get one Bus
     * const bus = await prisma.bus.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusFindFirstOrThrowArgs>(args?: SelectSubset<T, BusFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Buses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Buses
     * const buses = await prisma.bus.findMany()
     * 
     * // Get first 10 Buses
     * const buses = await prisma.bus.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const busWithIdOnly = await prisma.bus.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusFindManyArgs>(args?: SelectSubset<T, BusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bus.
     * @param {BusCreateArgs} args - Arguments to create a Bus.
     * @example
     * // Create one Bus
     * const Bus = await prisma.bus.create({
     *   data: {
     *     // ... data to create a Bus
     *   }
     * })
     * 
     */
    create<T extends BusCreateArgs>(args: SelectSubset<T, BusCreateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Buses.
     * @param {BusCreateManyArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusCreateManyArgs>(args?: SelectSubset<T, BusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Buses and returns the data saved in the database.
     * @param {BusCreateManyAndReturnArgs} args - Arguments to create many Buses.
     * @example
     * // Create many Buses
     * const bus = await prisma.bus.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Buses and only return the `id`
     * const busWithIdOnly = await prisma.bus.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusCreateManyAndReturnArgs>(args?: SelectSubset<T, BusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Bus.
     * @param {BusDeleteArgs} args - Arguments to delete one Bus.
     * @example
     * // Delete one Bus
     * const Bus = await prisma.bus.delete({
     *   where: {
     *     // ... filter to delete one Bus
     *   }
     * })
     * 
     */
    delete<T extends BusDeleteArgs>(args: SelectSubset<T, BusDeleteArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bus.
     * @param {BusUpdateArgs} args - Arguments to update one Bus.
     * @example
     * // Update one Bus
     * const bus = await prisma.bus.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusUpdateArgs>(args: SelectSubset<T, BusUpdateArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Buses.
     * @param {BusDeleteManyArgs} args - Arguments to filter Buses to delete.
     * @example
     * // Delete a few Buses
     * const { count } = await prisma.bus.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusDeleteManyArgs>(args?: SelectSubset<T, BusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusUpdateManyArgs>(args: SelectSubset<T, BusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Buses and returns the data updated in the database.
     * @param {BusUpdateManyAndReturnArgs} args - Arguments to update many Buses.
     * @example
     * // Update many Buses
     * const bus = await prisma.bus.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Buses and only return the `id`
     * const busWithIdOnly = await prisma.bus.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BusUpdateManyAndReturnArgs>(args: SelectSubset<T, BusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Bus.
     * @param {BusUpsertArgs} args - Arguments to update or create a Bus.
     * @example
     * // Update or create a Bus
     * const bus = await prisma.bus.upsert({
     *   create: {
     *     // ... data to create a Bus
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bus we want to update
     *   }
     * })
     */
    upsert<T extends BusUpsertArgs>(args: SelectSubset<T, BusUpsertArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Buses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusCountArgs} args - Arguments to filter Buses to count.
     * @example
     * // Count the number of Buses
     * const count = await prisma.bus.count({
     *   where: {
     *     // ... the filter for the Buses we want to count
     *   }
     * })
    **/
    count<T extends BusCountArgs>(
      args?: Subset<T, BusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BusAggregateArgs>(args: Subset<T, BusAggregateArgs>): Prisma.PrismaPromise<GetBusAggregateType<T>>

    /**
     * Group by Bus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusGroupByArgs['orderBy'] }
        : { orderBy?: BusGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bus model
   */
  readonly fields: BusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bus.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    driver<T extends Bus$driverArgs<ExtArgs> = {}>(args?: Subset<T, Bus$driverArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    travels<T extends Bus$travelsArgs<ExtArgs> = {}>(args?: Subset<T, Bus$travelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    feedbacks<T extends Bus$feedbacksArgs<ExtArgs> = {}>(args?: Subset<T, Bus$feedbacksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bus model
   */
  interface BusFieldRefs {
    readonly id: FieldRef<"Bus", 'Int'>
    readonly matricula: FieldRef<"Bus", 'String'>
    readonly nia: FieldRef<"Bus", 'String'>
    readonly driverId: FieldRef<"Bus", 'Int'>
    readonly routeId: FieldRef<"Bus", 'Int'>
    readonly status: FieldRef<"Bus", 'String'>
    readonly capacity: FieldRef<"Bus", 'Int'>
    readonly currentLoad: FieldRef<"Bus", 'Int'>
    readonly createdAt: FieldRef<"Bus", 'DateTime'>
    readonly updatedAt: FieldRef<"Bus", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bus findUnique
   */
  export type BusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findUniqueOrThrow
   */
  export type BusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus findFirst
   */
  export type BusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findFirstOrThrow
   */
  export type BusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Bus to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Buses.
     */
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus findMany
   */
  export type BusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter, which Buses to fetch.
     */
    where?: BusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Buses to fetch.
     */
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Buses.
     */
    cursor?: BusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Buses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Buses.
     */
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Bus create
   */
  export type BusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to create a Bus.
     */
    data: XOR<BusCreateInput, BusUncheckedCreateInput>
  }

  /**
   * Bus createMany
   */
  export type BusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
  }

  /**
   * Bus createManyAndReturn
   */
  export type BusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * The data used to create many Buses.
     */
    data: BusCreateManyInput | BusCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bus update
   */
  export type BusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The data needed to update a Bus.
     */
    data: XOR<BusUpdateInput, BusUncheckedUpdateInput>
    /**
     * Choose, which Bus to update.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus updateMany
   */
  export type BusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to update.
     */
    limit?: number
  }

  /**
   * Bus updateManyAndReturn
   */
  export type BusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * The data used to update Buses.
     */
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyInput>
    /**
     * Filter which Buses to update
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Bus upsert
   */
  export type BusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * The filter to search for the Bus to update in case it exists.
     */
    where: BusWhereUniqueInput
    /**
     * In case the Bus found by the `where` argument doesn't exist, create a new Bus with this data.
     */
    create: XOR<BusCreateInput, BusUncheckedCreateInput>
    /**
     * In case the Bus was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusUpdateInput, BusUncheckedUpdateInput>
  }

  /**
   * Bus delete
   */
  export type BusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    /**
     * Filter which Bus to delete.
     */
    where: BusWhereUniqueInput
  }

  /**
   * Bus deleteMany
   */
  export type BusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Buses to delete
     */
    where?: BusWhereInput
    /**
     * Limit how many Buses to delete.
     */
    limit?: number
  }

  /**
   * Bus.driver
   */
  export type Bus$driverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: DriverSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Driver
     */
    omit?: DriverOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DriverInclude<ExtArgs> | null
    where?: DriverWhereInput
  }

  /**
   * Bus.travels
   */
  export type Bus$travelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    cursor?: TravelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Bus.feedbacks
   */
  export type Bus$feedbacksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    cursor?: FeedbackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Bus without action
   */
  export type BusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
  }


  /**
   * Model Travel
   */

  export type AggregateTravel = {
    _count: TravelCountAggregateOutputType | null
    _avg: TravelAvgAggregateOutputType | null
    _sum: TravelSumAggregateOutputType | null
    _min: TravelMinAggregateOutputType | null
    _max: TravelMaxAggregateOutputType | null
  }

  export type TravelAvgAggregateOutputType = {
    id: number | null
    routeId: number | null
    driverId: number | null
    busId: number | null
    profit: number | null
  }

  export type TravelSumAggregateOutputType = {
    id: number | null
    routeId: number | null
    driverId: number | null
    busId: number | null
    profit: number | null
  }

  export type TravelMinAggregateOutputType = {
    id: number | null
    routeId: number | null
    driverId: number | null
    busId: number | null
    profit: number | null
    arrivalTime: Date | null
    departureTime: Date | null
    createdAt: Date | null
  }

  export type TravelMaxAggregateOutputType = {
    id: number | null
    routeId: number | null
    driverId: number | null
    busId: number | null
    profit: number | null
    arrivalTime: Date | null
    departureTime: Date | null
    createdAt: Date | null
  }

  export type TravelCountAggregateOutputType = {
    id: number
    routeId: number
    driverId: number
    busId: number
    profit: number
    arrivalTime: number
    departureTime: number
    createdAt: number
    _all: number
  }


  export type TravelAvgAggregateInputType = {
    id?: true
    routeId?: true
    driverId?: true
    busId?: true
    profit?: true
  }

  export type TravelSumAggregateInputType = {
    id?: true
    routeId?: true
    driverId?: true
    busId?: true
    profit?: true
  }

  export type TravelMinAggregateInputType = {
    id?: true
    routeId?: true
    driverId?: true
    busId?: true
    profit?: true
    arrivalTime?: true
    departureTime?: true
    createdAt?: true
  }

  export type TravelMaxAggregateInputType = {
    id?: true
    routeId?: true
    driverId?: true
    busId?: true
    profit?: true
    arrivalTime?: true
    departureTime?: true
    createdAt?: true
  }

  export type TravelCountAggregateInputType = {
    id?: true
    routeId?: true
    driverId?: true
    busId?: true
    profit?: true
    arrivalTime?: true
    departureTime?: true
    createdAt?: true
    _all?: true
  }

  export type TravelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Travel to aggregate.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Travels
    **/
    _count?: true | TravelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TravelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TravelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TravelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TravelMaxAggregateInputType
  }

  export type GetTravelAggregateType<T extends TravelAggregateArgs> = {
        [P in keyof T & keyof AggregateTravel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTravel[P]>
      : GetScalarType<T[P], AggregateTravel[P]>
  }




  export type TravelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithAggregationInput | TravelOrderByWithAggregationInput[]
    by: TravelScalarFieldEnum[] | TravelScalarFieldEnum
    having?: TravelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TravelCountAggregateInputType | true
    _avg?: TravelAvgAggregateInputType
    _sum?: TravelSumAggregateInputType
    _min?: TravelMinAggregateInputType
    _max?: TravelMaxAggregateInputType
  }

  export type TravelGroupByOutputType = {
    id: number
    routeId: number
    driverId: number
    busId: number
    profit: number
    arrivalTime: Date | null
    departureTime: Date | null
    createdAt: Date
    _count: TravelCountAggregateOutputType | null
    _avg: TravelAvgAggregateOutputType | null
    _sum: TravelSumAggregateOutputType | null
    _min: TravelMinAggregateOutputType | null
    _max: TravelMaxAggregateOutputType | null
  }

  type GetTravelGroupByPayload<T extends TravelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TravelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TravelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TravelGroupByOutputType[P]>
            : GetScalarType<T[P], TravelGroupByOutputType[P]>
        }
      >
    >


  export type TravelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    driverId?: boolean
    busId?: boolean
    profit?: boolean
    arrivalTime?: boolean
    departureTime?: boolean
    createdAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travel"]>

  export type TravelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    driverId?: boolean
    busId?: boolean
    profit?: boolean
    arrivalTime?: boolean
    departureTime?: boolean
    createdAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travel"]>

  export type TravelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    driverId?: boolean
    busId?: boolean
    profit?: boolean
    arrivalTime?: boolean
    departureTime?: boolean
    createdAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["travel"]>

  export type TravelSelectScalar = {
    id?: boolean
    routeId?: boolean
    driverId?: boolean
    busId?: boolean
    profit?: boolean
    arrivalTime?: boolean
    departureTime?: boolean
    createdAt?: boolean
  }

  export type TravelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeId" | "driverId" | "busId" | "profit" | "arrivalTime" | "departureTime" | "createdAt", ExtArgs["result"]["travel"]>
  export type TravelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }
  export type TravelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }
  export type TravelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
    bus?: boolean | BusDefaultArgs<ExtArgs>
  }

  export type $TravelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Travel"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs>
      bus: Prisma.$BusPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      routeId: number
      driverId: number
      busId: number
      profit: number
      arrivalTime: Date | null
      departureTime: Date | null
      createdAt: Date
    }, ExtArgs["result"]["travel"]>
    composites: {}
  }

  type TravelGetPayload<S extends boolean | null | undefined | TravelDefaultArgs> = $Result.GetResult<Prisma.$TravelPayload, S>

  type TravelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TravelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TravelCountAggregateInputType | true
    }

  export interface TravelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Travel'], meta: { name: 'Travel' } }
    /**
     * Find zero or one Travel that matches the filter.
     * @param {TravelFindUniqueArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TravelFindUniqueArgs>(args: SelectSubset<T, TravelFindUniqueArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Travel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TravelFindUniqueOrThrowArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TravelFindUniqueOrThrowArgs>(args: SelectSubset<T, TravelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Travel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindFirstArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TravelFindFirstArgs>(args?: SelectSubset<T, TravelFindFirstArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Travel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindFirstOrThrowArgs} args - Arguments to find a Travel
     * @example
     * // Get one Travel
     * const travel = await prisma.travel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TravelFindFirstOrThrowArgs>(args?: SelectSubset<T, TravelFindFirstOrThrowArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Travels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Travels
     * const travels = await prisma.travel.findMany()
     * 
     * // Get first 10 Travels
     * const travels = await prisma.travel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const travelWithIdOnly = await prisma.travel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TravelFindManyArgs>(args?: SelectSubset<T, TravelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Travel.
     * @param {TravelCreateArgs} args - Arguments to create a Travel.
     * @example
     * // Create one Travel
     * const Travel = await prisma.travel.create({
     *   data: {
     *     // ... data to create a Travel
     *   }
     * })
     * 
     */
    create<T extends TravelCreateArgs>(args: SelectSubset<T, TravelCreateArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Travels.
     * @param {TravelCreateManyArgs} args - Arguments to create many Travels.
     * @example
     * // Create many Travels
     * const travel = await prisma.travel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TravelCreateManyArgs>(args?: SelectSubset<T, TravelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Travels and returns the data saved in the database.
     * @param {TravelCreateManyAndReturnArgs} args - Arguments to create many Travels.
     * @example
     * // Create many Travels
     * const travel = await prisma.travel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Travels and only return the `id`
     * const travelWithIdOnly = await prisma.travel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TravelCreateManyAndReturnArgs>(args?: SelectSubset<T, TravelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Travel.
     * @param {TravelDeleteArgs} args - Arguments to delete one Travel.
     * @example
     * // Delete one Travel
     * const Travel = await prisma.travel.delete({
     *   where: {
     *     // ... filter to delete one Travel
     *   }
     * })
     * 
     */
    delete<T extends TravelDeleteArgs>(args: SelectSubset<T, TravelDeleteArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Travel.
     * @param {TravelUpdateArgs} args - Arguments to update one Travel.
     * @example
     * // Update one Travel
     * const travel = await prisma.travel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TravelUpdateArgs>(args: SelectSubset<T, TravelUpdateArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Travels.
     * @param {TravelDeleteManyArgs} args - Arguments to filter Travels to delete.
     * @example
     * // Delete a few Travels
     * const { count } = await prisma.travel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TravelDeleteManyArgs>(args?: SelectSubset<T, TravelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Travels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Travels
     * const travel = await prisma.travel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TravelUpdateManyArgs>(args: SelectSubset<T, TravelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Travels and returns the data updated in the database.
     * @param {TravelUpdateManyAndReturnArgs} args - Arguments to update many Travels.
     * @example
     * // Update many Travels
     * const travel = await prisma.travel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Travels and only return the `id`
     * const travelWithIdOnly = await prisma.travel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TravelUpdateManyAndReturnArgs>(args: SelectSubset<T, TravelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Travel.
     * @param {TravelUpsertArgs} args - Arguments to update or create a Travel.
     * @example
     * // Update or create a Travel
     * const travel = await prisma.travel.upsert({
     *   create: {
     *     // ... data to create a Travel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Travel we want to update
     *   }
     * })
     */
    upsert<T extends TravelUpsertArgs>(args: SelectSubset<T, TravelUpsertArgs<ExtArgs>>): Prisma__TravelClient<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Travels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelCountArgs} args - Arguments to filter Travels to count.
     * @example
     * // Count the number of Travels
     * const count = await prisma.travel.count({
     *   where: {
     *     // ... the filter for the Travels we want to count
     *   }
     * })
    **/
    count<T extends TravelCountArgs>(
      args?: Subset<T, TravelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TravelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Travel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TravelAggregateArgs>(args: Subset<T, TravelAggregateArgs>): Prisma.PrismaPromise<GetTravelAggregateType<T>>

    /**
     * Group by Travel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TravelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TravelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TravelGroupByArgs['orderBy'] }
        : { orderBy?: TravelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TravelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTravelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Travel model
   */
  readonly fields: TravelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Travel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TravelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Travel model
   */
  interface TravelFieldRefs {
    readonly id: FieldRef<"Travel", 'Int'>
    readonly routeId: FieldRef<"Travel", 'Int'>
    readonly driverId: FieldRef<"Travel", 'Int'>
    readonly busId: FieldRef<"Travel", 'Int'>
    readonly profit: FieldRef<"Travel", 'Int'>
    readonly arrivalTime: FieldRef<"Travel", 'DateTime'>
    readonly departureTime: FieldRef<"Travel", 'DateTime'>
    readonly createdAt: FieldRef<"Travel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Travel findUnique
   */
  export type TravelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel findUniqueOrThrow
   */
  export type TravelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel findFirst
   */
  export type TravelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Travels.
     */
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Travel findFirstOrThrow
   */
  export type TravelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travel to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Travels.
     */
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Travel findMany
   */
  export type TravelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter, which Travels to fetch.
     */
    where?: TravelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Travels to fetch.
     */
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Travels.
     */
    cursor?: TravelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Travels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Travels.
     */
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Travel create
   */
  export type TravelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The data needed to create a Travel.
     */
    data: XOR<TravelCreateInput, TravelUncheckedCreateInput>
  }

  /**
   * Travel createMany
   */
  export type TravelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Travels.
     */
    data: TravelCreateManyInput | TravelCreateManyInput[]
  }

  /**
   * Travel createManyAndReturn
   */
  export type TravelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * The data used to create many Travels.
     */
    data: TravelCreateManyInput | TravelCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Travel update
   */
  export type TravelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The data needed to update a Travel.
     */
    data: XOR<TravelUpdateInput, TravelUncheckedUpdateInput>
    /**
     * Choose, which Travel to update.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel updateMany
   */
  export type TravelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Travels.
     */
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyInput>
    /**
     * Filter which Travels to update
     */
    where?: TravelWhereInput
    /**
     * Limit how many Travels to update.
     */
    limit?: number
  }

  /**
   * Travel updateManyAndReturn
   */
  export type TravelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * The data used to update Travels.
     */
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyInput>
    /**
     * Filter which Travels to update
     */
    where?: TravelWhereInput
    /**
     * Limit how many Travels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Travel upsert
   */
  export type TravelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * The filter to search for the Travel to update in case it exists.
     */
    where: TravelWhereUniqueInput
    /**
     * In case the Travel found by the `where` argument doesn't exist, create a new Travel with this data.
     */
    create: XOR<TravelCreateInput, TravelUncheckedCreateInput>
    /**
     * In case the Travel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TravelUpdateInput, TravelUncheckedUpdateInput>
  }

  /**
   * Travel delete
   */
  export type TravelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    /**
     * Filter which Travel to delete.
     */
    where: TravelWhereUniqueInput
  }

  /**
   * Travel deleteMany
   */
  export type TravelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Travels to delete
     */
    where?: TravelWhereInput
    /**
     * Limit how many Travels to delete.
     */
    limit?: number
  }

  /**
   * Travel without action
   */
  export type TravelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
  }


  /**
   * Model Route
   */

  export type AggregateRoute = {
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  export type RouteAvgAggregateOutputType = {
    id: number | null
    originLatitude: number | null
    originLongitude: number | null
    destinationLatitude: number | null
    destinationLongitude: number | null
  }

  export type RouteSumAggregateOutputType = {
    id: number | null
    originLatitude: number | null
    originLongitude: number | null
    destinationLatitude: number | null
    destinationLongitude: number | null
  }

  export type RouteMinAggregateOutputType = {
    id: number | null
    name: string | null
    origin: string | null
    originLatitude: number | null
    originLongitude: number | null
    destination: string | null
    destinationLatitude: number | null
    destinationLongitude: number | null
    status: string | null
  }

  export type RouteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    origin: string | null
    originLatitude: number | null
    originLongitude: number | null
    destination: string | null
    destinationLatitude: number | null
    destinationLongitude: number | null
    status: string | null
  }

  export type RouteCountAggregateOutputType = {
    id: number
    name: number
    origin: number
    originLatitude: number
    originLongitude: number
    destination: number
    destinationLatitude: number
    destinationLongitude: number
    status: number
    _all: number
  }


  export type RouteAvgAggregateInputType = {
    id?: true
    originLatitude?: true
    originLongitude?: true
    destinationLatitude?: true
    destinationLongitude?: true
  }

  export type RouteSumAggregateInputType = {
    id?: true
    originLatitude?: true
    originLongitude?: true
    destinationLatitude?: true
    destinationLongitude?: true
  }

  export type RouteMinAggregateInputType = {
    id?: true
    name?: true
    origin?: true
    originLatitude?: true
    originLongitude?: true
    destination?: true
    destinationLatitude?: true
    destinationLongitude?: true
    status?: true
  }

  export type RouteMaxAggregateInputType = {
    id?: true
    name?: true
    origin?: true
    originLatitude?: true
    originLongitude?: true
    destination?: true
    destinationLatitude?: true
    destinationLongitude?: true
    status?: true
  }

  export type RouteCountAggregateInputType = {
    id?: true
    name?: true
    origin?: true
    originLatitude?: true
    originLongitude?: true
    destination?: true
    destinationLatitude?: true
    destinationLongitude?: true
    status?: true
    _all?: true
  }

  export type RouteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Route to aggregate.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Routes
    **/
    _count?: true | RouteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteMaxAggregateInputType
  }

  export type GetRouteAggregateType<T extends RouteAggregateArgs> = {
        [P in keyof T & keyof AggregateRoute]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoute[P]>
      : GetScalarType<T[P], AggregateRoute[P]>
  }




  export type RouteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteWhereInput
    orderBy?: RouteOrderByWithAggregationInput | RouteOrderByWithAggregationInput[]
    by: RouteScalarFieldEnum[] | RouteScalarFieldEnum
    having?: RouteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteCountAggregateInputType | true
    _avg?: RouteAvgAggregateInputType
    _sum?: RouteSumAggregateInputType
    _min?: RouteMinAggregateInputType
    _max?: RouteMaxAggregateInputType
  }

  export type RouteGroupByOutputType = {
    id: number
    name: string
    origin: string
    originLatitude: number | null
    originLongitude: number | null
    destination: string
    destinationLatitude: number | null
    destinationLongitude: number | null
    status: string
    _count: RouteCountAggregateOutputType | null
    _avg: RouteAvgAggregateOutputType | null
    _sum: RouteSumAggregateOutputType | null
    _min: RouteMinAggregateOutputType | null
    _max: RouteMaxAggregateOutputType | null
  }

  type GetRouteGroupByPayload<T extends RouteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteGroupByOutputType[P]>
            : GetScalarType<T[P], RouteGroupByOutputType[P]>
        }
      >
    >


  export type RouteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    origin?: boolean
    originLatitude?: boolean
    originLongitude?: boolean
    destination?: boolean
    destinationLatitude?: boolean
    destinationLongitude?: boolean
    status?: boolean
    buses?: boolean | Route$busesArgs<ExtArgs>
    routeStops?: boolean | Route$routeStopsArgs<ExtArgs>
    travels?: boolean | Route$travelsArgs<ExtArgs>
    schedules?: boolean | Route$schedulesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["route"]>

  export type RouteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    origin?: boolean
    originLatitude?: boolean
    originLongitude?: boolean
    destination?: boolean
    destinationLatitude?: boolean
    destinationLongitude?: boolean
    status?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    origin?: boolean
    originLatitude?: boolean
    originLongitude?: boolean
    destination?: boolean
    destinationLatitude?: boolean
    destinationLongitude?: boolean
    status?: boolean
  }, ExtArgs["result"]["route"]>

  export type RouteSelectScalar = {
    id?: boolean
    name?: boolean
    origin?: boolean
    originLatitude?: boolean
    originLongitude?: boolean
    destination?: boolean
    destinationLatitude?: boolean
    destinationLongitude?: boolean
    status?: boolean
  }

  export type RouteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "origin" | "originLatitude" | "originLongitude" | "destination" | "destinationLatitude" | "destinationLongitude" | "status", ExtArgs["result"]["route"]>
  export type RouteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buses?: boolean | Route$busesArgs<ExtArgs>
    routeStops?: boolean | Route$routeStopsArgs<ExtArgs>
    travels?: boolean | Route$travelsArgs<ExtArgs>
    schedules?: boolean | Route$schedulesArgs<ExtArgs>
    _count?: boolean | RouteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RouteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RouteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoutePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Route"
    objects: {
      buses: Prisma.$BusPayload<ExtArgs>[]
      routeStops: Prisma.$RouteStopPayload<ExtArgs>[]
      travels: Prisma.$TravelPayload<ExtArgs>[]
      schedules: Prisma.$RouteSchedulePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      origin: string
      originLatitude: number | null
      originLongitude: number | null
      destination: string
      destinationLatitude: number | null
      destinationLongitude: number | null
      status: string
    }, ExtArgs["result"]["route"]>
    composites: {}
  }

  type RouteGetPayload<S extends boolean | null | undefined | RouteDefaultArgs> = $Result.GetResult<Prisma.$RoutePayload, S>

  type RouteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteCountAggregateInputType | true
    }

  export interface RouteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Route'], meta: { name: 'Route' } }
    /**
     * Find zero or one Route that matches the filter.
     * @param {RouteFindUniqueArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteFindUniqueArgs>(args: SelectSubset<T, RouteFindUniqueArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Route that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteFindUniqueOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteFindFirstArgs>(args?: SelectSubset<T, RouteFindFirstArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Route that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindFirstOrThrowArgs} args - Arguments to find a Route
     * @example
     * // Get one Route
     * const route = await prisma.route.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Routes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Routes
     * const routes = await prisma.route.findMany()
     * 
     * // Get first 10 Routes
     * const routes = await prisma.route.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeWithIdOnly = await prisma.route.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteFindManyArgs>(args?: SelectSubset<T, RouteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Route.
     * @param {RouteCreateArgs} args - Arguments to create a Route.
     * @example
     * // Create one Route
     * const Route = await prisma.route.create({
     *   data: {
     *     // ... data to create a Route
     *   }
     * })
     * 
     */
    create<T extends RouteCreateArgs>(args: SelectSubset<T, RouteCreateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Routes.
     * @param {RouteCreateManyArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteCreateManyArgs>(args?: SelectSubset<T, RouteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Routes and returns the data saved in the database.
     * @param {RouteCreateManyAndReturnArgs} args - Arguments to create many Routes.
     * @example
     * // Create many Routes
     * const route = await prisma.route.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Route.
     * @param {RouteDeleteArgs} args - Arguments to delete one Route.
     * @example
     * // Delete one Route
     * const Route = await prisma.route.delete({
     *   where: {
     *     // ... filter to delete one Route
     *   }
     * })
     * 
     */
    delete<T extends RouteDeleteArgs>(args: SelectSubset<T, RouteDeleteArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Route.
     * @param {RouteUpdateArgs} args - Arguments to update one Route.
     * @example
     * // Update one Route
     * const route = await prisma.route.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteUpdateArgs>(args: SelectSubset<T, RouteUpdateArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Routes.
     * @param {RouteDeleteManyArgs} args - Arguments to filter Routes to delete.
     * @example
     * // Delete a few Routes
     * const { count } = await prisma.route.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteDeleteManyArgs>(args?: SelectSubset<T, RouteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteUpdateManyArgs>(args: SelectSubset<T, RouteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Routes and returns the data updated in the database.
     * @param {RouteUpdateManyAndReturnArgs} args - Arguments to update many Routes.
     * @example
     * // Update many Routes
     * const route = await prisma.route.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Routes and only return the `id`
     * const routeWithIdOnly = await prisma.route.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Route.
     * @param {RouteUpsertArgs} args - Arguments to update or create a Route.
     * @example
     * // Update or create a Route
     * const route = await prisma.route.upsert({
     *   create: {
     *     // ... data to create a Route
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Route we want to update
     *   }
     * })
     */
    upsert<T extends RouteUpsertArgs>(args: SelectSubset<T, RouteUpsertArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Routes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteCountArgs} args - Arguments to filter Routes to count.
     * @example
     * // Count the number of Routes
     * const count = await prisma.route.count({
     *   where: {
     *     // ... the filter for the Routes we want to count
     *   }
     * })
    **/
    count<T extends RouteCountArgs>(
      args?: Subset<T, RouteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteAggregateArgs>(args: Subset<T, RouteAggregateArgs>): Prisma.PrismaPromise<GetRouteAggregateType<T>>

    /**
     * Group by Route.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteGroupByArgs['orderBy'] }
        : { orderBy?: RouteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Route model
   */
  readonly fields: RouteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Route.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buses<T extends Route$busesArgs<ExtArgs> = {}>(args?: Subset<T, Route$busesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    routeStops<T extends Route$routeStopsArgs<ExtArgs> = {}>(args?: Subset<T, Route$routeStopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    travels<T extends Route$travelsArgs<ExtArgs> = {}>(args?: Subset<T, Route$travelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TravelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Route$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Route$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Route model
   */
  interface RouteFieldRefs {
    readonly id: FieldRef<"Route", 'Int'>
    readonly name: FieldRef<"Route", 'String'>
    readonly origin: FieldRef<"Route", 'String'>
    readonly originLatitude: FieldRef<"Route", 'Float'>
    readonly originLongitude: FieldRef<"Route", 'Float'>
    readonly destination: FieldRef<"Route", 'String'>
    readonly destinationLatitude: FieldRef<"Route", 'Float'>
    readonly destinationLongitude: FieldRef<"Route", 'Float'>
    readonly status: FieldRef<"Route", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Route findUnique
   */
  export type RouteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findUniqueOrThrow
   */
  export type RouteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route findFirst
   */
  export type RouteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findFirstOrThrow
   */
  export type RouteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Route to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Routes.
     */
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route findMany
   */
  export type RouteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter, which Routes to fetch.
     */
    where?: RouteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Routes to fetch.
     */
    orderBy?: RouteOrderByWithRelationInput | RouteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Routes.
     */
    cursor?: RouteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Routes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Routes.
     */
    skip?: number
    distinct?: RouteScalarFieldEnum | RouteScalarFieldEnum[]
  }

  /**
   * Route create
   */
  export type RouteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to create a Route.
     */
    data: XOR<RouteCreateInput, RouteUncheckedCreateInput>
  }

  /**
   * Route createMany
   */
  export type RouteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
  }

  /**
   * Route createManyAndReturn
   */
  export type RouteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to create many Routes.
     */
    data: RouteCreateManyInput | RouteCreateManyInput[]
  }

  /**
   * Route update
   */
  export type RouteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The data needed to update a Route.
     */
    data: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
    /**
     * Choose, which Route to update.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route updateMany
   */
  export type RouteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route updateManyAndReturn
   */
  export type RouteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * The data used to update Routes.
     */
    data: XOR<RouteUpdateManyMutationInput, RouteUncheckedUpdateManyInput>
    /**
     * Filter which Routes to update
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to update.
     */
    limit?: number
  }

  /**
   * Route upsert
   */
  export type RouteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * The filter to search for the Route to update in case it exists.
     */
    where: RouteWhereUniqueInput
    /**
     * In case the Route found by the `where` argument doesn't exist, create a new Route with this data.
     */
    create: XOR<RouteCreateInput, RouteUncheckedCreateInput>
    /**
     * In case the Route was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteUpdateInput, RouteUncheckedUpdateInput>
  }

  /**
   * Route delete
   */
  export type RouteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
    /**
     * Filter which Route to delete.
     */
    where: RouteWhereUniqueInput
  }

  /**
   * Route deleteMany
   */
  export type RouteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Routes to delete
     */
    where?: RouteWhereInput
    /**
     * Limit how many Routes to delete.
     */
    limit?: number
  }

  /**
   * Route.buses
   */
  export type Route$busesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bus
     */
    select?: BusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bus
     */
    omit?: BusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusInclude<ExtArgs> | null
    where?: BusWhereInput
    orderBy?: BusOrderByWithRelationInput | BusOrderByWithRelationInput[]
    cursor?: BusWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BusScalarFieldEnum | BusScalarFieldEnum[]
  }

  /**
   * Route.routeStops
   */
  export type Route$routeStopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    where?: RouteStopWhereInput
    orderBy?: RouteStopOrderByWithRelationInput | RouteStopOrderByWithRelationInput[]
    cursor?: RouteStopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteStopScalarFieldEnum | RouteStopScalarFieldEnum[]
  }

  /**
   * Route.travels
   */
  export type Route$travelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Travel
     */
    select?: TravelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Travel
     */
    omit?: TravelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TravelInclude<ExtArgs> | null
    where?: TravelWhereInput
    orderBy?: TravelOrderByWithRelationInput | TravelOrderByWithRelationInput[]
    cursor?: TravelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TravelScalarFieldEnum | TravelScalarFieldEnum[]
  }

  /**
   * Route.schedules
   */
  export type Route$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    where?: RouteScheduleWhereInput
    orderBy?: RouteScheduleOrderByWithRelationInput | RouteScheduleOrderByWithRelationInput[]
    cursor?: RouteScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteScheduleScalarFieldEnum | RouteScheduleScalarFieldEnum[]
  }

  /**
   * Route without action
   */
  export type RouteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Route
     */
    select?: RouteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Route
     */
    omit?: RouteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteInclude<ExtArgs> | null
  }


  /**
   * Model RouteSchedule
   */

  export type AggregateRouteSchedule = {
    _count: RouteScheduleCountAggregateOutputType | null
    _avg: RouteScheduleAvgAggregateOutputType | null
    _sum: RouteScheduleSumAggregateOutputType | null
    _min: RouteScheduleMinAggregateOutputType | null
    _max: RouteScheduleMaxAggregateOutputType | null
  }

  export type RouteScheduleAvgAggregateOutputType = {
    id: number | null
    routeId: number | null
    estimatedDurationMinutes: number | null
    distanceKM: Decimal | null
  }

  export type RouteScheduleSumAggregateOutputType = {
    id: number | null
    routeId: number | null
    estimatedDurationMinutes: number | null
    distanceKM: Decimal | null
  }

  export type RouteScheduleMinAggregateOutputType = {
    id: number | null
    routeId: number | null
    departureLocation: string | null
    arrivalLocation: string | null
    departureTime: Date | null
    arrivalTime: Date | null
    estimatedDurationMinutes: number | null
    status: string | null
    distanceKM: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteScheduleMaxAggregateOutputType = {
    id: number | null
    routeId: number | null
    departureLocation: string | null
    arrivalLocation: string | null
    departureTime: Date | null
    arrivalTime: Date | null
    estimatedDurationMinutes: number | null
    status: string | null
    distanceKM: Decimal | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RouteScheduleCountAggregateOutputType = {
    id: number
    routeId: number
    departureLocation: number
    arrivalLocation: number
    departureTime: number
    arrivalTime: number
    estimatedDurationMinutes: number
    status: number
    distanceKM: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RouteScheduleAvgAggregateInputType = {
    id?: true
    routeId?: true
    estimatedDurationMinutes?: true
    distanceKM?: true
  }

  export type RouteScheduleSumAggregateInputType = {
    id?: true
    routeId?: true
    estimatedDurationMinutes?: true
    distanceKM?: true
  }

  export type RouteScheduleMinAggregateInputType = {
    id?: true
    routeId?: true
    departureLocation?: true
    arrivalLocation?: true
    departureTime?: true
    arrivalTime?: true
    estimatedDurationMinutes?: true
    status?: true
    distanceKM?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteScheduleMaxAggregateInputType = {
    id?: true
    routeId?: true
    departureLocation?: true
    arrivalLocation?: true
    departureTime?: true
    arrivalTime?: true
    estimatedDurationMinutes?: true
    status?: true
    distanceKM?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RouteScheduleCountAggregateInputType = {
    id?: true
    routeId?: true
    departureLocation?: true
    arrivalLocation?: true
    departureTime?: true
    arrivalTime?: true
    estimatedDurationMinutes?: true
    status?: true
    distanceKM?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RouteScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteSchedule to aggregate.
     */
    where?: RouteScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteSchedules to fetch.
     */
    orderBy?: RouteScheduleOrderByWithRelationInput | RouteScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteSchedules
    **/
    _count?: true | RouteScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteScheduleMaxAggregateInputType
  }

  export type GetRouteScheduleAggregateType<T extends RouteScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteSchedule[P]>
      : GetScalarType<T[P], AggregateRouteSchedule[P]>
  }




  export type RouteScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteScheduleWhereInput
    orderBy?: RouteScheduleOrderByWithAggregationInput | RouteScheduleOrderByWithAggregationInput[]
    by: RouteScheduleScalarFieldEnum[] | RouteScheduleScalarFieldEnum
    having?: RouteScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteScheduleCountAggregateInputType | true
    _avg?: RouteScheduleAvgAggregateInputType
    _sum?: RouteScheduleSumAggregateInputType
    _min?: RouteScheduleMinAggregateInputType
    _max?: RouteScheduleMaxAggregateInputType
  }

  export type RouteScheduleGroupByOutputType = {
    id: number
    routeId: number
    departureLocation: string
    arrivalLocation: string
    departureTime: Date
    arrivalTime: Date
    estimatedDurationMinutes: number
    status: string
    distanceKM: Decimal
    createdAt: Date
    updatedAt: Date
    _count: RouteScheduleCountAggregateOutputType | null
    _avg: RouteScheduleAvgAggregateOutputType | null
    _sum: RouteScheduleSumAggregateOutputType | null
    _min: RouteScheduleMinAggregateOutputType | null
    _max: RouteScheduleMaxAggregateOutputType | null
  }

  type GetRouteScheduleGroupByPayload<T extends RouteScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], RouteScheduleGroupByOutputType[P]>
        }
      >
    >


  export type RouteScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    departureLocation?: boolean
    arrivalLocation?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    estimatedDurationMinutes?: boolean
    status?: boolean
    distanceKM?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeSchedule"]>

  export type RouteScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    departureLocation?: boolean
    arrivalLocation?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    estimatedDurationMinutes?: boolean
    status?: boolean
    distanceKM?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeSchedule"]>

  export type RouteScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    departureLocation?: boolean
    arrivalLocation?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    estimatedDurationMinutes?: boolean
    status?: boolean
    distanceKM?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeSchedule"]>

  export type RouteScheduleSelectScalar = {
    id?: boolean
    routeId?: boolean
    departureLocation?: boolean
    arrivalLocation?: boolean
    departureTime?: boolean
    arrivalTime?: boolean
    estimatedDurationMinutes?: boolean
    status?: boolean
    distanceKM?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RouteScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeId" | "departureLocation" | "arrivalLocation" | "departureTime" | "arrivalTime" | "estimatedDurationMinutes" | "status" | "distanceKM" | "createdAt" | "updatedAt", ExtArgs["result"]["routeSchedule"]>
  export type RouteScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type RouteScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }
  export type RouteScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
  }

  export type $RouteSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteSchedule"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      routeId: number
      departureLocation: string
      arrivalLocation: string
      departureTime: Date
      arrivalTime: Date
      estimatedDurationMinutes: number
      status: string
      distanceKM: Prisma.Decimal
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["routeSchedule"]>
    composites: {}
  }

  type RouteScheduleGetPayload<S extends boolean | null | undefined | RouteScheduleDefaultArgs> = $Result.GetResult<Prisma.$RouteSchedulePayload, S>

  type RouteScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteScheduleCountAggregateInputType | true
    }

  export interface RouteScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteSchedule'], meta: { name: 'RouteSchedule' } }
    /**
     * Find zero or one RouteSchedule that matches the filter.
     * @param {RouteScheduleFindUniqueArgs} args - Arguments to find a RouteSchedule
     * @example
     * // Get one RouteSchedule
     * const routeSchedule = await prisma.routeSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteScheduleFindUniqueArgs>(args: SelectSubset<T, RouteScheduleFindUniqueArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RouteSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteScheduleFindUniqueOrThrowArgs} args - Arguments to find a RouteSchedule
     * @example
     * // Get one RouteSchedule
     * const routeSchedule = await prisma.routeSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleFindFirstArgs} args - Arguments to find a RouteSchedule
     * @example
     * // Get one RouteSchedule
     * const routeSchedule = await prisma.routeSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteScheduleFindFirstArgs>(args?: SelectSubset<T, RouteScheduleFindFirstArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleFindFirstOrThrowArgs} args - Arguments to find a RouteSchedule
     * @example
     * // Get one RouteSchedule
     * const routeSchedule = await prisma.routeSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RouteSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteSchedules
     * const routeSchedules = await prisma.routeSchedule.findMany()
     * 
     * // Get first 10 RouteSchedules
     * const routeSchedules = await prisma.routeSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeScheduleWithIdOnly = await prisma.routeSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteScheduleFindManyArgs>(args?: SelectSubset<T, RouteScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RouteSchedule.
     * @param {RouteScheduleCreateArgs} args - Arguments to create a RouteSchedule.
     * @example
     * // Create one RouteSchedule
     * const RouteSchedule = await prisma.routeSchedule.create({
     *   data: {
     *     // ... data to create a RouteSchedule
     *   }
     * })
     * 
     */
    create<T extends RouteScheduleCreateArgs>(args: SelectSubset<T, RouteScheduleCreateArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RouteSchedules.
     * @param {RouteScheduleCreateManyArgs} args - Arguments to create many RouteSchedules.
     * @example
     * // Create many RouteSchedules
     * const routeSchedule = await prisma.routeSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteScheduleCreateManyArgs>(args?: SelectSubset<T, RouteScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RouteSchedules and returns the data saved in the database.
     * @param {RouteScheduleCreateManyAndReturnArgs} args - Arguments to create many RouteSchedules.
     * @example
     * // Create many RouteSchedules
     * const routeSchedule = await prisma.routeSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RouteSchedules and only return the `id`
     * const routeScheduleWithIdOnly = await prisma.routeSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RouteSchedule.
     * @param {RouteScheduleDeleteArgs} args - Arguments to delete one RouteSchedule.
     * @example
     * // Delete one RouteSchedule
     * const RouteSchedule = await prisma.routeSchedule.delete({
     *   where: {
     *     // ... filter to delete one RouteSchedule
     *   }
     * })
     * 
     */
    delete<T extends RouteScheduleDeleteArgs>(args: SelectSubset<T, RouteScheduleDeleteArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RouteSchedule.
     * @param {RouteScheduleUpdateArgs} args - Arguments to update one RouteSchedule.
     * @example
     * // Update one RouteSchedule
     * const routeSchedule = await prisma.routeSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteScheduleUpdateArgs>(args: SelectSubset<T, RouteScheduleUpdateArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RouteSchedules.
     * @param {RouteScheduleDeleteManyArgs} args - Arguments to filter RouteSchedules to delete.
     * @example
     * // Delete a few RouteSchedules
     * const { count } = await prisma.routeSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteScheduleDeleteManyArgs>(args?: SelectSubset<T, RouteScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteSchedules
     * const routeSchedule = await prisma.routeSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteScheduleUpdateManyArgs>(args: SelectSubset<T, RouteScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteSchedules and returns the data updated in the database.
     * @param {RouteScheduleUpdateManyAndReturnArgs} args - Arguments to update many RouteSchedules.
     * @example
     * // Update many RouteSchedules
     * const routeSchedule = await prisma.routeSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RouteSchedules and only return the `id`
     * const routeScheduleWithIdOnly = await prisma.routeSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RouteSchedule.
     * @param {RouteScheduleUpsertArgs} args - Arguments to update or create a RouteSchedule.
     * @example
     * // Update or create a RouteSchedule
     * const routeSchedule = await prisma.routeSchedule.upsert({
     *   create: {
     *     // ... data to create a RouteSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteSchedule we want to update
     *   }
     * })
     */
    upsert<T extends RouteScheduleUpsertArgs>(args: SelectSubset<T, RouteScheduleUpsertArgs<ExtArgs>>): Prisma__RouteScheduleClient<$Result.GetResult<Prisma.$RouteSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RouteSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleCountArgs} args - Arguments to filter RouteSchedules to count.
     * @example
     * // Count the number of RouteSchedules
     * const count = await prisma.routeSchedule.count({
     *   where: {
     *     // ... the filter for the RouteSchedules we want to count
     *   }
     * })
    **/
    count<T extends RouteScheduleCountArgs>(
      args?: Subset<T, RouteScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteScheduleAggregateArgs>(args: Subset<T, RouteScheduleAggregateArgs>): Prisma.PrismaPromise<GetRouteScheduleAggregateType<T>>

    /**
     * Group by RouteSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteScheduleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteScheduleGroupByArgs['orderBy'] }
        : { orderBy?: RouteScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteSchedule model
   */
  readonly fields: RouteScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RouteSchedule model
   */
  interface RouteScheduleFieldRefs {
    readonly id: FieldRef<"RouteSchedule", 'Int'>
    readonly routeId: FieldRef<"RouteSchedule", 'Int'>
    readonly departureLocation: FieldRef<"RouteSchedule", 'String'>
    readonly arrivalLocation: FieldRef<"RouteSchedule", 'String'>
    readonly departureTime: FieldRef<"RouteSchedule", 'DateTime'>
    readonly arrivalTime: FieldRef<"RouteSchedule", 'DateTime'>
    readonly estimatedDurationMinutes: FieldRef<"RouteSchedule", 'Int'>
    readonly status: FieldRef<"RouteSchedule", 'String'>
    readonly distanceKM: FieldRef<"RouteSchedule", 'Decimal'>
    readonly createdAt: FieldRef<"RouteSchedule", 'DateTime'>
    readonly updatedAt: FieldRef<"RouteSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RouteSchedule findUnique
   */
  export type RouteScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RouteSchedule to fetch.
     */
    where: RouteScheduleWhereUniqueInput
  }

  /**
   * RouteSchedule findUniqueOrThrow
   */
  export type RouteScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RouteSchedule to fetch.
     */
    where: RouteScheduleWhereUniqueInput
  }

  /**
   * RouteSchedule findFirst
   */
  export type RouteScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RouteSchedule to fetch.
     */
    where?: RouteScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteSchedules to fetch.
     */
    orderBy?: RouteScheduleOrderByWithRelationInput | RouteScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteSchedules.
     */
    cursor?: RouteScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteSchedules.
     */
    distinct?: RouteScheduleScalarFieldEnum | RouteScheduleScalarFieldEnum[]
  }

  /**
   * RouteSchedule findFirstOrThrow
   */
  export type RouteScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RouteSchedule to fetch.
     */
    where?: RouteScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteSchedules to fetch.
     */
    orderBy?: RouteScheduleOrderByWithRelationInput | RouteScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteSchedules.
     */
    cursor?: RouteScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteSchedules.
     */
    distinct?: RouteScheduleScalarFieldEnum | RouteScheduleScalarFieldEnum[]
  }

  /**
   * RouteSchedule findMany
   */
  export type RouteScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * Filter, which RouteSchedules to fetch.
     */
    where?: RouteScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteSchedules to fetch.
     */
    orderBy?: RouteScheduleOrderByWithRelationInput | RouteScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteSchedules.
     */
    cursor?: RouteScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteSchedules.
     */
    skip?: number
    distinct?: RouteScheduleScalarFieldEnum | RouteScheduleScalarFieldEnum[]
  }

  /**
   * RouteSchedule create
   */
  export type RouteScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteSchedule.
     */
    data: XOR<RouteScheduleCreateInput, RouteScheduleUncheckedCreateInput>
  }

  /**
   * RouteSchedule createMany
   */
  export type RouteScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteSchedules.
     */
    data: RouteScheduleCreateManyInput | RouteScheduleCreateManyInput[]
  }

  /**
   * RouteSchedule createManyAndReturn
   */
  export type RouteScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many RouteSchedules.
     */
    data: RouteScheduleCreateManyInput | RouteScheduleCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteSchedule update
   */
  export type RouteScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteSchedule.
     */
    data: XOR<RouteScheduleUpdateInput, RouteScheduleUncheckedUpdateInput>
    /**
     * Choose, which RouteSchedule to update.
     */
    where: RouteScheduleWhereUniqueInput
  }

  /**
   * RouteSchedule updateMany
   */
  export type RouteScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteSchedules.
     */
    data: XOR<RouteScheduleUpdateManyMutationInput, RouteScheduleUncheckedUpdateManyInput>
    /**
     * Filter which RouteSchedules to update
     */
    where?: RouteScheduleWhereInput
    /**
     * Limit how many RouteSchedules to update.
     */
    limit?: number
  }

  /**
   * RouteSchedule updateManyAndReturn
   */
  export type RouteScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * The data used to update RouteSchedules.
     */
    data: XOR<RouteScheduleUpdateManyMutationInput, RouteScheduleUncheckedUpdateManyInput>
    /**
     * Filter which RouteSchedules to update
     */
    where?: RouteScheduleWhereInput
    /**
     * Limit how many RouteSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteSchedule upsert
   */
  export type RouteScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteSchedule to update in case it exists.
     */
    where: RouteScheduleWhereUniqueInput
    /**
     * In case the RouteSchedule found by the `where` argument doesn't exist, create a new RouteSchedule with this data.
     */
    create: XOR<RouteScheduleCreateInput, RouteScheduleUncheckedCreateInput>
    /**
     * In case the RouteSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteScheduleUpdateInput, RouteScheduleUncheckedUpdateInput>
  }

  /**
   * RouteSchedule delete
   */
  export type RouteScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
    /**
     * Filter which RouteSchedule to delete.
     */
    where: RouteScheduleWhereUniqueInput
  }

  /**
   * RouteSchedule deleteMany
   */
  export type RouteScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteSchedules to delete
     */
    where?: RouteScheduleWhereInput
    /**
     * Limit how many RouteSchedules to delete.
     */
    limit?: number
  }

  /**
   * RouteSchedule without action
   */
  export type RouteScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteSchedule
     */
    select?: RouteScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteSchedule
     */
    omit?: RouteScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Stop
   */

  export type AggregateStop = {
    _count: StopCountAggregateOutputType | null
    _avg: StopAvgAggregateOutputType | null
    _sum: StopSumAggregateOutputType | null
    _min: StopMinAggregateOutputType | null
    _max: StopMaxAggregateOutputType | null
  }

  export type StopAvgAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StopSumAggregateOutputType = {
    id: number | null
    latitude: number | null
    longitude: number | null
  }

  export type StopMinAggregateOutputType = {
    id: number | null
    name: string | null
    latitude: number | null
    longitude: number | null
  }

  export type StopMaxAggregateOutputType = {
    id: number | null
    name: string | null
    latitude: number | null
    longitude: number | null
  }

  export type StopCountAggregateOutputType = {
    id: number
    name: number
    latitude: number
    longitude: number
    _all: number
  }


  export type StopAvgAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type StopSumAggregateInputType = {
    id?: true
    latitude?: true
    longitude?: true
  }

  export type StopMinAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
  }

  export type StopMaxAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
  }

  export type StopCountAggregateInputType = {
    id?: true
    name?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type StopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stop to aggregate.
     */
    where?: StopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stops to fetch.
     */
    orderBy?: StopOrderByWithRelationInput | StopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stops
    **/
    _count?: true | StopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StopMaxAggregateInputType
  }

  export type GetStopAggregateType<T extends StopAggregateArgs> = {
        [P in keyof T & keyof AggregateStop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStop[P]>
      : GetScalarType<T[P], AggregateStop[P]>
  }




  export type StopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StopWhereInput
    orderBy?: StopOrderByWithAggregationInput | StopOrderByWithAggregationInput[]
    by: StopScalarFieldEnum[] | StopScalarFieldEnum
    having?: StopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StopCountAggregateInputType | true
    _avg?: StopAvgAggregateInputType
    _sum?: StopSumAggregateInputType
    _min?: StopMinAggregateInputType
    _max?: StopMaxAggregateInputType
  }

  export type StopGroupByOutputType = {
    id: number
    name: string
    latitude: number | null
    longitude: number | null
    _count: StopCountAggregateOutputType | null
    _avg: StopAvgAggregateOutputType | null
    _sum: StopSumAggregateOutputType | null
    _min: StopMinAggregateOutputType | null
    _max: StopMaxAggregateOutputType | null
  }

  type GetStopGroupByPayload<T extends StopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StopGroupByOutputType[P]>
            : GetScalarType<T[P], StopGroupByOutputType[P]>
        }
      >
    >


  export type StopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
    routeStops?: boolean | Stop$routeStopsArgs<ExtArgs>
    _count?: boolean | StopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stop"]>

  export type StopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["stop"]>

  export type StopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
  }, ExtArgs["result"]["stop"]>

  export type StopSelectScalar = {
    id?: boolean
    name?: boolean
    latitude?: boolean
    longitude?: boolean
  }

  export type StopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "latitude" | "longitude", ExtArgs["result"]["stop"]>
  export type StopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    routeStops?: boolean | Stop$routeStopsArgs<ExtArgs>
    _count?: boolean | StopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stop"
    objects: {
      routeStops: Prisma.$RouteStopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      latitude: number | null
      longitude: number | null
    }, ExtArgs["result"]["stop"]>
    composites: {}
  }

  type StopGetPayload<S extends boolean | null | undefined | StopDefaultArgs> = $Result.GetResult<Prisma.$StopPayload, S>

  type StopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StopCountAggregateInputType | true
    }

  export interface StopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stop'], meta: { name: 'Stop' } }
    /**
     * Find zero or one Stop that matches the filter.
     * @param {StopFindUniqueArgs} args - Arguments to find a Stop
     * @example
     * // Get one Stop
     * const stop = await prisma.stop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StopFindUniqueArgs>(args: SelectSubset<T, StopFindUniqueArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StopFindUniqueOrThrowArgs} args - Arguments to find a Stop
     * @example
     * // Get one Stop
     * const stop = await prisma.stop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StopFindUniqueOrThrowArgs>(args: SelectSubset<T, StopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopFindFirstArgs} args - Arguments to find a Stop
     * @example
     * // Get one Stop
     * const stop = await prisma.stop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StopFindFirstArgs>(args?: SelectSubset<T, StopFindFirstArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopFindFirstOrThrowArgs} args - Arguments to find a Stop
     * @example
     * // Get one Stop
     * const stop = await prisma.stop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StopFindFirstOrThrowArgs>(args?: SelectSubset<T, StopFindFirstOrThrowArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stops
     * const stops = await prisma.stop.findMany()
     * 
     * // Get first 10 Stops
     * const stops = await prisma.stop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stopWithIdOnly = await prisma.stop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StopFindManyArgs>(args?: SelectSubset<T, StopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stop.
     * @param {StopCreateArgs} args - Arguments to create a Stop.
     * @example
     * // Create one Stop
     * const Stop = await prisma.stop.create({
     *   data: {
     *     // ... data to create a Stop
     *   }
     * })
     * 
     */
    create<T extends StopCreateArgs>(args: SelectSubset<T, StopCreateArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stops.
     * @param {StopCreateManyArgs} args - Arguments to create many Stops.
     * @example
     * // Create many Stops
     * const stop = await prisma.stop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StopCreateManyArgs>(args?: SelectSubset<T, StopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stops and returns the data saved in the database.
     * @param {StopCreateManyAndReturnArgs} args - Arguments to create many Stops.
     * @example
     * // Create many Stops
     * const stop = await prisma.stop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stops and only return the `id`
     * const stopWithIdOnly = await prisma.stop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StopCreateManyAndReturnArgs>(args?: SelectSubset<T, StopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stop.
     * @param {StopDeleteArgs} args - Arguments to delete one Stop.
     * @example
     * // Delete one Stop
     * const Stop = await prisma.stop.delete({
     *   where: {
     *     // ... filter to delete one Stop
     *   }
     * })
     * 
     */
    delete<T extends StopDeleteArgs>(args: SelectSubset<T, StopDeleteArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stop.
     * @param {StopUpdateArgs} args - Arguments to update one Stop.
     * @example
     * // Update one Stop
     * const stop = await prisma.stop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StopUpdateArgs>(args: SelectSubset<T, StopUpdateArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stops.
     * @param {StopDeleteManyArgs} args - Arguments to filter Stops to delete.
     * @example
     * // Delete a few Stops
     * const { count } = await prisma.stop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StopDeleteManyArgs>(args?: SelectSubset<T, StopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stops
     * const stop = await prisma.stop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StopUpdateManyArgs>(args: SelectSubset<T, StopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stops and returns the data updated in the database.
     * @param {StopUpdateManyAndReturnArgs} args - Arguments to update many Stops.
     * @example
     * // Update many Stops
     * const stop = await prisma.stop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stops and only return the `id`
     * const stopWithIdOnly = await prisma.stop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StopUpdateManyAndReturnArgs>(args: SelectSubset<T, StopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stop.
     * @param {StopUpsertArgs} args - Arguments to update or create a Stop.
     * @example
     * // Update or create a Stop
     * const stop = await prisma.stop.upsert({
     *   create: {
     *     // ... data to create a Stop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stop we want to update
     *   }
     * })
     */
    upsert<T extends StopUpsertArgs>(args: SelectSubset<T, StopUpsertArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopCountArgs} args - Arguments to filter Stops to count.
     * @example
     * // Count the number of Stops
     * const count = await prisma.stop.count({
     *   where: {
     *     // ... the filter for the Stops we want to count
     *   }
     * })
    **/
    count<T extends StopCountArgs>(
      args?: Subset<T, StopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StopAggregateArgs>(args: Subset<T, StopAggregateArgs>): Prisma.PrismaPromise<GetStopAggregateType<T>>

    /**
     * Group by Stop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StopGroupByArgs['orderBy'] }
        : { orderBy?: StopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stop model
   */
  readonly fields: StopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    routeStops<T extends Stop$routeStopsArgs<ExtArgs> = {}>(args?: Subset<T, Stop$routeStopsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Stop model
   */
  interface StopFieldRefs {
    readonly id: FieldRef<"Stop", 'Int'>
    readonly name: FieldRef<"Stop", 'String'>
    readonly latitude: FieldRef<"Stop", 'Float'>
    readonly longitude: FieldRef<"Stop", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Stop findUnique
   */
  export type StopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * Filter, which Stop to fetch.
     */
    where: StopWhereUniqueInput
  }

  /**
   * Stop findUniqueOrThrow
   */
  export type StopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * Filter, which Stop to fetch.
     */
    where: StopWhereUniqueInput
  }

  /**
   * Stop findFirst
   */
  export type StopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * Filter, which Stop to fetch.
     */
    where?: StopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stops to fetch.
     */
    orderBy?: StopOrderByWithRelationInput | StopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stops.
     */
    cursor?: StopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stops.
     */
    distinct?: StopScalarFieldEnum | StopScalarFieldEnum[]
  }

  /**
   * Stop findFirstOrThrow
   */
  export type StopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * Filter, which Stop to fetch.
     */
    where?: StopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stops to fetch.
     */
    orderBy?: StopOrderByWithRelationInput | StopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stops.
     */
    cursor?: StopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stops.
     */
    distinct?: StopScalarFieldEnum | StopScalarFieldEnum[]
  }

  /**
   * Stop findMany
   */
  export type StopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * Filter, which Stops to fetch.
     */
    where?: StopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stops to fetch.
     */
    orderBy?: StopOrderByWithRelationInput | StopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stops.
     */
    cursor?: StopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stops.
     */
    skip?: number
    distinct?: StopScalarFieldEnum | StopScalarFieldEnum[]
  }

  /**
   * Stop create
   */
  export type StopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * The data needed to create a Stop.
     */
    data: XOR<StopCreateInput, StopUncheckedCreateInput>
  }

  /**
   * Stop createMany
   */
  export type StopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stops.
     */
    data: StopCreateManyInput | StopCreateManyInput[]
  }

  /**
   * Stop createManyAndReturn
   */
  export type StopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * The data used to create many Stops.
     */
    data: StopCreateManyInput | StopCreateManyInput[]
  }

  /**
   * Stop update
   */
  export type StopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * The data needed to update a Stop.
     */
    data: XOR<StopUpdateInput, StopUncheckedUpdateInput>
    /**
     * Choose, which Stop to update.
     */
    where: StopWhereUniqueInput
  }

  /**
   * Stop updateMany
   */
  export type StopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stops.
     */
    data: XOR<StopUpdateManyMutationInput, StopUncheckedUpdateManyInput>
    /**
     * Filter which Stops to update
     */
    where?: StopWhereInput
    /**
     * Limit how many Stops to update.
     */
    limit?: number
  }

  /**
   * Stop updateManyAndReturn
   */
  export type StopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * The data used to update Stops.
     */
    data: XOR<StopUpdateManyMutationInput, StopUncheckedUpdateManyInput>
    /**
     * Filter which Stops to update
     */
    where?: StopWhereInput
    /**
     * Limit how many Stops to update.
     */
    limit?: number
  }

  /**
   * Stop upsert
   */
  export type StopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * The filter to search for the Stop to update in case it exists.
     */
    where: StopWhereUniqueInput
    /**
     * In case the Stop found by the `where` argument doesn't exist, create a new Stop with this data.
     */
    create: XOR<StopCreateInput, StopUncheckedCreateInput>
    /**
     * In case the Stop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StopUpdateInput, StopUncheckedUpdateInput>
  }

  /**
   * Stop delete
   */
  export type StopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
    /**
     * Filter which Stop to delete.
     */
    where: StopWhereUniqueInput
  }

  /**
   * Stop deleteMany
   */
  export type StopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stops to delete
     */
    where?: StopWhereInput
    /**
     * Limit how many Stops to delete.
     */
    limit?: number
  }

  /**
   * Stop.routeStops
   */
  export type Stop$routeStopsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    where?: RouteStopWhereInput
    orderBy?: RouteStopOrderByWithRelationInput | RouteStopOrderByWithRelationInput[]
    cursor?: RouteStopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RouteStopScalarFieldEnum | RouteStopScalarFieldEnum[]
  }

  /**
   * Stop without action
   */
  export type StopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stop
     */
    select?: StopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stop
     */
    omit?: StopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StopInclude<ExtArgs> | null
  }


  /**
   * Model RouteStop
   */

  export type AggregateRouteStop = {
    _count: RouteStopCountAggregateOutputType | null
    _avg: RouteStopAvgAggregateOutputType | null
    _sum: RouteStopSumAggregateOutputType | null
    _min: RouteStopMinAggregateOutputType | null
    _max: RouteStopMaxAggregateOutputType | null
  }

  export type RouteStopAvgAggregateOutputType = {
    id: number | null
    routeId: number | null
    stopId: number | null
    order: number | null
  }

  export type RouteStopSumAggregateOutputType = {
    id: number | null
    routeId: number | null
    stopId: number | null
    order: number | null
  }

  export type RouteStopMinAggregateOutputType = {
    id: number | null
    routeId: number | null
    stopId: number | null
    order: number | null
  }

  export type RouteStopMaxAggregateOutputType = {
    id: number | null
    routeId: number | null
    stopId: number | null
    order: number | null
  }

  export type RouteStopCountAggregateOutputType = {
    id: number
    routeId: number
    stopId: number
    order: number
    _all: number
  }


  export type RouteStopAvgAggregateInputType = {
    id?: true
    routeId?: true
    stopId?: true
    order?: true
  }

  export type RouteStopSumAggregateInputType = {
    id?: true
    routeId?: true
    stopId?: true
    order?: true
  }

  export type RouteStopMinAggregateInputType = {
    id?: true
    routeId?: true
    stopId?: true
    order?: true
  }

  export type RouteStopMaxAggregateInputType = {
    id?: true
    routeId?: true
    stopId?: true
    order?: true
  }

  export type RouteStopCountAggregateInputType = {
    id?: true
    routeId?: true
    stopId?: true
    order?: true
    _all?: true
  }

  export type RouteStopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteStop to aggregate.
     */
    where?: RouteStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteStops to fetch.
     */
    orderBy?: RouteStopOrderByWithRelationInput | RouteStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RouteStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RouteStops
    **/
    _count?: true | RouteStopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RouteStopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RouteStopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RouteStopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RouteStopMaxAggregateInputType
  }

  export type GetRouteStopAggregateType<T extends RouteStopAggregateArgs> = {
        [P in keyof T & keyof AggregateRouteStop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRouteStop[P]>
      : GetScalarType<T[P], AggregateRouteStop[P]>
  }




  export type RouteStopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RouteStopWhereInput
    orderBy?: RouteStopOrderByWithAggregationInput | RouteStopOrderByWithAggregationInput[]
    by: RouteStopScalarFieldEnum[] | RouteStopScalarFieldEnum
    having?: RouteStopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RouteStopCountAggregateInputType | true
    _avg?: RouteStopAvgAggregateInputType
    _sum?: RouteStopSumAggregateInputType
    _min?: RouteStopMinAggregateInputType
    _max?: RouteStopMaxAggregateInputType
  }

  export type RouteStopGroupByOutputType = {
    id: number
    routeId: number
    stopId: number
    order: number | null
    _count: RouteStopCountAggregateOutputType | null
    _avg: RouteStopAvgAggregateOutputType | null
    _sum: RouteStopSumAggregateOutputType | null
    _min: RouteStopMinAggregateOutputType | null
    _max: RouteStopMaxAggregateOutputType | null
  }

  type GetRouteStopGroupByPayload<T extends RouteStopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RouteStopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RouteStopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RouteStopGroupByOutputType[P]>
            : GetScalarType<T[P], RouteStopGroupByOutputType[P]>
        }
      >
    >


  export type RouteStopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    stopId?: boolean
    order?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    stop?: boolean | StopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeStop"]>

  export type RouteStopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    stopId?: boolean
    order?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    stop?: boolean | StopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeStop"]>

  export type RouteStopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    routeId?: boolean
    stopId?: boolean
    order?: boolean
    route?: boolean | RouteDefaultArgs<ExtArgs>
    stop?: boolean | StopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["routeStop"]>

  export type RouteStopSelectScalar = {
    id?: boolean
    routeId?: boolean
    stopId?: boolean
    order?: boolean
  }

  export type RouteStopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "routeId" | "stopId" | "order", ExtArgs["result"]["routeStop"]>
  export type RouteStopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    stop?: boolean | StopDefaultArgs<ExtArgs>
  }
  export type RouteStopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    stop?: boolean | StopDefaultArgs<ExtArgs>
  }
  export type RouteStopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    route?: boolean | RouteDefaultArgs<ExtArgs>
    stop?: boolean | StopDefaultArgs<ExtArgs>
  }

  export type $RouteStopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RouteStop"
    objects: {
      route: Prisma.$RoutePayload<ExtArgs>
      stop: Prisma.$StopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      routeId: number
      stopId: number
      order: number | null
    }, ExtArgs["result"]["routeStop"]>
    composites: {}
  }

  type RouteStopGetPayload<S extends boolean | null | undefined | RouteStopDefaultArgs> = $Result.GetResult<Prisma.$RouteStopPayload, S>

  type RouteStopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RouteStopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RouteStopCountAggregateInputType | true
    }

  export interface RouteStopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RouteStop'], meta: { name: 'RouteStop' } }
    /**
     * Find zero or one RouteStop that matches the filter.
     * @param {RouteStopFindUniqueArgs} args - Arguments to find a RouteStop
     * @example
     * // Get one RouteStop
     * const routeStop = await prisma.routeStop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RouteStopFindUniqueArgs>(args: SelectSubset<T, RouteStopFindUniqueArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RouteStop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RouteStopFindUniqueOrThrowArgs} args - Arguments to find a RouteStop
     * @example
     * // Get one RouteStop
     * const routeStop = await prisma.routeStop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RouteStopFindUniqueOrThrowArgs>(args: SelectSubset<T, RouteStopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteStop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopFindFirstArgs} args - Arguments to find a RouteStop
     * @example
     * // Get one RouteStop
     * const routeStop = await prisma.routeStop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RouteStopFindFirstArgs>(args?: SelectSubset<T, RouteStopFindFirstArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RouteStop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopFindFirstOrThrowArgs} args - Arguments to find a RouteStop
     * @example
     * // Get one RouteStop
     * const routeStop = await prisma.routeStop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RouteStopFindFirstOrThrowArgs>(args?: SelectSubset<T, RouteStopFindFirstOrThrowArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RouteStops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RouteStops
     * const routeStops = await prisma.routeStop.findMany()
     * 
     * // Get first 10 RouteStops
     * const routeStops = await prisma.routeStop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const routeStopWithIdOnly = await prisma.routeStop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RouteStopFindManyArgs>(args?: SelectSubset<T, RouteStopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RouteStop.
     * @param {RouteStopCreateArgs} args - Arguments to create a RouteStop.
     * @example
     * // Create one RouteStop
     * const RouteStop = await prisma.routeStop.create({
     *   data: {
     *     // ... data to create a RouteStop
     *   }
     * })
     * 
     */
    create<T extends RouteStopCreateArgs>(args: SelectSubset<T, RouteStopCreateArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RouteStops.
     * @param {RouteStopCreateManyArgs} args - Arguments to create many RouteStops.
     * @example
     * // Create many RouteStops
     * const routeStop = await prisma.routeStop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RouteStopCreateManyArgs>(args?: SelectSubset<T, RouteStopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RouteStops and returns the data saved in the database.
     * @param {RouteStopCreateManyAndReturnArgs} args - Arguments to create many RouteStops.
     * @example
     * // Create many RouteStops
     * const routeStop = await prisma.routeStop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RouteStops and only return the `id`
     * const routeStopWithIdOnly = await prisma.routeStop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RouteStopCreateManyAndReturnArgs>(args?: SelectSubset<T, RouteStopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RouteStop.
     * @param {RouteStopDeleteArgs} args - Arguments to delete one RouteStop.
     * @example
     * // Delete one RouteStop
     * const RouteStop = await prisma.routeStop.delete({
     *   where: {
     *     // ... filter to delete one RouteStop
     *   }
     * })
     * 
     */
    delete<T extends RouteStopDeleteArgs>(args: SelectSubset<T, RouteStopDeleteArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RouteStop.
     * @param {RouteStopUpdateArgs} args - Arguments to update one RouteStop.
     * @example
     * // Update one RouteStop
     * const routeStop = await prisma.routeStop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RouteStopUpdateArgs>(args: SelectSubset<T, RouteStopUpdateArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RouteStops.
     * @param {RouteStopDeleteManyArgs} args - Arguments to filter RouteStops to delete.
     * @example
     * // Delete a few RouteStops
     * const { count } = await prisma.routeStop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RouteStopDeleteManyArgs>(args?: SelectSubset<T, RouteStopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteStops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RouteStops
     * const routeStop = await prisma.routeStop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RouteStopUpdateManyArgs>(args: SelectSubset<T, RouteStopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RouteStops and returns the data updated in the database.
     * @param {RouteStopUpdateManyAndReturnArgs} args - Arguments to update many RouteStops.
     * @example
     * // Update many RouteStops
     * const routeStop = await prisma.routeStop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RouteStops and only return the `id`
     * const routeStopWithIdOnly = await prisma.routeStop.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RouteStopUpdateManyAndReturnArgs>(args: SelectSubset<T, RouteStopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RouteStop.
     * @param {RouteStopUpsertArgs} args - Arguments to update or create a RouteStop.
     * @example
     * // Update or create a RouteStop
     * const routeStop = await prisma.routeStop.upsert({
     *   create: {
     *     // ... data to create a RouteStop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RouteStop we want to update
     *   }
     * })
     */
    upsert<T extends RouteStopUpsertArgs>(args: SelectSubset<T, RouteStopUpsertArgs<ExtArgs>>): Prisma__RouteStopClient<$Result.GetResult<Prisma.$RouteStopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RouteStops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopCountArgs} args - Arguments to filter RouteStops to count.
     * @example
     * // Count the number of RouteStops
     * const count = await prisma.routeStop.count({
     *   where: {
     *     // ... the filter for the RouteStops we want to count
     *   }
     * })
    **/
    count<T extends RouteStopCountArgs>(
      args?: Subset<T, RouteStopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RouteStopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RouteStop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RouteStopAggregateArgs>(args: Subset<T, RouteStopAggregateArgs>): Prisma.PrismaPromise<GetRouteStopAggregateType<T>>

    /**
     * Group by RouteStop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RouteStopGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RouteStopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RouteStopGroupByArgs['orderBy'] }
        : { orderBy?: RouteStopGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RouteStopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRouteStopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RouteStop model
   */
  readonly fields: RouteStopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RouteStop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RouteStopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    route<T extends RouteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RouteDefaultArgs<ExtArgs>>): Prisma__RouteClient<$Result.GetResult<Prisma.$RoutePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stop<T extends StopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StopDefaultArgs<ExtArgs>>): Prisma__StopClient<$Result.GetResult<Prisma.$StopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RouteStop model
   */
  interface RouteStopFieldRefs {
    readonly id: FieldRef<"RouteStop", 'Int'>
    readonly routeId: FieldRef<"RouteStop", 'Int'>
    readonly stopId: FieldRef<"RouteStop", 'Int'>
    readonly order: FieldRef<"RouteStop", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RouteStop findUnique
   */
  export type RouteStopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteStop to fetch.
     */
    where: RouteStopWhereUniqueInput
  }

  /**
   * RouteStop findUniqueOrThrow
   */
  export type RouteStopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteStop to fetch.
     */
    where: RouteStopWhereUniqueInput
  }

  /**
   * RouteStop findFirst
   */
  export type RouteStopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteStop to fetch.
     */
    where?: RouteStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteStops to fetch.
     */
    orderBy?: RouteStopOrderByWithRelationInput | RouteStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteStops.
     */
    cursor?: RouteStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteStops.
     */
    distinct?: RouteStopScalarFieldEnum | RouteStopScalarFieldEnum[]
  }

  /**
   * RouteStop findFirstOrThrow
   */
  export type RouteStopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteStop to fetch.
     */
    where?: RouteStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteStops to fetch.
     */
    orderBy?: RouteStopOrderByWithRelationInput | RouteStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RouteStops.
     */
    cursor?: RouteStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteStops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RouteStops.
     */
    distinct?: RouteStopScalarFieldEnum | RouteStopScalarFieldEnum[]
  }

  /**
   * RouteStop findMany
   */
  export type RouteStopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * Filter, which RouteStops to fetch.
     */
    where?: RouteStopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RouteStops to fetch.
     */
    orderBy?: RouteStopOrderByWithRelationInput | RouteStopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RouteStops.
     */
    cursor?: RouteStopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RouteStops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RouteStops.
     */
    skip?: number
    distinct?: RouteStopScalarFieldEnum | RouteStopScalarFieldEnum[]
  }

  /**
   * RouteStop create
   */
  export type RouteStopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * The data needed to create a RouteStop.
     */
    data: XOR<RouteStopCreateInput, RouteStopUncheckedCreateInput>
  }

  /**
   * RouteStop createMany
   */
  export type RouteStopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RouteStops.
     */
    data: RouteStopCreateManyInput | RouteStopCreateManyInput[]
  }

  /**
   * RouteStop createManyAndReturn
   */
  export type RouteStopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * The data used to create many RouteStops.
     */
    data: RouteStopCreateManyInput | RouteStopCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteStop update
   */
  export type RouteStopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * The data needed to update a RouteStop.
     */
    data: XOR<RouteStopUpdateInput, RouteStopUncheckedUpdateInput>
    /**
     * Choose, which RouteStop to update.
     */
    where: RouteStopWhereUniqueInput
  }

  /**
   * RouteStop updateMany
   */
  export type RouteStopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RouteStops.
     */
    data: XOR<RouteStopUpdateManyMutationInput, RouteStopUncheckedUpdateManyInput>
    /**
     * Filter which RouteStops to update
     */
    where?: RouteStopWhereInput
    /**
     * Limit how many RouteStops to update.
     */
    limit?: number
  }

  /**
   * RouteStop updateManyAndReturn
   */
  export type RouteStopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * The data used to update RouteStops.
     */
    data: XOR<RouteStopUpdateManyMutationInput, RouteStopUncheckedUpdateManyInput>
    /**
     * Filter which RouteStops to update
     */
    where?: RouteStopWhereInput
    /**
     * Limit how many RouteStops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RouteStop upsert
   */
  export type RouteStopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * The filter to search for the RouteStop to update in case it exists.
     */
    where: RouteStopWhereUniqueInput
    /**
     * In case the RouteStop found by the `where` argument doesn't exist, create a new RouteStop with this data.
     */
    create: XOR<RouteStopCreateInput, RouteStopUncheckedCreateInput>
    /**
     * In case the RouteStop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RouteStopUpdateInput, RouteStopUncheckedUpdateInput>
  }

  /**
   * RouteStop delete
   */
  export type RouteStopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
    /**
     * Filter which RouteStop to delete.
     */
    where: RouteStopWhereUniqueInput
  }

  /**
   * RouteStop deleteMany
   */
  export type RouteStopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RouteStops to delete
     */
    where?: RouteStopWhereInput
    /**
     * Limit how many RouteStops to delete.
     */
    limit?: number
  }

  /**
   * RouteStop without action
   */
  export type RouteStopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RouteStop
     */
    select?: RouteStopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RouteStop
     */
    omit?: RouteStopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RouteStopInclude<ExtArgs> | null
  }


  /**
   * Model Feedback
   */

  export type AggregateFeedback = {
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  export type FeedbackAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    busId: number | null
    driverId: number | null
    rating: number | null
  }

  export type FeedbackSumAggregateOutputType = {
    id: number | null
    userId: number | null
    busId: number | null
    driverId: number | null
    rating: number | null
  }

  export type FeedbackMinAggregateOutputType = {
    id: number | null
    userId: number | null
    busId: number | null
    driverId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type FeedbackMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    busId: number | null
    driverId: number | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type FeedbackCountAggregateOutputType = {
    id: number
    userId: number
    busId: number
    driverId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type FeedbackAvgAggregateInputType = {
    id?: true
    userId?: true
    busId?: true
    driverId?: true
    rating?: true
  }

  export type FeedbackSumAggregateInputType = {
    id?: true
    userId?: true
    busId?: true
    driverId?: true
    rating?: true
  }

  export type FeedbackMinAggregateInputType = {
    id?: true
    userId?: true
    busId?: true
    driverId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type FeedbackMaxAggregateInputType = {
    id?: true
    userId?: true
    busId?: true
    driverId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type FeedbackCountAggregateInputType = {
    id?: true
    userId?: true
    busId?: true
    driverId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type FeedbackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedback to aggregate.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feedbacks
    **/
    _count?: true | FeedbackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedbackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedbackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedbackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedbackMaxAggregateInputType
  }

  export type GetFeedbackAggregateType<T extends FeedbackAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedback]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedback[P]>
      : GetScalarType<T[P], AggregateFeedback[P]>
  }




  export type FeedbackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeedbackWhereInput
    orderBy?: FeedbackOrderByWithAggregationInput | FeedbackOrderByWithAggregationInput[]
    by: FeedbackScalarFieldEnum[] | FeedbackScalarFieldEnum
    having?: FeedbackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedbackCountAggregateInputType | true
    _avg?: FeedbackAvgAggregateInputType
    _sum?: FeedbackSumAggregateInputType
    _min?: FeedbackMinAggregateInputType
    _max?: FeedbackMaxAggregateInputType
  }

  export type FeedbackGroupByOutputType = {
    id: number
    userId: number
    busId: number
    driverId: number
    rating: number
    comment: string
    createdAt: Date
    _count: FeedbackCountAggregateOutputType | null
    _avg: FeedbackAvgAggregateOutputType | null
    _sum: FeedbackSumAggregateOutputType | null
    _min: FeedbackMinAggregateOutputType | null
    _max: FeedbackMaxAggregateOutputType | null
  }

  type GetFeedbackGroupByPayload<T extends FeedbackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedbackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedbackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
            : GetScalarType<T[P], FeedbackGroupByOutputType[P]>
        }
      >
    >


  export type FeedbackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    busId?: boolean
    driverId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    busId?: boolean
    driverId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    busId?: boolean
    driverId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    bus?: boolean | BusDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["feedback"]>

  export type FeedbackSelectScalar = {
    id?: boolean
    userId?: boolean
    busId?: boolean
    driverId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type FeedbackOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "busId" | "driverId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["feedback"]>
  export type FeedbackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type FeedbackIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bus?: boolean | BusDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $FeedbackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Feedback"
    objects: {
      bus: Prisma.$BusPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      busId: number
      driverId: number
      rating: number
      comment: string
      createdAt: Date
    }, ExtArgs["result"]["feedback"]>
    composites: {}
  }

  type FeedbackGetPayload<S extends boolean | null | undefined | FeedbackDefaultArgs> = $Result.GetResult<Prisma.$FeedbackPayload, S>

  type FeedbackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FeedbackFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FeedbackCountAggregateInputType | true
    }

  export interface FeedbackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feedback'], meta: { name: 'Feedback' } }
    /**
     * Find zero or one Feedback that matches the filter.
     * @param {FeedbackFindUniqueArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FeedbackFindUniqueArgs>(args: SelectSubset<T, FeedbackFindUniqueArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Feedback that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FeedbackFindUniqueOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FeedbackFindUniqueOrThrowArgs>(args: SelectSubset<T, FeedbackFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FeedbackFindFirstArgs>(args?: SelectSubset<T, FeedbackFindFirstArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Feedback that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindFirstOrThrowArgs} args - Arguments to find a Feedback
     * @example
     * // Get one Feedback
     * const feedback = await prisma.feedback.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FeedbackFindFirstOrThrowArgs>(args?: SelectSubset<T, FeedbackFindFirstOrThrowArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Feedbacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feedbacks
     * const feedbacks = await prisma.feedback.findMany()
     * 
     * // Get first 10 Feedbacks
     * const feedbacks = await prisma.feedback.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedbackWithIdOnly = await prisma.feedback.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FeedbackFindManyArgs>(args?: SelectSubset<T, FeedbackFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Feedback.
     * @param {FeedbackCreateArgs} args - Arguments to create a Feedback.
     * @example
     * // Create one Feedback
     * const Feedback = await prisma.feedback.create({
     *   data: {
     *     // ... data to create a Feedback
     *   }
     * })
     * 
     */
    create<T extends FeedbackCreateArgs>(args: SelectSubset<T, FeedbackCreateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Feedbacks.
     * @param {FeedbackCreateManyArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FeedbackCreateManyArgs>(args?: SelectSubset<T, FeedbackCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Feedbacks and returns the data saved in the database.
     * @param {FeedbackCreateManyAndReturnArgs} args - Arguments to create many Feedbacks.
     * @example
     * // Create many Feedbacks
     * const feedback = await prisma.feedback.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FeedbackCreateManyAndReturnArgs>(args?: SelectSubset<T, FeedbackCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Feedback.
     * @param {FeedbackDeleteArgs} args - Arguments to delete one Feedback.
     * @example
     * // Delete one Feedback
     * const Feedback = await prisma.feedback.delete({
     *   where: {
     *     // ... filter to delete one Feedback
     *   }
     * })
     * 
     */
    delete<T extends FeedbackDeleteArgs>(args: SelectSubset<T, FeedbackDeleteArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Feedback.
     * @param {FeedbackUpdateArgs} args - Arguments to update one Feedback.
     * @example
     * // Update one Feedback
     * const feedback = await prisma.feedback.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FeedbackUpdateArgs>(args: SelectSubset<T, FeedbackUpdateArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Feedbacks.
     * @param {FeedbackDeleteManyArgs} args - Arguments to filter Feedbacks to delete.
     * @example
     * // Delete a few Feedbacks
     * const { count } = await prisma.feedback.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FeedbackDeleteManyArgs>(args?: SelectSubset<T, FeedbackDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FeedbackUpdateManyArgs>(args: SelectSubset<T, FeedbackUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feedbacks and returns the data updated in the database.
     * @param {FeedbackUpdateManyAndReturnArgs} args - Arguments to update many Feedbacks.
     * @example
     * // Update many Feedbacks
     * const feedback = await prisma.feedback.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Feedbacks and only return the `id`
     * const feedbackWithIdOnly = await prisma.feedback.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FeedbackUpdateManyAndReturnArgs>(args: SelectSubset<T, FeedbackUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Feedback.
     * @param {FeedbackUpsertArgs} args - Arguments to update or create a Feedback.
     * @example
     * // Update or create a Feedback
     * const feedback = await prisma.feedback.upsert({
     *   create: {
     *     // ... data to create a Feedback
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feedback we want to update
     *   }
     * })
     */
    upsert<T extends FeedbackUpsertArgs>(args: SelectSubset<T, FeedbackUpsertArgs<ExtArgs>>): Prisma__FeedbackClient<$Result.GetResult<Prisma.$FeedbackPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Feedbacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackCountArgs} args - Arguments to filter Feedbacks to count.
     * @example
     * // Count the number of Feedbacks
     * const count = await prisma.feedback.count({
     *   where: {
     *     // ... the filter for the Feedbacks we want to count
     *   }
     * })
    **/
    count<T extends FeedbackCountArgs>(
      args?: Subset<T, FeedbackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedbackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeedbackAggregateArgs>(args: Subset<T, FeedbackAggregateArgs>): Prisma.PrismaPromise<GetFeedbackAggregateType<T>>

    /**
     * Group by Feedback.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedbackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeedbackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedbackGroupByArgs['orderBy'] }
        : { orderBy?: FeedbackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeedbackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedbackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feedback model
   */
  readonly fields: FeedbackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feedback.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedbackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bus<T extends BusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusDefaultArgs<ExtArgs>>): Prisma__BusClient<$Result.GetResult<Prisma.$BusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Feedback model
   */
  interface FeedbackFieldRefs {
    readonly id: FieldRef<"Feedback", 'Int'>
    readonly userId: FieldRef<"Feedback", 'Int'>
    readonly busId: FieldRef<"Feedback", 'Int'>
    readonly driverId: FieldRef<"Feedback", 'Int'>
    readonly rating: FieldRef<"Feedback", 'Int'>
    readonly comment: FieldRef<"Feedback", 'String'>
    readonly createdAt: FieldRef<"Feedback", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Feedback findUnique
   */
  export type FeedbackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findUniqueOrThrow
   */
  export type FeedbackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback findFirst
   */
  export type FeedbackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findFirstOrThrow
   */
  export type FeedbackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedback to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feedbacks.
     */
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback findMany
   */
  export type FeedbackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter, which Feedbacks to fetch.
     */
    where?: FeedbackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feedbacks to fetch.
     */
    orderBy?: FeedbackOrderByWithRelationInput | FeedbackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feedbacks.
     */
    cursor?: FeedbackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feedbacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feedbacks.
     */
    skip?: number
    distinct?: FeedbackScalarFieldEnum | FeedbackScalarFieldEnum[]
  }

  /**
   * Feedback create
   */
  export type FeedbackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to create a Feedback.
     */
    data: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
  }

  /**
   * Feedback createMany
   */
  export type FeedbackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
  }

  /**
   * Feedback createManyAndReturn
   */
  export type FeedbackCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to create many Feedbacks.
     */
    data: FeedbackCreateManyInput | FeedbackCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback update
   */
  export type FeedbackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The data needed to update a Feedback.
     */
    data: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
    /**
     * Choose, which Feedback to update.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback updateMany
   */
  export type FeedbackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
  }

  /**
   * Feedback updateManyAndReturn
   */
  export type FeedbackUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * The data used to update Feedbacks.
     */
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyInput>
    /**
     * Filter which Feedbacks to update
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Feedback upsert
   */
  export type FeedbackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * The filter to search for the Feedback to update in case it exists.
     */
    where: FeedbackWhereUniqueInput
    /**
     * In case the Feedback found by the `where` argument doesn't exist, create a new Feedback with this data.
     */
    create: XOR<FeedbackCreateInput, FeedbackUncheckedCreateInput>
    /**
     * In case the Feedback was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedbackUpdateInput, FeedbackUncheckedUpdateInput>
  }

  /**
   * Feedback delete
   */
  export type FeedbackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
    /**
     * Filter which Feedback to delete.
     */
    where: FeedbackWhereUniqueInput
  }

  /**
   * Feedback deleteMany
   */
  export type FeedbackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feedbacks to delete
     */
    where?: FeedbackWhereInput
    /**
     * Limit how many Feedbacks to delete.
     */
    limit?: number
  }

  /**
   * Feedback without action
   */
  export type FeedbackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feedback
     */
    select?: FeedbackSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Feedback
     */
    omit?: FeedbackOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FeedbackInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    driverId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    driverId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    driverId: number | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    driverId: number | null
    title: string | null
    message: string | null
    read: boolean | null
    createdAt: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    driverId: number
    title: number
    message: number
    read: number
    createdAt: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
    driverId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
    driverId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    driverId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    driverId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    driverId?: true
    title?: true
    message?: true
    read?: true
    createdAt?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    userId: number
    driverId: number
    title: string
    message: string
    read: boolean
    createdAt: Date
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    driverId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    driverId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    driverId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    driverId?: boolean
    title?: boolean
    message?: boolean
    read?: boolean
    createdAt?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "driverId" | "title" | "message" | "read" | "createdAt", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    driver?: boolean | DriverDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      driver: Prisma.$DriverPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      driverId: number
      title: string
      message: string
      read: boolean
      createdAt: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    driver<T extends DriverDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DriverDefaultArgs<ExtArgs>>): Prisma__DriverClient<$Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly driverId: FieldRef<"Notification", 'Int'>
    readonly title: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly read: FieldRef<"Notification", 'Boolean'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    number: 'number',
    password: 'password',
    disability: 'disability',
    url_foto_de_perfil: 'url_foto_de_perfil',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DriverScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    licenseNumber: 'licenseNumber',
    url_foto_de_perfil: 'url_foto_de_perfil',
    experienceTime: 'experienceTime',
    effectiveDate: 'effectiveDate',
    status: 'status',
    currentLatitude: 'currentLatitude',
    currentLongitude: 'currentLongitude',
    lastLogin: 'lastLogin',
    deviceToken: 'deviceToken',
    isVerified: 'isVerified',
    rating: 'rating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum]


  export const BusScalarFieldEnum: {
    id: 'id',
    matricula: 'matricula',
    nia: 'nia',
    driverId: 'driverId',
    routeId: 'routeId',
    status: 'status',
    capacity: 'capacity',
    currentLoad: 'currentLoad',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BusScalarFieldEnum = (typeof BusScalarFieldEnum)[keyof typeof BusScalarFieldEnum]


  export const TravelScalarFieldEnum: {
    id: 'id',
    routeId: 'routeId',
    driverId: 'driverId',
    busId: 'busId',
    profit: 'profit',
    arrivalTime: 'arrivalTime',
    departureTime: 'departureTime',
    createdAt: 'createdAt'
  };

  export type TravelScalarFieldEnum = (typeof TravelScalarFieldEnum)[keyof typeof TravelScalarFieldEnum]


  export const RouteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    origin: 'origin',
    originLatitude: 'originLatitude',
    originLongitude: 'originLongitude',
    destination: 'destination',
    destinationLatitude: 'destinationLatitude',
    destinationLongitude: 'destinationLongitude',
    status: 'status'
  };

  export type RouteScalarFieldEnum = (typeof RouteScalarFieldEnum)[keyof typeof RouteScalarFieldEnum]


  export const RouteScheduleScalarFieldEnum: {
    id: 'id',
    routeId: 'routeId',
    departureLocation: 'departureLocation',
    arrivalLocation: 'arrivalLocation',
    departureTime: 'departureTime',
    arrivalTime: 'arrivalTime',
    estimatedDurationMinutes: 'estimatedDurationMinutes',
    status: 'status',
    distanceKM: 'distanceKM',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RouteScheduleScalarFieldEnum = (typeof RouteScheduleScalarFieldEnum)[keyof typeof RouteScheduleScalarFieldEnum]


  export const StopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    latitude: 'latitude',
    longitude: 'longitude'
  };

  export type StopScalarFieldEnum = (typeof StopScalarFieldEnum)[keyof typeof StopScalarFieldEnum]


  export const RouteStopScalarFieldEnum: {
    id: 'id',
    routeId: 'routeId',
    stopId: 'stopId',
    order: 'order'
  };

  export type RouteStopScalarFieldEnum = (typeof RouteStopScalarFieldEnum)[keyof typeof RouteStopScalarFieldEnum]


  export const FeedbackScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    busId: 'busId',
    driverId: 'driverId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type FeedbackScalarFieldEnum = (typeof FeedbackScalarFieldEnum)[keyof typeof FeedbackScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    driverId: 'driverId',
    title: 'title',
    message: 'message',
    read: 'read',
    createdAt: 'createdAt'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    number?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    disability?: StringNullableFilter<"User"> | string | null
    url_foto_de_perfil?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    feedbacks?: FeedbackListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    number?: SortOrder
    password?: SortOrder
    disability?: SortOrderInput | SortOrder
    url_foto_de_perfil?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    feedbacks?: FeedbackOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    number?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    disability?: StringNullableFilter<"User"> | string | null
    url_foto_de_perfil?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    feedbacks?: FeedbackListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email" | "number">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    number?: SortOrder
    password?: SortOrder
    disability?: SortOrderInput | SortOrder
    url_foto_de_perfil?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    number?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    disability?: StringNullableWithAggregatesFilter<"User"> | string | null
    url_foto_de_perfil?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type DriverWhereInput = {
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    id?: IntFilter<"Driver"> | number
    name?: StringFilter<"Driver"> | string
    email?: StringFilter<"Driver"> | string
    phone?: StringFilter<"Driver"> | string
    password?: StringFilter<"Driver"> | string
    licenseNumber?: StringFilter<"Driver"> | string
    url_foto_de_perfil?: StringNullableFilter<"Driver"> | string | null
    experienceTime?: IntFilter<"Driver"> | number
    effectiveDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    status?: StringFilter<"Driver"> | string
    currentLatitude?: FloatNullableFilter<"Driver"> | number | null
    currentLongitude?: FloatNullableFilter<"Driver"> | number | null
    lastLogin?: DateTimeNullableFilter<"Driver"> | Date | string | null
    deviceToken?: StringNullableFilter<"Driver"> | string | null
    isVerified?: BoolFilter<"Driver"> | boolean
    rating?: FloatFilter<"Driver"> | number
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    assignedBus?: XOR<BusNullableScalarRelationFilter, BusWhereInput> | null
    travels?: TravelListRelationFilter
    feedbacks?: FeedbackListRelationFilter
    notifications?: NotificationListRelationFilter
  }

  export type DriverOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    licenseNumber?: SortOrder
    url_foto_de_perfil?: SortOrderInput | SortOrder
    experienceTime?: SortOrder
    effectiveDate?: SortOrderInput | SortOrder
    status?: SortOrder
    currentLatitude?: SortOrderInput | SortOrder
    currentLongitude?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    deviceToken?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedBus?: BusOrderByWithRelationInput
    travels?: TravelOrderByRelationAggregateInput
    feedbacks?: FeedbackOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
  }

  export type DriverWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    phone?: string
    licenseNumber?: string
    AND?: DriverWhereInput | DriverWhereInput[]
    OR?: DriverWhereInput[]
    NOT?: DriverWhereInput | DriverWhereInput[]
    name?: StringFilter<"Driver"> | string
    password?: StringFilter<"Driver"> | string
    url_foto_de_perfil?: StringNullableFilter<"Driver"> | string | null
    experienceTime?: IntFilter<"Driver"> | number
    effectiveDate?: DateTimeNullableFilter<"Driver"> | Date | string | null
    status?: StringFilter<"Driver"> | string
    currentLatitude?: FloatNullableFilter<"Driver"> | number | null
    currentLongitude?: FloatNullableFilter<"Driver"> | number | null
    lastLogin?: DateTimeNullableFilter<"Driver"> | Date | string | null
    deviceToken?: StringNullableFilter<"Driver"> | string | null
    isVerified?: BoolFilter<"Driver"> | boolean
    rating?: FloatFilter<"Driver"> | number
    createdAt?: DateTimeFilter<"Driver"> | Date | string
    updatedAt?: DateTimeFilter<"Driver"> | Date | string
    assignedBus?: XOR<BusNullableScalarRelationFilter, BusWhereInput> | null
    travels?: TravelListRelationFilter
    feedbacks?: FeedbackListRelationFilter
    notifications?: NotificationListRelationFilter
  }, "id" | "email" | "phone" | "licenseNumber">

  export type DriverOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    licenseNumber?: SortOrder
    url_foto_de_perfil?: SortOrderInput | SortOrder
    experienceTime?: SortOrder
    effectiveDate?: SortOrderInput | SortOrder
    status?: SortOrder
    currentLatitude?: SortOrderInput | SortOrder
    currentLongitude?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    deviceToken?: SortOrderInput | SortOrder
    isVerified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DriverCountOrderByAggregateInput
    _avg?: DriverAvgOrderByAggregateInput
    _max?: DriverMaxOrderByAggregateInput
    _min?: DriverMinOrderByAggregateInput
    _sum?: DriverSumOrderByAggregateInput
  }

  export type DriverScalarWhereWithAggregatesInput = {
    AND?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    OR?: DriverScalarWhereWithAggregatesInput[]
    NOT?: DriverScalarWhereWithAggregatesInput | DriverScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Driver"> | number
    name?: StringWithAggregatesFilter<"Driver"> | string
    email?: StringWithAggregatesFilter<"Driver"> | string
    phone?: StringWithAggregatesFilter<"Driver"> | string
    password?: StringWithAggregatesFilter<"Driver"> | string
    licenseNumber?: StringWithAggregatesFilter<"Driver"> | string
    url_foto_de_perfil?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    experienceTime?: IntWithAggregatesFilter<"Driver"> | number
    effectiveDate?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    status?: StringWithAggregatesFilter<"Driver"> | string
    currentLatitude?: FloatNullableWithAggregatesFilter<"Driver"> | number | null
    currentLongitude?: FloatNullableWithAggregatesFilter<"Driver"> | number | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"Driver"> | Date | string | null
    deviceToken?: StringNullableWithAggregatesFilter<"Driver"> | string | null
    isVerified?: BoolWithAggregatesFilter<"Driver"> | boolean
    rating?: FloatWithAggregatesFilter<"Driver"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Driver"> | Date | string
  }

  export type BusWhereInput = {
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    id?: IntFilter<"Bus"> | number
    matricula?: StringFilter<"Bus"> | string
    nia?: StringFilter<"Bus"> | string
    driverId?: IntNullableFilter<"Bus"> | number | null
    routeId?: IntFilter<"Bus"> | number
    status?: StringFilter<"Bus"> | string
    capacity?: IntFilter<"Bus"> | number
    currentLoad?: IntFilter<"Bus"> | number
    createdAt?: DateTimeFilter<"Bus"> | Date | string
    updatedAt?: DateTimeFilter<"Bus"> | Date | string
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    travels?: TravelListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }

  export type BusOrderByWithRelationInput = {
    id?: SortOrder
    matricula?: SortOrder
    nia?: SortOrder
    driverId?: SortOrderInput | SortOrder
    routeId?: SortOrder
    status?: SortOrder
    capacity?: SortOrder
    currentLoad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    driver?: DriverOrderByWithRelationInput
    route?: RouteOrderByWithRelationInput
    travels?: TravelOrderByRelationAggregateInput
    feedbacks?: FeedbackOrderByRelationAggregateInput
  }

  export type BusWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    matricula?: string
    nia?: string
    driverId?: number
    AND?: BusWhereInput | BusWhereInput[]
    OR?: BusWhereInput[]
    NOT?: BusWhereInput | BusWhereInput[]
    routeId?: IntFilter<"Bus"> | number
    status?: StringFilter<"Bus"> | string
    capacity?: IntFilter<"Bus"> | number
    currentLoad?: IntFilter<"Bus"> | number
    createdAt?: DateTimeFilter<"Bus"> | Date | string
    updatedAt?: DateTimeFilter<"Bus"> | Date | string
    driver?: XOR<DriverNullableScalarRelationFilter, DriverWhereInput> | null
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    travels?: TravelListRelationFilter
    feedbacks?: FeedbackListRelationFilter
  }, "id" | "matricula" | "nia" | "driverId">

  export type BusOrderByWithAggregationInput = {
    id?: SortOrder
    matricula?: SortOrder
    nia?: SortOrder
    driverId?: SortOrderInput | SortOrder
    routeId?: SortOrder
    status?: SortOrder
    capacity?: SortOrder
    currentLoad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BusCountOrderByAggregateInput
    _avg?: BusAvgOrderByAggregateInput
    _max?: BusMaxOrderByAggregateInput
    _min?: BusMinOrderByAggregateInput
    _sum?: BusSumOrderByAggregateInput
  }

  export type BusScalarWhereWithAggregatesInput = {
    AND?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    OR?: BusScalarWhereWithAggregatesInput[]
    NOT?: BusScalarWhereWithAggregatesInput | BusScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bus"> | number
    matricula?: StringWithAggregatesFilter<"Bus"> | string
    nia?: StringWithAggregatesFilter<"Bus"> | string
    driverId?: IntNullableWithAggregatesFilter<"Bus"> | number | null
    routeId?: IntWithAggregatesFilter<"Bus"> | number
    status?: StringWithAggregatesFilter<"Bus"> | string
    capacity?: IntWithAggregatesFilter<"Bus"> | number
    currentLoad?: IntWithAggregatesFilter<"Bus"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Bus"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bus"> | Date | string
  }

  export type TravelWhereInput = {
    AND?: TravelWhereInput | TravelWhereInput[]
    OR?: TravelWhereInput[]
    NOT?: TravelWhereInput | TravelWhereInput[]
    id?: IntFilter<"Travel"> | number
    routeId?: IntFilter<"Travel"> | number
    driverId?: IntFilter<"Travel"> | number
    busId?: IntFilter<"Travel"> | number
    profit?: IntFilter<"Travel"> | number
    arrivalTime?: DateTimeNullableFilter<"Travel"> | Date | string | null
    departureTime?: DateTimeNullableFilter<"Travel"> | Date | string | null
    createdAt?: DateTimeFilter<"Travel"> | Date | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
  }

  export type TravelOrderByWithRelationInput = {
    id?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
    busId?: SortOrder
    profit?: SortOrder
    arrivalTime?: SortOrderInput | SortOrder
    departureTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    route?: RouteOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
    bus?: BusOrderByWithRelationInput
  }

  export type TravelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TravelWhereInput | TravelWhereInput[]
    OR?: TravelWhereInput[]
    NOT?: TravelWhereInput | TravelWhereInput[]
    routeId?: IntFilter<"Travel"> | number
    driverId?: IntFilter<"Travel"> | number
    busId?: IntFilter<"Travel"> | number
    profit?: IntFilter<"Travel"> | number
    arrivalTime?: DateTimeNullableFilter<"Travel"> | Date | string | null
    departureTime?: DateTimeNullableFilter<"Travel"> | Date | string | null
    createdAt?: DateTimeFilter<"Travel"> | Date | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
  }, "id">

  export type TravelOrderByWithAggregationInput = {
    id?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
    busId?: SortOrder
    profit?: SortOrder
    arrivalTime?: SortOrderInput | SortOrder
    departureTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TravelCountOrderByAggregateInput
    _avg?: TravelAvgOrderByAggregateInput
    _max?: TravelMaxOrderByAggregateInput
    _min?: TravelMinOrderByAggregateInput
    _sum?: TravelSumOrderByAggregateInput
  }

  export type TravelScalarWhereWithAggregatesInput = {
    AND?: TravelScalarWhereWithAggregatesInput | TravelScalarWhereWithAggregatesInput[]
    OR?: TravelScalarWhereWithAggregatesInput[]
    NOT?: TravelScalarWhereWithAggregatesInput | TravelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Travel"> | number
    routeId?: IntWithAggregatesFilter<"Travel"> | number
    driverId?: IntWithAggregatesFilter<"Travel"> | number
    busId?: IntWithAggregatesFilter<"Travel"> | number
    profit?: IntWithAggregatesFilter<"Travel"> | number
    arrivalTime?: DateTimeNullableWithAggregatesFilter<"Travel"> | Date | string | null
    departureTime?: DateTimeNullableWithAggregatesFilter<"Travel"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Travel"> | Date | string
  }

  export type RouteWhereInput = {
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    id?: IntFilter<"Route"> | number
    name?: StringFilter<"Route"> | string
    origin?: StringFilter<"Route"> | string
    originLatitude?: FloatNullableFilter<"Route"> | number | null
    originLongitude?: FloatNullableFilter<"Route"> | number | null
    destination?: StringFilter<"Route"> | string
    destinationLatitude?: FloatNullableFilter<"Route"> | number | null
    destinationLongitude?: FloatNullableFilter<"Route"> | number | null
    status?: StringFilter<"Route"> | string
    buses?: BusListRelationFilter
    routeStops?: RouteStopListRelationFilter
    travels?: TravelListRelationFilter
    schedules?: RouteScheduleListRelationFilter
  }

  export type RouteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    origin?: SortOrder
    originLatitude?: SortOrderInput | SortOrder
    originLongitude?: SortOrderInput | SortOrder
    destination?: SortOrder
    destinationLatitude?: SortOrderInput | SortOrder
    destinationLongitude?: SortOrderInput | SortOrder
    status?: SortOrder
    buses?: BusOrderByRelationAggregateInput
    routeStops?: RouteStopOrderByRelationAggregateInput
    travels?: TravelOrderByRelationAggregateInput
    schedules?: RouteScheduleOrderByRelationAggregateInput
  }

  export type RouteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteWhereInput | RouteWhereInput[]
    OR?: RouteWhereInput[]
    NOT?: RouteWhereInput | RouteWhereInput[]
    name?: StringFilter<"Route"> | string
    origin?: StringFilter<"Route"> | string
    originLatitude?: FloatNullableFilter<"Route"> | number | null
    originLongitude?: FloatNullableFilter<"Route"> | number | null
    destination?: StringFilter<"Route"> | string
    destinationLatitude?: FloatNullableFilter<"Route"> | number | null
    destinationLongitude?: FloatNullableFilter<"Route"> | number | null
    status?: StringFilter<"Route"> | string
    buses?: BusListRelationFilter
    routeStops?: RouteStopListRelationFilter
    travels?: TravelListRelationFilter
    schedules?: RouteScheduleListRelationFilter
  }, "id">

  export type RouteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    origin?: SortOrder
    originLatitude?: SortOrderInput | SortOrder
    originLongitude?: SortOrderInput | SortOrder
    destination?: SortOrder
    destinationLatitude?: SortOrderInput | SortOrder
    destinationLongitude?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: RouteCountOrderByAggregateInput
    _avg?: RouteAvgOrderByAggregateInput
    _max?: RouteMaxOrderByAggregateInput
    _min?: RouteMinOrderByAggregateInput
    _sum?: RouteSumOrderByAggregateInput
  }

  export type RouteScalarWhereWithAggregatesInput = {
    AND?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    OR?: RouteScalarWhereWithAggregatesInput[]
    NOT?: RouteScalarWhereWithAggregatesInput | RouteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Route"> | number
    name?: StringWithAggregatesFilter<"Route"> | string
    origin?: StringWithAggregatesFilter<"Route"> | string
    originLatitude?: FloatNullableWithAggregatesFilter<"Route"> | number | null
    originLongitude?: FloatNullableWithAggregatesFilter<"Route"> | number | null
    destination?: StringWithAggregatesFilter<"Route"> | string
    destinationLatitude?: FloatNullableWithAggregatesFilter<"Route"> | number | null
    destinationLongitude?: FloatNullableWithAggregatesFilter<"Route"> | number | null
    status?: StringWithAggregatesFilter<"Route"> | string
  }

  export type RouteScheduleWhereInput = {
    AND?: RouteScheduleWhereInput | RouteScheduleWhereInput[]
    OR?: RouteScheduleWhereInput[]
    NOT?: RouteScheduleWhereInput | RouteScheduleWhereInput[]
    id?: IntFilter<"RouteSchedule"> | number
    routeId?: IntFilter<"RouteSchedule"> | number
    departureLocation?: StringFilter<"RouteSchedule"> | string
    arrivalLocation?: StringFilter<"RouteSchedule"> | string
    departureTime?: DateTimeFilter<"RouteSchedule"> | Date | string
    arrivalTime?: DateTimeFilter<"RouteSchedule"> | Date | string
    estimatedDurationMinutes?: IntFilter<"RouteSchedule"> | number
    status?: StringFilter<"RouteSchedule"> | string
    distanceKM?: DecimalFilter<"RouteSchedule"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RouteSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"RouteSchedule"> | Date | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }

  export type RouteScheduleOrderByWithRelationInput = {
    id?: SortOrder
    routeId?: SortOrder
    departureLocation?: SortOrder
    arrivalLocation?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    estimatedDurationMinutes?: SortOrder
    status?: SortOrder
    distanceKM?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    route?: RouteOrderByWithRelationInput
  }

  export type RouteScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteScheduleWhereInput | RouteScheduleWhereInput[]
    OR?: RouteScheduleWhereInput[]
    NOT?: RouteScheduleWhereInput | RouteScheduleWhereInput[]
    routeId?: IntFilter<"RouteSchedule"> | number
    departureLocation?: StringFilter<"RouteSchedule"> | string
    arrivalLocation?: StringFilter<"RouteSchedule"> | string
    departureTime?: DateTimeFilter<"RouteSchedule"> | Date | string
    arrivalTime?: DateTimeFilter<"RouteSchedule"> | Date | string
    estimatedDurationMinutes?: IntFilter<"RouteSchedule"> | number
    status?: StringFilter<"RouteSchedule"> | string
    distanceKM?: DecimalFilter<"RouteSchedule"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RouteSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"RouteSchedule"> | Date | string
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
  }, "id">

  export type RouteScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    routeId?: SortOrder
    departureLocation?: SortOrder
    arrivalLocation?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    estimatedDurationMinutes?: SortOrder
    status?: SortOrder
    distanceKM?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RouteScheduleCountOrderByAggregateInput
    _avg?: RouteScheduleAvgOrderByAggregateInput
    _max?: RouteScheduleMaxOrderByAggregateInput
    _min?: RouteScheduleMinOrderByAggregateInput
    _sum?: RouteScheduleSumOrderByAggregateInput
  }

  export type RouteScheduleScalarWhereWithAggregatesInput = {
    AND?: RouteScheduleScalarWhereWithAggregatesInput | RouteScheduleScalarWhereWithAggregatesInput[]
    OR?: RouteScheduleScalarWhereWithAggregatesInput[]
    NOT?: RouteScheduleScalarWhereWithAggregatesInput | RouteScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RouteSchedule"> | number
    routeId?: IntWithAggregatesFilter<"RouteSchedule"> | number
    departureLocation?: StringWithAggregatesFilter<"RouteSchedule"> | string
    arrivalLocation?: StringWithAggregatesFilter<"RouteSchedule"> | string
    departureTime?: DateTimeWithAggregatesFilter<"RouteSchedule"> | Date | string
    arrivalTime?: DateTimeWithAggregatesFilter<"RouteSchedule"> | Date | string
    estimatedDurationMinutes?: IntWithAggregatesFilter<"RouteSchedule"> | number
    status?: StringWithAggregatesFilter<"RouteSchedule"> | string
    distanceKM?: DecimalWithAggregatesFilter<"RouteSchedule"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeWithAggregatesFilter<"RouteSchedule"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RouteSchedule"> | Date | string
  }

  export type StopWhereInput = {
    AND?: StopWhereInput | StopWhereInput[]
    OR?: StopWhereInput[]
    NOT?: StopWhereInput | StopWhereInput[]
    id?: IntFilter<"Stop"> | number
    name?: StringFilter<"Stop"> | string
    latitude?: FloatNullableFilter<"Stop"> | number | null
    longitude?: FloatNullableFilter<"Stop"> | number | null
    routeStops?: RouteStopListRelationFilter
  }

  export type StopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    routeStops?: RouteStopOrderByRelationAggregateInput
  }

  export type StopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StopWhereInput | StopWhereInput[]
    OR?: StopWhereInput[]
    NOT?: StopWhereInput | StopWhereInput[]
    name?: StringFilter<"Stop"> | string
    latitude?: FloatNullableFilter<"Stop"> | number | null
    longitude?: FloatNullableFilter<"Stop"> | number | null
    routeStops?: RouteStopListRelationFilter
  }, "id">

  export type StopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    _count?: StopCountOrderByAggregateInput
    _avg?: StopAvgOrderByAggregateInput
    _max?: StopMaxOrderByAggregateInput
    _min?: StopMinOrderByAggregateInput
    _sum?: StopSumOrderByAggregateInput
  }

  export type StopScalarWhereWithAggregatesInput = {
    AND?: StopScalarWhereWithAggregatesInput | StopScalarWhereWithAggregatesInput[]
    OR?: StopScalarWhereWithAggregatesInput[]
    NOT?: StopScalarWhereWithAggregatesInput | StopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Stop"> | number
    name?: StringWithAggregatesFilter<"Stop"> | string
    latitude?: FloatNullableWithAggregatesFilter<"Stop"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Stop"> | number | null
  }

  export type RouteStopWhereInput = {
    AND?: RouteStopWhereInput | RouteStopWhereInput[]
    OR?: RouteStopWhereInput[]
    NOT?: RouteStopWhereInput | RouteStopWhereInput[]
    id?: IntFilter<"RouteStop"> | number
    routeId?: IntFilter<"RouteStop"> | number
    stopId?: IntFilter<"RouteStop"> | number
    order?: IntNullableFilter<"RouteStop"> | number | null
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    stop?: XOR<StopScalarRelationFilter, StopWhereInput>
  }

  export type RouteStopOrderByWithRelationInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopId?: SortOrder
    order?: SortOrderInput | SortOrder
    route?: RouteOrderByWithRelationInput
    stop?: StopOrderByWithRelationInput
  }

  export type RouteStopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RouteStopWhereInput | RouteStopWhereInput[]
    OR?: RouteStopWhereInput[]
    NOT?: RouteStopWhereInput | RouteStopWhereInput[]
    routeId?: IntFilter<"RouteStop"> | number
    stopId?: IntFilter<"RouteStop"> | number
    order?: IntNullableFilter<"RouteStop"> | number | null
    route?: XOR<RouteScalarRelationFilter, RouteWhereInput>
    stop?: XOR<StopScalarRelationFilter, StopWhereInput>
  }, "id">

  export type RouteStopOrderByWithAggregationInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopId?: SortOrder
    order?: SortOrderInput | SortOrder
    _count?: RouteStopCountOrderByAggregateInput
    _avg?: RouteStopAvgOrderByAggregateInput
    _max?: RouteStopMaxOrderByAggregateInput
    _min?: RouteStopMinOrderByAggregateInput
    _sum?: RouteStopSumOrderByAggregateInput
  }

  export type RouteStopScalarWhereWithAggregatesInput = {
    AND?: RouteStopScalarWhereWithAggregatesInput | RouteStopScalarWhereWithAggregatesInput[]
    OR?: RouteStopScalarWhereWithAggregatesInput[]
    NOT?: RouteStopScalarWhereWithAggregatesInput | RouteStopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RouteStop"> | number
    routeId?: IntWithAggregatesFilter<"RouteStop"> | number
    stopId?: IntWithAggregatesFilter<"RouteStop"> | number
    order?: IntNullableWithAggregatesFilter<"RouteStop"> | number | null
  }

  export type FeedbackWhereInput = {
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    id?: IntFilter<"Feedback"> | number
    userId?: IntFilter<"Feedback"> | number
    busId?: IntFilter<"Feedback"> | number
    driverId?: IntFilter<"Feedback"> | number
    rating?: IntFilter<"Feedback"> | number
    comment?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type FeedbackOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    busId?: SortOrder
    driverId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    bus?: BusOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
  }

  export type FeedbackWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: FeedbackWhereInput | FeedbackWhereInput[]
    OR?: FeedbackWhereInput[]
    NOT?: FeedbackWhereInput | FeedbackWhereInput[]
    userId?: IntFilter<"Feedback"> | number
    busId?: IntFilter<"Feedback"> | number
    driverId?: IntFilter<"Feedback"> | number
    rating?: IntFilter<"Feedback"> | number
    comment?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
    bus?: XOR<BusScalarRelationFilter, BusWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type FeedbackOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    busId?: SortOrder
    driverId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
    _count?: FeedbackCountOrderByAggregateInput
    _avg?: FeedbackAvgOrderByAggregateInput
    _max?: FeedbackMaxOrderByAggregateInput
    _min?: FeedbackMinOrderByAggregateInput
    _sum?: FeedbackSumOrderByAggregateInput
  }

  export type FeedbackScalarWhereWithAggregatesInput = {
    AND?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    OR?: FeedbackScalarWhereWithAggregatesInput[]
    NOT?: FeedbackScalarWhereWithAggregatesInput | FeedbackScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Feedback"> | number
    userId?: IntWithAggregatesFilter<"Feedback"> | number
    busId?: IntWithAggregatesFilter<"Feedback"> | number
    driverId?: IntWithAggregatesFilter<"Feedback"> | number
    rating?: IntWithAggregatesFilter<"Feedback"> | number
    comment?: StringWithAggregatesFilter<"Feedback"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Feedback"> | Date | string
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    driverId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    driverId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    driver?: DriverOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: IntFilter<"Notification"> | number
    driverId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    driver?: XOR<DriverScalarRelationFilter, DriverWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    driverId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    userId?: IntWithAggregatesFilter<"Notification"> | number
    driverId?: IntWithAggregatesFilter<"Notification"> | number
    title?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    read?: BoolWithAggregatesFilter<"Notification"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    number: string
    password: string
    disability?: string | null
    url_foto_de_perfil?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    number: string
    password: string
    disability?: string | null
    url_foto_de_perfil?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    number: string
    password: string
    disability?: string | null
    url_foto_de_perfil?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverCreateInput = {
    name: string
    email: string
    phone: string
    password: string
    licenseNumber: string
    url_foto_de_perfil?: string | null
    experienceTime: number
    effectiveDate?: Date | string | null
    status?: string
    currentLatitude?: number | null
    currentLongitude?: number | null
    lastLogin?: Date | string | null
    deviceToken?: string | null
    isVerified?: boolean
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedBus?: BusCreateNestedOneWithoutDriverInput
    travels?: TravelCreateNestedManyWithoutDriverInput
    feedbacks?: FeedbackCreateNestedManyWithoutDriverInput
    notifications?: NotificationCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    licenseNumber: string
    url_foto_de_perfil?: string | null
    experienceTime: number
    effectiveDate?: Date | string | null
    status?: string
    currentLatitude?: number | null
    currentLongitude?: number | null
    lastLogin?: Date | string | null
    deviceToken?: string | null
    isVerified?: boolean
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedBus?: BusUncheckedCreateNestedOneWithoutDriverInput
    travels?: TravelUncheckedCreateNestedManyWithoutDriverInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutDriverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    experienceTime?: IntFieldUpdateOperationsInput | number
    effectiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBus?: BusUpdateOneWithoutDriverNestedInput
    travels?: TravelUpdateManyWithoutDriverNestedInput
    feedbacks?: FeedbackUpdateManyWithoutDriverNestedInput
    notifications?: NotificationUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    experienceTime?: IntFieldUpdateOperationsInput | number
    effectiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBus?: BusUncheckedUpdateOneWithoutDriverNestedInput
    travels?: TravelUncheckedUpdateManyWithoutDriverNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutDriverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type DriverCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    licenseNumber: string
    url_foto_de_perfil?: string | null
    experienceTime: number
    effectiveDate?: Date | string | null
    status?: string
    currentLatitude?: number | null
    currentLongitude?: number | null
    lastLogin?: Date | string | null
    deviceToken?: string | null
    isVerified?: boolean
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DriverUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    experienceTime?: IntFieldUpdateOperationsInput | number
    effectiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DriverUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    experienceTime?: IntFieldUpdateOperationsInput | number
    effectiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusCreateInput = {
    matricula: string
    nia: string
    status?: string
    capacity: number
    currentLoad: number
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: DriverCreateNestedOneWithoutAssignedBusInput
    route: RouteCreateNestedOneWithoutBusesInput
    travels?: TravelCreateNestedManyWithoutBusInput
    feedbacks?: FeedbackCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateInput = {
    id?: number
    matricula: string
    nia: string
    driverId?: number | null
    routeId: number
    status?: string
    capacity: number
    currentLoad: number
    createdAt?: Date | string
    updatedAt?: Date | string
    travels?: TravelUncheckedCreateNestedManyWithoutBusInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusUpdateInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutAssignedBusNestedInput
    route?: RouteUpdateOneRequiredWithoutBusesNestedInput
    travels?: TravelUpdateManyWithoutBusNestedInput
    feedbacks?: FeedbackUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    routeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travels?: TravelUncheckedUpdateManyWithoutBusNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusCreateManyInput = {
    id?: number
    matricula: string
    nia: string
    driverId?: number | null
    routeId: number
    status?: string
    capacity: number
    currentLoad: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusUpdateManyMutationInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    routeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelCreateInput = {
    profit: number
    arrivalTime?: Date | string | null
    departureTime?: Date | string | null
    createdAt?: Date | string
    route: RouteCreateNestedOneWithoutTravelsInput
    driver: DriverCreateNestedOneWithoutTravelsInput
    bus: BusCreateNestedOneWithoutTravelsInput
  }

  export type TravelUncheckedCreateInput = {
    id?: number
    routeId: number
    driverId: number
    busId: number
    profit: number
    arrivalTime?: Date | string | null
    departureTime?: Date | string | null
    createdAt?: Date | string
  }

  export type TravelUpdateInput = {
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutTravelsNestedInput
    driver?: DriverUpdateOneRequiredWithoutTravelsNestedInput
    bus?: BusUpdateOneRequiredWithoutTravelsNestedInput
  }

  export type TravelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelCreateManyInput = {
    id?: number
    routeId: number
    driverId: number
    busId: number
    profit: number
    arrivalTime?: Date | string | null
    departureTime?: Date | string | null
    createdAt?: Date | string
  }

  export type TravelUpdateManyMutationInput = {
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteCreateInput = {
    name: string
    origin: string
    originLatitude?: number | null
    originLongitude?: number | null
    destination: string
    destinationLatitude?: number | null
    destinationLongitude?: number | null
    status?: string
    buses?: BusCreateNestedManyWithoutRouteInput
    routeStops?: RouteStopCreateNestedManyWithoutRouteInput
    travels?: TravelCreateNestedManyWithoutRouteInput
    schedules?: RouteScheduleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateInput = {
    id?: number
    name: string
    origin: string
    originLatitude?: number | null
    originLongitude?: number | null
    destination: string
    destinationLatitude?: number | null
    destinationLongitude?: number | null
    status?: string
    buses?: BusUncheckedCreateNestedManyWithoutRouteInput
    routeStops?: RouteStopUncheckedCreateNestedManyWithoutRouteInput
    travels?: TravelUncheckedCreateNestedManyWithoutRouteInput
    schedules?: RouteScheduleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    originLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    originLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buses?: BusUpdateManyWithoutRouteNestedInput
    routeStops?: RouteStopUpdateManyWithoutRouteNestedInput
    travels?: TravelUpdateManyWithoutRouteNestedInput
    schedules?: RouteScheduleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    originLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    originLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buses?: BusUncheckedUpdateManyWithoutRouteNestedInput
    routeStops?: RouteStopUncheckedUpdateManyWithoutRouteNestedInput
    travels?: TravelUncheckedUpdateManyWithoutRouteNestedInput
    schedules?: RouteScheduleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteCreateManyInput = {
    id?: number
    name: string
    origin: string
    originLatitude?: number | null
    originLongitude?: number | null
    destination: string
    destinationLatitude?: number | null
    destinationLongitude?: number | null
    status?: string
  }

  export type RouteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    originLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    originLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RouteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    originLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    originLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type RouteScheduleCreateInput = {
    departureLocation: string
    arrivalLocation: string
    departureTime: Date | string
    arrivalTime: Date | string
    estimatedDurationMinutes: number
    status: string
    distanceKM: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
    route: RouteCreateNestedOneWithoutSchedulesInput
  }

  export type RouteScheduleUncheckedCreateInput = {
    id?: number
    routeId: number
    departureLocation: string
    arrivalLocation: string
    departureTime: Date | string
    arrivalTime: Date | string
    estimatedDurationMinutes: number
    status: string
    distanceKM: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteScheduleUpdateInput = {
    departureLocation?: StringFieldUpdateOperationsInput | string
    arrivalLocation?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDurationMinutes?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    distanceKM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type RouteScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    departureLocation?: StringFieldUpdateOperationsInput | string
    arrivalLocation?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDurationMinutes?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    distanceKM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteScheduleCreateManyInput = {
    id?: number
    routeId: number
    departureLocation: string
    arrivalLocation: string
    departureTime: Date | string
    arrivalTime: Date | string
    estimatedDurationMinutes: number
    status: string
    distanceKM: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteScheduleUpdateManyMutationInput = {
    departureLocation?: StringFieldUpdateOperationsInput | string
    arrivalLocation?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDurationMinutes?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    distanceKM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    departureLocation?: StringFieldUpdateOperationsInput | string
    arrivalLocation?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDurationMinutes?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    distanceKM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StopCreateInput = {
    name: string
    latitude?: number | null
    longitude?: number | null
    routeStops?: RouteStopCreateNestedManyWithoutStopInput
  }

  export type StopUncheckedCreateInput = {
    id?: number
    name: string
    latitude?: number | null
    longitude?: number | null
    routeStops?: RouteStopUncheckedCreateNestedManyWithoutStopInput
  }

  export type StopUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    routeStops?: RouteStopUpdateManyWithoutStopNestedInput
  }

  export type StopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    routeStops?: RouteStopUncheckedUpdateManyWithoutStopNestedInput
  }

  export type StopCreateManyInput = {
    id?: number
    name: string
    latitude?: number | null
    longitude?: number | null
  }

  export type StopUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type RouteStopCreateInput = {
    order?: number | null
    route: RouteCreateNestedOneWithoutRouteStopsInput
    stop: StopCreateNestedOneWithoutRouteStopsInput
  }

  export type RouteStopUncheckedCreateInput = {
    id?: number
    routeId: number
    stopId: number
    order?: number | null
  }

  export type RouteStopUpdateInput = {
    order?: NullableIntFieldUpdateOperationsInput | number | null
    route?: RouteUpdateOneRequiredWithoutRouteStopsNestedInput
    stop?: StopUpdateOneRequiredWithoutRouteStopsNestedInput
  }

  export type RouteStopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    stopId?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RouteStopCreateManyInput = {
    id?: number
    routeId: number
    stopId: number
    order?: number | null
  }

  export type RouteStopUpdateManyMutationInput = {
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RouteStopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    stopId?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FeedbackCreateInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    bus: BusCreateNestedOneWithoutFeedbacksInput
    user: UserCreateNestedOneWithoutFeedbacksInput
    driver: DriverCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateInput = {
    id?: number
    userId: number
    busId: number
    driverId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type FeedbackUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutFeedbacksNestedInput
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
    driver?: DriverUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackCreateManyInput = {
    id?: number
    userId: number
    busId: number
    driverId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type FeedbackUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateInput = {
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
    driver: DriverCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    userId: number
    driverId: number
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    driver?: DriverUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: number
    userId: number
    driverId: number
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FeedbackListRelationFilter = {
    every?: FeedbackWhereInput
    some?: FeedbackWhereInput
    none?: FeedbackWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type FeedbackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    number?: SortOrder
    password?: SortOrder
    disability?: SortOrder
    url_foto_de_perfil?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    number?: SortOrder
    password?: SortOrder
    disability?: SortOrder
    url_foto_de_perfil?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    number?: SortOrder
    password?: SortOrder
    disability?: SortOrder
    url_foto_de_perfil?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type BusNullableScalarRelationFilter = {
    is?: BusWhereInput | null
    isNot?: BusWhereInput | null
  }

  export type TravelListRelationFilter = {
    every?: TravelWhereInput
    some?: TravelWhereInput
    none?: TravelWhereInput
  }

  export type TravelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DriverCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    licenseNumber?: SortOrder
    url_foto_de_perfil?: SortOrder
    experienceTime?: SortOrder
    effectiveDate?: SortOrder
    status?: SortOrder
    currentLatitude?: SortOrder
    currentLongitude?: SortOrder
    lastLogin?: SortOrder
    deviceToken?: SortOrder
    isVerified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverAvgOrderByAggregateInput = {
    id?: SortOrder
    experienceTime?: SortOrder
    currentLatitude?: SortOrder
    currentLongitude?: SortOrder
    rating?: SortOrder
  }

  export type DriverMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    licenseNumber?: SortOrder
    url_foto_de_perfil?: SortOrder
    experienceTime?: SortOrder
    effectiveDate?: SortOrder
    status?: SortOrder
    currentLatitude?: SortOrder
    currentLongitude?: SortOrder
    lastLogin?: SortOrder
    deviceToken?: SortOrder
    isVerified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    licenseNumber?: SortOrder
    url_foto_de_perfil?: SortOrder
    experienceTime?: SortOrder
    effectiveDate?: SortOrder
    status?: SortOrder
    currentLatitude?: SortOrder
    currentLongitude?: SortOrder
    lastLogin?: SortOrder
    deviceToken?: SortOrder
    isVerified?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DriverSumOrderByAggregateInput = {
    id?: SortOrder
    experienceTime?: SortOrder
    currentLatitude?: SortOrder
    currentLongitude?: SortOrder
    rating?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DriverNullableScalarRelationFilter = {
    is?: DriverWhereInput | null
    isNot?: DriverWhereInput | null
  }

  export type RouteScalarRelationFilter = {
    is?: RouteWhereInput
    isNot?: RouteWhereInput
  }

  export type BusCountOrderByAggregateInput = {
    id?: SortOrder
    matricula?: SortOrder
    nia?: SortOrder
    driverId?: SortOrder
    routeId?: SortOrder
    status?: SortOrder
    capacity?: SortOrder
    currentLoad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusAvgOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    routeId?: SortOrder
    capacity?: SortOrder
    currentLoad?: SortOrder
  }

  export type BusMaxOrderByAggregateInput = {
    id?: SortOrder
    matricula?: SortOrder
    nia?: SortOrder
    driverId?: SortOrder
    routeId?: SortOrder
    status?: SortOrder
    capacity?: SortOrder
    currentLoad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusMinOrderByAggregateInput = {
    id?: SortOrder
    matricula?: SortOrder
    nia?: SortOrder
    driverId?: SortOrder
    routeId?: SortOrder
    status?: SortOrder
    capacity?: SortOrder
    currentLoad?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BusSumOrderByAggregateInput = {
    id?: SortOrder
    driverId?: SortOrder
    routeId?: SortOrder
    capacity?: SortOrder
    currentLoad?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DriverScalarRelationFilter = {
    is?: DriverWhereInput
    isNot?: DriverWhereInput
  }

  export type BusScalarRelationFilter = {
    is?: BusWhereInput
    isNot?: BusWhereInput
  }

  export type TravelCountOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
    busId?: SortOrder
    profit?: SortOrder
    arrivalTime?: SortOrder
    departureTime?: SortOrder
    createdAt?: SortOrder
  }

  export type TravelAvgOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
    busId?: SortOrder
    profit?: SortOrder
  }

  export type TravelMaxOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
    busId?: SortOrder
    profit?: SortOrder
    arrivalTime?: SortOrder
    departureTime?: SortOrder
    createdAt?: SortOrder
  }

  export type TravelMinOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
    busId?: SortOrder
    profit?: SortOrder
    arrivalTime?: SortOrder
    departureTime?: SortOrder
    createdAt?: SortOrder
  }

  export type TravelSumOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    driverId?: SortOrder
    busId?: SortOrder
    profit?: SortOrder
  }

  export type BusListRelationFilter = {
    every?: BusWhereInput
    some?: BusWhereInput
    none?: BusWhereInput
  }

  export type RouteStopListRelationFilter = {
    every?: RouteStopWhereInput
    some?: RouteStopWhereInput
    none?: RouteStopWhereInput
  }

  export type RouteScheduleListRelationFilter = {
    every?: RouteScheduleWhereInput
    some?: RouteScheduleWhereInput
    none?: RouteScheduleWhereInput
  }

  export type BusOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteStopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RouteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    origin?: SortOrder
    originLatitude?: SortOrder
    originLongitude?: SortOrder
    destination?: SortOrder
    destinationLatitude?: SortOrder
    destinationLongitude?: SortOrder
    status?: SortOrder
  }

  export type RouteAvgOrderByAggregateInput = {
    id?: SortOrder
    originLatitude?: SortOrder
    originLongitude?: SortOrder
    destinationLatitude?: SortOrder
    destinationLongitude?: SortOrder
  }

  export type RouteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    origin?: SortOrder
    originLatitude?: SortOrder
    originLongitude?: SortOrder
    destination?: SortOrder
    destinationLatitude?: SortOrder
    destinationLongitude?: SortOrder
    status?: SortOrder
  }

  export type RouteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    origin?: SortOrder
    originLatitude?: SortOrder
    originLongitude?: SortOrder
    destination?: SortOrder
    destinationLatitude?: SortOrder
    destinationLongitude?: SortOrder
    status?: SortOrder
  }

  export type RouteSumOrderByAggregateInput = {
    id?: SortOrder
    originLatitude?: SortOrder
    originLongitude?: SortOrder
    destinationLatitude?: SortOrder
    destinationLongitude?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type RouteScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    departureLocation?: SortOrder
    arrivalLocation?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    estimatedDurationMinutes?: SortOrder
    status?: SortOrder
    distanceKM?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    estimatedDurationMinutes?: SortOrder
    distanceKM?: SortOrder
  }

  export type RouteScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    departureLocation?: SortOrder
    arrivalLocation?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    estimatedDurationMinutes?: SortOrder
    status?: SortOrder
    distanceKM?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    departureLocation?: SortOrder
    arrivalLocation?: SortOrder
    departureTime?: SortOrder
    arrivalTime?: SortOrder
    estimatedDurationMinutes?: SortOrder
    status?: SortOrder
    distanceKM?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RouteScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    estimatedDurationMinutes?: SortOrder
    distanceKM?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type StopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StopAvgOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StopSumOrderByAggregateInput = {
    id?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StopScalarRelationFilter = {
    is?: StopWhereInput
    isNot?: StopWhereInput
  }

  export type RouteStopCountOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopId?: SortOrder
    order?: SortOrder
  }

  export type RouteStopAvgOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopId?: SortOrder
    order?: SortOrder
  }

  export type RouteStopMaxOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopId?: SortOrder
    order?: SortOrder
  }

  export type RouteStopMinOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopId?: SortOrder
    order?: SortOrder
  }

  export type RouteStopSumOrderByAggregateInput = {
    id?: SortOrder
    routeId?: SortOrder
    stopId?: SortOrder
    order?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FeedbackCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    busId?: SortOrder
    driverId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    busId?: SortOrder
    driverId?: SortOrder
    rating?: SortOrder
  }

  export type FeedbackMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    busId?: SortOrder
    driverId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    busId?: SortOrder
    driverId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type FeedbackSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    busId?: SortOrder
    driverId?: SortOrder
    rating?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    driverId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    driverId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    driverId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    driverId?: SortOrder
    title?: SortOrder
    message?: SortOrder
    read?: SortOrder
    createdAt?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    driverId?: SortOrder
  }

  export type FeedbackCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FeedbackUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FeedbackUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput> | FeedbackCreateWithoutUserInput[] | FeedbackUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutUserInput | FeedbackCreateOrConnectWithoutUserInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutUserInput | FeedbackUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedbackCreateManyUserInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutUserInput | FeedbackUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutUserInput | FeedbackUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BusCreateNestedOneWithoutDriverInput = {
    create?: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput>
    connectOrCreate?: BusCreateOrConnectWithoutDriverInput
    connect?: BusWhereUniqueInput
  }

  export type TravelCreateNestedManyWithoutDriverInput = {
    create?: XOR<TravelCreateWithoutDriverInput, TravelUncheckedCreateWithoutDriverInput> | TravelCreateWithoutDriverInput[] | TravelUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutDriverInput | TravelCreateOrConnectWithoutDriverInput[]
    createMany?: TravelCreateManyDriverInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutDriverInput = {
    create?: XOR<FeedbackCreateWithoutDriverInput, FeedbackUncheckedCreateWithoutDriverInput> | FeedbackCreateWithoutDriverInput[] | FeedbackUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutDriverInput | FeedbackCreateOrConnectWithoutDriverInput[]
    createMany?: FeedbackCreateManyDriverInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutDriverInput = {
    create?: XOR<NotificationCreateWithoutDriverInput, NotificationUncheckedCreateWithoutDriverInput> | NotificationCreateWithoutDriverInput[] | NotificationUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDriverInput | NotificationCreateOrConnectWithoutDriverInput[]
    createMany?: NotificationCreateManyDriverInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedOneWithoutDriverInput = {
    create?: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput>
    connectOrCreate?: BusCreateOrConnectWithoutDriverInput
    connect?: BusWhereUniqueInput
  }

  export type TravelUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<TravelCreateWithoutDriverInput, TravelUncheckedCreateWithoutDriverInput> | TravelCreateWithoutDriverInput[] | TravelUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutDriverInput | TravelCreateOrConnectWithoutDriverInput[]
    createMany?: TravelCreateManyDriverInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<FeedbackCreateWithoutDriverInput, FeedbackUncheckedCreateWithoutDriverInput> | FeedbackCreateWithoutDriverInput[] | FeedbackUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutDriverInput | FeedbackCreateOrConnectWithoutDriverInput[]
    createMany?: FeedbackCreateManyDriverInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutDriverInput = {
    create?: XOR<NotificationCreateWithoutDriverInput, NotificationUncheckedCreateWithoutDriverInput> | NotificationCreateWithoutDriverInput[] | NotificationUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDriverInput | NotificationCreateOrConnectWithoutDriverInput[]
    createMany?: NotificationCreateManyDriverInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusUpdateOneWithoutDriverNestedInput = {
    create?: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput>
    connectOrCreate?: BusCreateOrConnectWithoutDriverInput
    upsert?: BusUpsertWithoutDriverInput
    disconnect?: BusWhereInput | boolean
    delete?: BusWhereInput | boolean
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutDriverInput, BusUpdateWithoutDriverInput>, BusUncheckedUpdateWithoutDriverInput>
  }

  export type TravelUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TravelCreateWithoutDriverInput, TravelUncheckedCreateWithoutDriverInput> | TravelCreateWithoutDriverInput[] | TravelUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutDriverInput | TravelCreateOrConnectWithoutDriverInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutDriverInput | TravelUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TravelCreateManyDriverInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutDriverInput | TravelUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutDriverInput | TravelUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutDriverNestedInput = {
    create?: XOR<FeedbackCreateWithoutDriverInput, FeedbackUncheckedCreateWithoutDriverInput> | FeedbackCreateWithoutDriverInput[] | FeedbackUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutDriverInput | FeedbackCreateOrConnectWithoutDriverInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutDriverInput | FeedbackUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: FeedbackCreateManyDriverInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutDriverInput | FeedbackUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutDriverInput | FeedbackUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutDriverNestedInput = {
    create?: XOR<NotificationCreateWithoutDriverInput, NotificationUncheckedCreateWithoutDriverInput> | NotificationCreateWithoutDriverInput[] | NotificationUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDriverInput | NotificationCreateOrConnectWithoutDriverInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutDriverInput | NotificationUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: NotificationCreateManyDriverInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutDriverInput | NotificationUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutDriverInput | NotificationUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type BusUncheckedUpdateOneWithoutDriverNestedInput = {
    create?: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput>
    connectOrCreate?: BusCreateOrConnectWithoutDriverInput
    upsert?: BusUpsertWithoutDriverInput
    disconnect?: BusWhereInput | boolean
    delete?: BusWhereInput | boolean
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutDriverInput, BusUpdateWithoutDriverInput>, BusUncheckedUpdateWithoutDriverInput>
  }

  export type TravelUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<TravelCreateWithoutDriverInput, TravelUncheckedCreateWithoutDriverInput> | TravelCreateWithoutDriverInput[] | TravelUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutDriverInput | TravelCreateOrConnectWithoutDriverInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutDriverInput | TravelUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: TravelCreateManyDriverInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutDriverInput | TravelUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutDriverInput | TravelUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<FeedbackCreateWithoutDriverInput, FeedbackUncheckedCreateWithoutDriverInput> | FeedbackCreateWithoutDriverInput[] | FeedbackUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutDriverInput | FeedbackCreateOrConnectWithoutDriverInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutDriverInput | FeedbackUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: FeedbackCreateManyDriverInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutDriverInput | FeedbackUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutDriverInput | FeedbackUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: XOR<NotificationCreateWithoutDriverInput, NotificationUncheckedCreateWithoutDriverInput> | NotificationCreateWithoutDriverInput[] | NotificationUncheckedCreateWithoutDriverInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutDriverInput | NotificationCreateOrConnectWithoutDriverInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutDriverInput | NotificationUpsertWithWhereUniqueWithoutDriverInput[]
    createMany?: NotificationCreateManyDriverInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutDriverInput | NotificationUpdateWithWhereUniqueWithoutDriverInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutDriverInput | NotificationUpdateManyWithWhereWithoutDriverInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type DriverCreateNestedOneWithoutAssignedBusInput = {
    create?: XOR<DriverCreateWithoutAssignedBusInput, DriverUncheckedCreateWithoutAssignedBusInput>
    connectOrCreate?: DriverCreateOrConnectWithoutAssignedBusInput
    connect?: DriverWhereUniqueInput
  }

  export type RouteCreateNestedOneWithoutBusesInput = {
    create?: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutBusesInput
    connect?: RouteWhereUniqueInput
  }

  export type TravelCreateNestedManyWithoutBusInput = {
    create?: XOR<TravelCreateWithoutBusInput, TravelUncheckedCreateWithoutBusInput> | TravelCreateWithoutBusInput[] | TravelUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutBusInput | TravelCreateOrConnectWithoutBusInput[]
    createMany?: TravelCreateManyBusInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type FeedbackCreateNestedManyWithoutBusInput = {
    create?: XOR<FeedbackCreateWithoutBusInput, FeedbackUncheckedCreateWithoutBusInput> | FeedbackCreateWithoutBusInput[] | FeedbackUncheckedCreateWithoutBusInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutBusInput | FeedbackCreateOrConnectWithoutBusInput[]
    createMany?: FeedbackCreateManyBusInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type TravelUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<TravelCreateWithoutBusInput, TravelUncheckedCreateWithoutBusInput> | TravelCreateWithoutBusInput[] | TravelUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutBusInput | TravelCreateOrConnectWithoutBusInput[]
    createMany?: TravelCreateManyBusInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type FeedbackUncheckedCreateNestedManyWithoutBusInput = {
    create?: XOR<FeedbackCreateWithoutBusInput, FeedbackUncheckedCreateWithoutBusInput> | FeedbackCreateWithoutBusInput[] | FeedbackUncheckedCreateWithoutBusInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutBusInput | FeedbackCreateOrConnectWithoutBusInput[]
    createMany?: FeedbackCreateManyBusInputEnvelope
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
  }

  export type DriverUpdateOneWithoutAssignedBusNestedInput = {
    create?: XOR<DriverCreateWithoutAssignedBusInput, DriverUncheckedCreateWithoutAssignedBusInput>
    connectOrCreate?: DriverCreateOrConnectWithoutAssignedBusInput
    upsert?: DriverUpsertWithoutAssignedBusInput
    disconnect?: DriverWhereInput | boolean
    delete?: DriverWhereInput | boolean
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutAssignedBusInput, DriverUpdateWithoutAssignedBusInput>, DriverUncheckedUpdateWithoutAssignedBusInput>
  }

  export type RouteUpdateOneRequiredWithoutBusesNestedInput = {
    create?: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutBusesInput
    upsert?: RouteUpsertWithoutBusesInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutBusesInput, RouteUpdateWithoutBusesInput>, RouteUncheckedUpdateWithoutBusesInput>
  }

  export type TravelUpdateManyWithoutBusNestedInput = {
    create?: XOR<TravelCreateWithoutBusInput, TravelUncheckedCreateWithoutBusInput> | TravelCreateWithoutBusInput[] | TravelUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutBusInput | TravelCreateOrConnectWithoutBusInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutBusInput | TravelUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TravelCreateManyBusInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutBusInput | TravelUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutBusInput | TravelUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type FeedbackUpdateManyWithoutBusNestedInput = {
    create?: XOR<FeedbackCreateWithoutBusInput, FeedbackUncheckedCreateWithoutBusInput> | FeedbackCreateWithoutBusInput[] | FeedbackUncheckedCreateWithoutBusInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutBusInput | FeedbackCreateOrConnectWithoutBusInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutBusInput | FeedbackUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: FeedbackCreateManyBusInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutBusInput | FeedbackUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutBusInput | FeedbackUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TravelUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<TravelCreateWithoutBusInput, TravelUncheckedCreateWithoutBusInput> | TravelCreateWithoutBusInput[] | TravelUncheckedCreateWithoutBusInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutBusInput | TravelCreateOrConnectWithoutBusInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutBusInput | TravelUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: TravelCreateManyBusInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutBusInput | TravelUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutBusInput | TravelUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type FeedbackUncheckedUpdateManyWithoutBusNestedInput = {
    create?: XOR<FeedbackCreateWithoutBusInput, FeedbackUncheckedCreateWithoutBusInput> | FeedbackCreateWithoutBusInput[] | FeedbackUncheckedCreateWithoutBusInput[]
    connectOrCreate?: FeedbackCreateOrConnectWithoutBusInput | FeedbackCreateOrConnectWithoutBusInput[]
    upsert?: FeedbackUpsertWithWhereUniqueWithoutBusInput | FeedbackUpsertWithWhereUniqueWithoutBusInput[]
    createMany?: FeedbackCreateManyBusInputEnvelope
    set?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    disconnect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    delete?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    connect?: FeedbackWhereUniqueInput | FeedbackWhereUniqueInput[]
    update?: FeedbackUpdateWithWhereUniqueWithoutBusInput | FeedbackUpdateWithWhereUniqueWithoutBusInput[]
    updateMany?: FeedbackUpdateManyWithWhereWithoutBusInput | FeedbackUpdateManyWithWhereWithoutBusInput[]
    deleteMany?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutTravelsInput = {
    create?: XOR<RouteCreateWithoutTravelsInput, RouteUncheckedCreateWithoutTravelsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutTravelsInput
    connect?: RouteWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutTravelsInput = {
    create?: XOR<DriverCreateWithoutTravelsInput, DriverUncheckedCreateWithoutTravelsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutTravelsInput
    connect?: DriverWhereUniqueInput
  }

  export type BusCreateNestedOneWithoutTravelsInput = {
    create?: XOR<BusCreateWithoutTravelsInput, BusUncheckedCreateWithoutTravelsInput>
    connectOrCreate?: BusCreateOrConnectWithoutTravelsInput
    connect?: BusWhereUniqueInput
  }

  export type RouteUpdateOneRequiredWithoutTravelsNestedInput = {
    create?: XOR<RouteCreateWithoutTravelsInput, RouteUncheckedCreateWithoutTravelsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutTravelsInput
    upsert?: RouteUpsertWithoutTravelsInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutTravelsInput, RouteUpdateWithoutTravelsInput>, RouteUncheckedUpdateWithoutTravelsInput>
  }

  export type DriverUpdateOneRequiredWithoutTravelsNestedInput = {
    create?: XOR<DriverCreateWithoutTravelsInput, DriverUncheckedCreateWithoutTravelsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutTravelsInput
    upsert?: DriverUpsertWithoutTravelsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutTravelsInput, DriverUpdateWithoutTravelsInput>, DriverUncheckedUpdateWithoutTravelsInput>
  }

  export type BusUpdateOneRequiredWithoutTravelsNestedInput = {
    create?: XOR<BusCreateWithoutTravelsInput, BusUncheckedCreateWithoutTravelsInput>
    connectOrCreate?: BusCreateOrConnectWithoutTravelsInput
    upsert?: BusUpsertWithoutTravelsInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutTravelsInput, BusUpdateWithoutTravelsInput>, BusUncheckedUpdateWithoutTravelsInput>
  }

  export type BusCreateNestedManyWithoutRouteInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type RouteStopCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteStopCreateWithoutRouteInput, RouteStopUncheckedCreateWithoutRouteInput> | RouteStopCreateWithoutRouteInput[] | RouteStopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteStopCreateOrConnectWithoutRouteInput | RouteStopCreateOrConnectWithoutRouteInput[]
    createMany?: RouteStopCreateManyRouteInputEnvelope
    connect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
  }

  export type TravelCreateNestedManyWithoutRouteInput = {
    create?: XOR<TravelCreateWithoutRouteInput, TravelUncheckedCreateWithoutRouteInput> | TravelCreateWithoutRouteInput[] | TravelUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutRouteInput | TravelCreateOrConnectWithoutRouteInput[]
    createMany?: TravelCreateManyRouteInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type RouteScheduleCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteScheduleCreateWithoutRouteInput, RouteScheduleUncheckedCreateWithoutRouteInput> | RouteScheduleCreateWithoutRouteInput[] | RouteScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteScheduleCreateOrConnectWithoutRouteInput | RouteScheduleCreateOrConnectWithoutRouteInput[]
    createMany?: RouteScheduleCreateManyRouteInputEnvelope
    connect?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
  }

  export type BusUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
  }

  export type RouteStopUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteStopCreateWithoutRouteInput, RouteStopUncheckedCreateWithoutRouteInput> | RouteStopCreateWithoutRouteInput[] | RouteStopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteStopCreateOrConnectWithoutRouteInput | RouteStopCreateOrConnectWithoutRouteInput[]
    createMany?: RouteStopCreateManyRouteInputEnvelope
    connect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
  }

  export type TravelUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<TravelCreateWithoutRouteInput, TravelUncheckedCreateWithoutRouteInput> | TravelCreateWithoutRouteInput[] | TravelUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutRouteInput | TravelCreateOrConnectWithoutRouteInput[]
    createMany?: TravelCreateManyRouteInputEnvelope
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
  }

  export type RouteScheduleUncheckedCreateNestedManyWithoutRouteInput = {
    create?: XOR<RouteScheduleCreateWithoutRouteInput, RouteScheduleUncheckedCreateWithoutRouteInput> | RouteScheduleCreateWithoutRouteInput[] | RouteScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteScheduleCreateOrConnectWithoutRouteInput | RouteScheduleCreateOrConnectWithoutRouteInput[]
    createMany?: RouteScheduleCreateManyRouteInputEnvelope
    connect?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
  }

  export type BusUpdateManyWithoutRouteNestedInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutRouteInput | BusUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutRouteInput | BusUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: BusUpdateManyWithWhereWithoutRouteInput | BusUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type RouteStopUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteStopCreateWithoutRouteInput, RouteStopUncheckedCreateWithoutRouteInput> | RouteStopCreateWithoutRouteInput[] | RouteStopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteStopCreateOrConnectWithoutRouteInput | RouteStopCreateOrConnectWithoutRouteInput[]
    upsert?: RouteStopUpsertWithWhereUniqueWithoutRouteInput | RouteStopUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteStopCreateManyRouteInputEnvelope
    set?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    disconnect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    delete?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    connect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    update?: RouteStopUpdateWithWhereUniqueWithoutRouteInput | RouteStopUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteStopUpdateManyWithWhereWithoutRouteInput | RouteStopUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteStopScalarWhereInput | RouteStopScalarWhereInput[]
  }

  export type TravelUpdateManyWithoutRouteNestedInput = {
    create?: XOR<TravelCreateWithoutRouteInput, TravelUncheckedCreateWithoutRouteInput> | TravelCreateWithoutRouteInput[] | TravelUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutRouteInput | TravelCreateOrConnectWithoutRouteInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutRouteInput | TravelUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: TravelCreateManyRouteInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutRouteInput | TravelUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutRouteInput | TravelUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type RouteScheduleUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteScheduleCreateWithoutRouteInput, RouteScheduleUncheckedCreateWithoutRouteInput> | RouteScheduleCreateWithoutRouteInput[] | RouteScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteScheduleCreateOrConnectWithoutRouteInput | RouteScheduleCreateOrConnectWithoutRouteInput[]
    upsert?: RouteScheduleUpsertWithWhereUniqueWithoutRouteInput | RouteScheduleUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteScheduleCreateManyRouteInputEnvelope
    set?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    disconnect?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    delete?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    connect?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    update?: RouteScheduleUpdateWithWhereUniqueWithoutRouteInput | RouteScheduleUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteScheduleUpdateManyWithWhereWithoutRouteInput | RouteScheduleUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteScheduleScalarWhereInput | RouteScheduleScalarWhereInput[]
  }

  export type BusUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput> | BusCreateWithoutRouteInput[] | BusUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: BusCreateOrConnectWithoutRouteInput | BusCreateOrConnectWithoutRouteInput[]
    upsert?: BusUpsertWithWhereUniqueWithoutRouteInput | BusUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: BusCreateManyRouteInputEnvelope
    set?: BusWhereUniqueInput | BusWhereUniqueInput[]
    disconnect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    delete?: BusWhereUniqueInput | BusWhereUniqueInput[]
    connect?: BusWhereUniqueInput | BusWhereUniqueInput[]
    update?: BusUpdateWithWhereUniqueWithoutRouteInput | BusUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: BusUpdateManyWithWhereWithoutRouteInput | BusUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: BusScalarWhereInput | BusScalarWhereInput[]
  }

  export type RouteStopUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteStopCreateWithoutRouteInput, RouteStopUncheckedCreateWithoutRouteInput> | RouteStopCreateWithoutRouteInput[] | RouteStopUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteStopCreateOrConnectWithoutRouteInput | RouteStopCreateOrConnectWithoutRouteInput[]
    upsert?: RouteStopUpsertWithWhereUniqueWithoutRouteInput | RouteStopUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteStopCreateManyRouteInputEnvelope
    set?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    disconnect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    delete?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    connect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    update?: RouteStopUpdateWithWhereUniqueWithoutRouteInput | RouteStopUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteStopUpdateManyWithWhereWithoutRouteInput | RouteStopUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteStopScalarWhereInput | RouteStopScalarWhereInput[]
  }

  export type TravelUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<TravelCreateWithoutRouteInput, TravelUncheckedCreateWithoutRouteInput> | TravelCreateWithoutRouteInput[] | TravelUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: TravelCreateOrConnectWithoutRouteInput | TravelCreateOrConnectWithoutRouteInput[]
    upsert?: TravelUpsertWithWhereUniqueWithoutRouteInput | TravelUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: TravelCreateManyRouteInputEnvelope
    set?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    disconnect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    delete?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    connect?: TravelWhereUniqueInput | TravelWhereUniqueInput[]
    update?: TravelUpdateWithWhereUniqueWithoutRouteInput | TravelUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: TravelUpdateManyWithWhereWithoutRouteInput | TravelUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: TravelScalarWhereInput | TravelScalarWhereInput[]
  }

  export type RouteScheduleUncheckedUpdateManyWithoutRouteNestedInput = {
    create?: XOR<RouteScheduleCreateWithoutRouteInput, RouteScheduleUncheckedCreateWithoutRouteInput> | RouteScheduleCreateWithoutRouteInput[] | RouteScheduleUncheckedCreateWithoutRouteInput[]
    connectOrCreate?: RouteScheduleCreateOrConnectWithoutRouteInput | RouteScheduleCreateOrConnectWithoutRouteInput[]
    upsert?: RouteScheduleUpsertWithWhereUniqueWithoutRouteInput | RouteScheduleUpsertWithWhereUniqueWithoutRouteInput[]
    createMany?: RouteScheduleCreateManyRouteInputEnvelope
    set?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    disconnect?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    delete?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    connect?: RouteScheduleWhereUniqueInput | RouteScheduleWhereUniqueInput[]
    update?: RouteScheduleUpdateWithWhereUniqueWithoutRouteInput | RouteScheduleUpdateWithWhereUniqueWithoutRouteInput[]
    updateMany?: RouteScheduleUpdateManyWithWhereWithoutRouteInput | RouteScheduleUpdateManyWithWhereWithoutRouteInput[]
    deleteMany?: RouteScheduleScalarWhereInput | RouteScheduleScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<RouteCreateWithoutSchedulesInput, RouteUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutSchedulesInput
    connect?: RouteWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type RouteUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<RouteCreateWithoutSchedulesInput, RouteUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: RouteCreateOrConnectWithoutSchedulesInput
    upsert?: RouteUpsertWithoutSchedulesInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutSchedulesInput, RouteUpdateWithoutSchedulesInput>, RouteUncheckedUpdateWithoutSchedulesInput>
  }

  export type RouteStopCreateNestedManyWithoutStopInput = {
    create?: XOR<RouteStopCreateWithoutStopInput, RouteStopUncheckedCreateWithoutStopInput> | RouteStopCreateWithoutStopInput[] | RouteStopUncheckedCreateWithoutStopInput[]
    connectOrCreate?: RouteStopCreateOrConnectWithoutStopInput | RouteStopCreateOrConnectWithoutStopInput[]
    createMany?: RouteStopCreateManyStopInputEnvelope
    connect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
  }

  export type RouteStopUncheckedCreateNestedManyWithoutStopInput = {
    create?: XOR<RouteStopCreateWithoutStopInput, RouteStopUncheckedCreateWithoutStopInput> | RouteStopCreateWithoutStopInput[] | RouteStopUncheckedCreateWithoutStopInput[]
    connectOrCreate?: RouteStopCreateOrConnectWithoutStopInput | RouteStopCreateOrConnectWithoutStopInput[]
    createMany?: RouteStopCreateManyStopInputEnvelope
    connect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
  }

  export type RouteStopUpdateManyWithoutStopNestedInput = {
    create?: XOR<RouteStopCreateWithoutStopInput, RouteStopUncheckedCreateWithoutStopInput> | RouteStopCreateWithoutStopInput[] | RouteStopUncheckedCreateWithoutStopInput[]
    connectOrCreate?: RouteStopCreateOrConnectWithoutStopInput | RouteStopCreateOrConnectWithoutStopInput[]
    upsert?: RouteStopUpsertWithWhereUniqueWithoutStopInput | RouteStopUpsertWithWhereUniqueWithoutStopInput[]
    createMany?: RouteStopCreateManyStopInputEnvelope
    set?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    disconnect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    delete?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    connect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    update?: RouteStopUpdateWithWhereUniqueWithoutStopInput | RouteStopUpdateWithWhereUniqueWithoutStopInput[]
    updateMany?: RouteStopUpdateManyWithWhereWithoutStopInput | RouteStopUpdateManyWithWhereWithoutStopInput[]
    deleteMany?: RouteStopScalarWhereInput | RouteStopScalarWhereInput[]
  }

  export type RouteStopUncheckedUpdateManyWithoutStopNestedInput = {
    create?: XOR<RouteStopCreateWithoutStopInput, RouteStopUncheckedCreateWithoutStopInput> | RouteStopCreateWithoutStopInput[] | RouteStopUncheckedCreateWithoutStopInput[]
    connectOrCreate?: RouteStopCreateOrConnectWithoutStopInput | RouteStopCreateOrConnectWithoutStopInput[]
    upsert?: RouteStopUpsertWithWhereUniqueWithoutStopInput | RouteStopUpsertWithWhereUniqueWithoutStopInput[]
    createMany?: RouteStopCreateManyStopInputEnvelope
    set?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    disconnect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    delete?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    connect?: RouteStopWhereUniqueInput | RouteStopWhereUniqueInput[]
    update?: RouteStopUpdateWithWhereUniqueWithoutStopInput | RouteStopUpdateWithWhereUniqueWithoutStopInput[]
    updateMany?: RouteStopUpdateManyWithWhereWithoutStopInput | RouteStopUpdateManyWithWhereWithoutStopInput[]
    deleteMany?: RouteStopScalarWhereInput | RouteStopScalarWhereInput[]
  }

  export type RouteCreateNestedOneWithoutRouteStopsInput = {
    create?: XOR<RouteCreateWithoutRouteStopsInput, RouteUncheckedCreateWithoutRouteStopsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRouteStopsInput
    connect?: RouteWhereUniqueInput
  }

  export type StopCreateNestedOneWithoutRouteStopsInput = {
    create?: XOR<StopCreateWithoutRouteStopsInput, StopUncheckedCreateWithoutRouteStopsInput>
    connectOrCreate?: StopCreateOrConnectWithoutRouteStopsInput
    connect?: StopWhereUniqueInput
  }

  export type RouteUpdateOneRequiredWithoutRouteStopsNestedInput = {
    create?: XOR<RouteCreateWithoutRouteStopsInput, RouteUncheckedCreateWithoutRouteStopsInput>
    connectOrCreate?: RouteCreateOrConnectWithoutRouteStopsInput
    upsert?: RouteUpsertWithoutRouteStopsInput
    connect?: RouteWhereUniqueInput
    update?: XOR<XOR<RouteUpdateToOneWithWhereWithoutRouteStopsInput, RouteUpdateWithoutRouteStopsInput>, RouteUncheckedUpdateWithoutRouteStopsInput>
  }

  export type StopUpdateOneRequiredWithoutRouteStopsNestedInput = {
    create?: XOR<StopCreateWithoutRouteStopsInput, StopUncheckedCreateWithoutRouteStopsInput>
    connectOrCreate?: StopCreateOrConnectWithoutRouteStopsInput
    upsert?: StopUpsertWithoutRouteStopsInput
    connect?: StopWhereUniqueInput
    update?: XOR<XOR<StopUpdateToOneWithWhereWithoutRouteStopsInput, StopUpdateWithoutRouteStopsInput>, StopUncheckedUpdateWithoutRouteStopsInput>
  }

  export type BusCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<BusCreateWithoutFeedbacksInput, BusUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: BusCreateOrConnectWithoutFeedbacksInput
    connect?: BusWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput
    connect?: UserWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutFeedbacksInput = {
    create?: XOR<DriverCreateWithoutFeedbacksInput, DriverUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: DriverCreateOrConnectWithoutFeedbacksInput
    connect?: DriverWhereUniqueInput
  }

  export type BusUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<BusCreateWithoutFeedbacksInput, BusUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: BusCreateOrConnectWithoutFeedbacksInput
    upsert?: BusUpsertWithoutFeedbacksInput
    connect?: BusWhereUniqueInput
    update?: XOR<XOR<BusUpdateToOneWithWhereWithoutFeedbacksInput, BusUpdateWithoutFeedbacksInput>, BusUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedbacksInput
    upsert?: UserUpsertWithoutFeedbacksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedbacksInput, UserUpdateWithoutFeedbacksInput>, UserUncheckedUpdateWithoutFeedbacksInput>
  }

  export type DriverUpdateOneRequiredWithoutFeedbacksNestedInput = {
    create?: XOR<DriverCreateWithoutFeedbacksInput, DriverUncheckedCreateWithoutFeedbacksInput>
    connectOrCreate?: DriverCreateOrConnectWithoutFeedbacksInput
    upsert?: DriverUpsertWithoutFeedbacksInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutFeedbacksInput, DriverUpdateWithoutFeedbacksInput>, DriverUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type DriverCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<DriverCreateWithoutNotificationsInput, DriverUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutNotificationsInput
    connect?: DriverWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type DriverUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<DriverCreateWithoutNotificationsInput, DriverUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: DriverCreateOrConnectWithoutNotificationsInput
    upsert?: DriverUpsertWithoutNotificationsInput
    connect?: DriverWhereUniqueInput
    update?: XOR<XOR<DriverUpdateToOneWithWhereWithoutNotificationsInput, DriverUpdateWithoutNotificationsInput>, DriverUncheckedUpdateWithoutNotificationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type FeedbackCreateWithoutUserInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    bus: BusCreateNestedOneWithoutFeedbacksInput
    driver: DriverCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutUserInput = {
    id?: number
    busId: number
    driverId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackCreateManyUserInputEnvelope = {
    data: FeedbackCreateManyUserInput | FeedbackCreateManyUserInput[]
  }

  export type NotificationCreateWithoutUserInput = {
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    driver: DriverCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: number
    driverId: number
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
  }

  export type FeedbackUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
    create: XOR<FeedbackCreateWithoutUserInput, FeedbackUncheckedCreateWithoutUserInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutUserInput, FeedbackUncheckedUpdateWithoutUserInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutUserInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedbackScalarWhereInput = {
    AND?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    OR?: FeedbackScalarWhereInput[]
    NOT?: FeedbackScalarWhereInput | FeedbackScalarWhereInput[]
    id?: IntFilter<"Feedback"> | number
    userId?: IntFilter<"Feedback"> | number
    busId?: IntFilter<"Feedback"> | number
    driverId?: IntFilter<"Feedback"> | number
    rating?: IntFilter<"Feedback"> | number
    comment?: StringFilter<"Feedback"> | string
    createdAt?: DateTimeFilter<"Feedback"> | Date | string
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    userId?: IntFilter<"Notification"> | number
    driverId?: IntFilter<"Notification"> | number
    title?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    read?: BoolFilter<"Notification"> | boolean
    createdAt?: DateTimeFilter<"Notification"> | Date | string
  }

  export type BusCreateWithoutDriverInput = {
    matricula: string
    nia: string
    status?: string
    capacity: number
    currentLoad: number
    createdAt?: Date | string
    updatedAt?: Date | string
    route: RouteCreateNestedOneWithoutBusesInput
    travels?: TravelCreateNestedManyWithoutBusInput
    feedbacks?: FeedbackCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutDriverInput = {
    id?: number
    matricula: string
    nia: string
    routeId: number
    status?: string
    capacity: number
    currentLoad: number
    createdAt?: Date | string
    updatedAt?: Date | string
    travels?: TravelUncheckedCreateNestedManyWithoutBusInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutDriverInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput>
  }

  export type TravelCreateWithoutDriverInput = {
    profit: number
    arrivalTime?: Date | string | null
    departureTime?: Date | string | null
    createdAt?: Date | string
    route: RouteCreateNestedOneWithoutTravelsInput
    bus: BusCreateNestedOneWithoutTravelsInput
  }

  export type TravelUncheckedCreateWithoutDriverInput = {
    id?: number
    routeId: number
    busId: number
    profit: number
    arrivalTime?: Date | string | null
    departureTime?: Date | string | null
    createdAt?: Date | string
  }

  export type TravelCreateOrConnectWithoutDriverInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutDriverInput, TravelUncheckedCreateWithoutDriverInput>
  }

  export type TravelCreateManyDriverInputEnvelope = {
    data: TravelCreateManyDriverInput | TravelCreateManyDriverInput[]
  }

  export type FeedbackCreateWithoutDriverInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    bus: BusCreateNestedOneWithoutFeedbacksInput
    user: UserCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutDriverInput = {
    id?: number
    userId: number
    busId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutDriverInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutDriverInput, FeedbackUncheckedCreateWithoutDriverInput>
  }

  export type FeedbackCreateManyDriverInputEnvelope = {
    data: FeedbackCreateManyDriverInput | FeedbackCreateManyDriverInput[]
  }

  export type NotificationCreateWithoutDriverInput = {
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutDriverInput = {
    id?: number
    userId: number
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type NotificationCreateOrConnectWithoutDriverInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutDriverInput, NotificationUncheckedCreateWithoutDriverInput>
  }

  export type NotificationCreateManyDriverInputEnvelope = {
    data: NotificationCreateManyDriverInput | NotificationCreateManyDriverInput[]
  }

  export type BusUpsertWithoutDriverInput = {
    update: XOR<BusUpdateWithoutDriverInput, BusUncheckedUpdateWithoutDriverInput>
    create: XOR<BusCreateWithoutDriverInput, BusUncheckedCreateWithoutDriverInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutDriverInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutDriverInput, BusUncheckedUpdateWithoutDriverInput>
  }

  export type BusUpdateWithoutDriverInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutBusesNestedInput
    travels?: TravelUpdateManyWithoutBusNestedInput
    feedbacks?: FeedbackUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    routeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travels?: TravelUncheckedUpdateManyWithoutBusNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutBusNestedInput
  }

  export type TravelUpsertWithWhereUniqueWithoutDriverInput = {
    where: TravelWhereUniqueInput
    update: XOR<TravelUpdateWithoutDriverInput, TravelUncheckedUpdateWithoutDriverInput>
    create: XOR<TravelCreateWithoutDriverInput, TravelUncheckedCreateWithoutDriverInput>
  }

  export type TravelUpdateWithWhereUniqueWithoutDriverInput = {
    where: TravelWhereUniqueInput
    data: XOR<TravelUpdateWithoutDriverInput, TravelUncheckedUpdateWithoutDriverInput>
  }

  export type TravelUpdateManyWithWhereWithoutDriverInput = {
    where: TravelScalarWhereInput
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyWithoutDriverInput>
  }

  export type TravelScalarWhereInput = {
    AND?: TravelScalarWhereInput | TravelScalarWhereInput[]
    OR?: TravelScalarWhereInput[]
    NOT?: TravelScalarWhereInput | TravelScalarWhereInput[]
    id?: IntFilter<"Travel"> | number
    routeId?: IntFilter<"Travel"> | number
    driverId?: IntFilter<"Travel"> | number
    busId?: IntFilter<"Travel"> | number
    profit?: IntFilter<"Travel"> | number
    arrivalTime?: DateTimeNullableFilter<"Travel"> | Date | string | null
    departureTime?: DateTimeNullableFilter<"Travel"> | Date | string | null
    createdAt?: DateTimeFilter<"Travel"> | Date | string
  }

  export type FeedbackUpsertWithWhereUniqueWithoutDriverInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutDriverInput, FeedbackUncheckedUpdateWithoutDriverInput>
    create: XOR<FeedbackCreateWithoutDriverInput, FeedbackUncheckedCreateWithoutDriverInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutDriverInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutDriverInput, FeedbackUncheckedUpdateWithoutDriverInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutDriverInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutDriverInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutDriverInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutDriverInput, NotificationUncheckedUpdateWithoutDriverInput>
    create: XOR<NotificationCreateWithoutDriverInput, NotificationUncheckedCreateWithoutDriverInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutDriverInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutDriverInput, NotificationUncheckedUpdateWithoutDriverInput>
  }

  export type NotificationUpdateManyWithWhereWithoutDriverInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutDriverInput>
  }

  export type DriverCreateWithoutAssignedBusInput = {
    name: string
    email: string
    phone: string
    password: string
    licenseNumber: string
    url_foto_de_perfil?: string | null
    experienceTime: number
    effectiveDate?: Date | string | null
    status?: string
    currentLatitude?: number | null
    currentLongitude?: number | null
    lastLogin?: Date | string | null
    deviceToken?: string | null
    isVerified?: boolean
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    travels?: TravelCreateNestedManyWithoutDriverInput
    feedbacks?: FeedbackCreateNestedManyWithoutDriverInput
    notifications?: NotificationCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutAssignedBusInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    licenseNumber: string
    url_foto_de_perfil?: string | null
    experienceTime: number
    effectiveDate?: Date | string | null
    status?: string
    currentLatitude?: number | null
    currentLongitude?: number | null
    lastLogin?: Date | string | null
    deviceToken?: string | null
    isVerified?: boolean
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    travels?: TravelUncheckedCreateNestedManyWithoutDriverInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutDriverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutAssignedBusInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutAssignedBusInput, DriverUncheckedCreateWithoutAssignedBusInput>
  }

  export type RouteCreateWithoutBusesInput = {
    name: string
    origin: string
    originLatitude?: number | null
    originLongitude?: number | null
    destination: string
    destinationLatitude?: number | null
    destinationLongitude?: number | null
    status?: string
    routeStops?: RouteStopCreateNestedManyWithoutRouteInput
    travels?: TravelCreateNestedManyWithoutRouteInput
    schedules?: RouteScheduleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutBusesInput = {
    id?: number
    name: string
    origin: string
    originLatitude?: number | null
    originLongitude?: number | null
    destination: string
    destinationLatitude?: number | null
    destinationLongitude?: number | null
    status?: string
    routeStops?: RouteStopUncheckedCreateNestedManyWithoutRouteInput
    travels?: TravelUncheckedCreateNestedManyWithoutRouteInput
    schedules?: RouteScheduleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutBusesInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
  }

  export type TravelCreateWithoutBusInput = {
    profit: number
    arrivalTime?: Date | string | null
    departureTime?: Date | string | null
    createdAt?: Date | string
    route: RouteCreateNestedOneWithoutTravelsInput
    driver: DriverCreateNestedOneWithoutTravelsInput
  }

  export type TravelUncheckedCreateWithoutBusInput = {
    id?: number
    routeId: number
    driverId: number
    profit: number
    arrivalTime?: Date | string | null
    departureTime?: Date | string | null
    createdAt?: Date | string
  }

  export type TravelCreateOrConnectWithoutBusInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutBusInput, TravelUncheckedCreateWithoutBusInput>
  }

  export type TravelCreateManyBusInputEnvelope = {
    data: TravelCreateManyBusInput | TravelCreateManyBusInput[]
  }

  export type FeedbackCreateWithoutBusInput = {
    rating: number
    comment: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFeedbacksInput
    driver: DriverCreateNestedOneWithoutFeedbacksInput
  }

  export type FeedbackUncheckedCreateWithoutBusInput = {
    id?: number
    userId: number
    driverId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type FeedbackCreateOrConnectWithoutBusInput = {
    where: FeedbackWhereUniqueInput
    create: XOR<FeedbackCreateWithoutBusInput, FeedbackUncheckedCreateWithoutBusInput>
  }

  export type FeedbackCreateManyBusInputEnvelope = {
    data: FeedbackCreateManyBusInput | FeedbackCreateManyBusInput[]
  }

  export type DriverUpsertWithoutAssignedBusInput = {
    update: XOR<DriverUpdateWithoutAssignedBusInput, DriverUncheckedUpdateWithoutAssignedBusInput>
    create: XOR<DriverCreateWithoutAssignedBusInput, DriverUncheckedCreateWithoutAssignedBusInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutAssignedBusInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutAssignedBusInput, DriverUncheckedUpdateWithoutAssignedBusInput>
  }

  export type DriverUpdateWithoutAssignedBusInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    experienceTime?: IntFieldUpdateOperationsInput | number
    effectiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travels?: TravelUpdateManyWithoutDriverNestedInput
    feedbacks?: FeedbackUpdateManyWithoutDriverNestedInput
    notifications?: NotificationUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutAssignedBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    experienceTime?: IntFieldUpdateOperationsInput | number
    effectiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travels?: TravelUncheckedUpdateManyWithoutDriverNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutDriverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type RouteUpsertWithoutBusesInput = {
    update: XOR<RouteUpdateWithoutBusesInput, RouteUncheckedUpdateWithoutBusesInput>
    create: XOR<RouteCreateWithoutBusesInput, RouteUncheckedCreateWithoutBusesInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutBusesInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutBusesInput, RouteUncheckedUpdateWithoutBusesInput>
  }

  export type RouteUpdateWithoutBusesInput = {
    name?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    originLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    originLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    routeStops?: RouteStopUpdateManyWithoutRouteNestedInput
    travels?: TravelUpdateManyWithoutRouteNestedInput
    schedules?: RouteScheduleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutBusesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    originLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    originLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    routeStops?: RouteStopUncheckedUpdateManyWithoutRouteNestedInput
    travels?: TravelUncheckedUpdateManyWithoutRouteNestedInput
    schedules?: RouteScheduleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type TravelUpsertWithWhereUniqueWithoutBusInput = {
    where: TravelWhereUniqueInput
    update: XOR<TravelUpdateWithoutBusInput, TravelUncheckedUpdateWithoutBusInput>
    create: XOR<TravelCreateWithoutBusInput, TravelUncheckedCreateWithoutBusInput>
  }

  export type TravelUpdateWithWhereUniqueWithoutBusInput = {
    where: TravelWhereUniqueInput
    data: XOR<TravelUpdateWithoutBusInput, TravelUncheckedUpdateWithoutBusInput>
  }

  export type TravelUpdateManyWithWhereWithoutBusInput = {
    where: TravelScalarWhereInput
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyWithoutBusInput>
  }

  export type FeedbackUpsertWithWhereUniqueWithoutBusInput = {
    where: FeedbackWhereUniqueInput
    update: XOR<FeedbackUpdateWithoutBusInput, FeedbackUncheckedUpdateWithoutBusInput>
    create: XOR<FeedbackCreateWithoutBusInput, FeedbackUncheckedCreateWithoutBusInput>
  }

  export type FeedbackUpdateWithWhereUniqueWithoutBusInput = {
    where: FeedbackWhereUniqueInput
    data: XOR<FeedbackUpdateWithoutBusInput, FeedbackUncheckedUpdateWithoutBusInput>
  }

  export type FeedbackUpdateManyWithWhereWithoutBusInput = {
    where: FeedbackScalarWhereInput
    data: XOR<FeedbackUpdateManyMutationInput, FeedbackUncheckedUpdateManyWithoutBusInput>
  }

  export type RouteCreateWithoutTravelsInput = {
    name: string
    origin: string
    originLatitude?: number | null
    originLongitude?: number | null
    destination: string
    destinationLatitude?: number | null
    destinationLongitude?: number | null
    status?: string
    buses?: BusCreateNestedManyWithoutRouteInput
    routeStops?: RouteStopCreateNestedManyWithoutRouteInput
    schedules?: RouteScheduleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutTravelsInput = {
    id?: number
    name: string
    origin: string
    originLatitude?: number | null
    originLongitude?: number | null
    destination: string
    destinationLatitude?: number | null
    destinationLongitude?: number | null
    status?: string
    buses?: BusUncheckedCreateNestedManyWithoutRouteInput
    routeStops?: RouteStopUncheckedCreateNestedManyWithoutRouteInput
    schedules?: RouteScheduleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutTravelsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutTravelsInput, RouteUncheckedCreateWithoutTravelsInput>
  }

  export type DriverCreateWithoutTravelsInput = {
    name: string
    email: string
    phone: string
    password: string
    licenseNumber: string
    url_foto_de_perfil?: string | null
    experienceTime: number
    effectiveDate?: Date | string | null
    status?: string
    currentLatitude?: number | null
    currentLongitude?: number | null
    lastLogin?: Date | string | null
    deviceToken?: string | null
    isVerified?: boolean
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedBus?: BusCreateNestedOneWithoutDriverInput
    feedbacks?: FeedbackCreateNestedManyWithoutDriverInput
    notifications?: NotificationCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutTravelsInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    licenseNumber: string
    url_foto_de_perfil?: string | null
    experienceTime: number
    effectiveDate?: Date | string | null
    status?: string
    currentLatitude?: number | null
    currentLongitude?: number | null
    lastLogin?: Date | string | null
    deviceToken?: string | null
    isVerified?: boolean
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedBus?: BusUncheckedCreateNestedOneWithoutDriverInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutDriverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutTravelsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutTravelsInput, DriverUncheckedCreateWithoutTravelsInput>
  }

  export type BusCreateWithoutTravelsInput = {
    matricula: string
    nia: string
    status?: string
    capacity: number
    currentLoad: number
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: DriverCreateNestedOneWithoutAssignedBusInput
    route: RouteCreateNestedOneWithoutBusesInput
    feedbacks?: FeedbackCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutTravelsInput = {
    id?: number
    matricula: string
    nia: string
    driverId?: number | null
    routeId: number
    status?: string
    capacity: number
    currentLoad: number
    createdAt?: Date | string
    updatedAt?: Date | string
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutTravelsInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutTravelsInput, BusUncheckedCreateWithoutTravelsInput>
  }

  export type RouteUpsertWithoutTravelsInput = {
    update: XOR<RouteUpdateWithoutTravelsInput, RouteUncheckedUpdateWithoutTravelsInput>
    create: XOR<RouteCreateWithoutTravelsInput, RouteUncheckedCreateWithoutTravelsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutTravelsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutTravelsInput, RouteUncheckedUpdateWithoutTravelsInput>
  }

  export type RouteUpdateWithoutTravelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    originLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    originLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buses?: BusUpdateManyWithoutRouteNestedInput
    routeStops?: RouteStopUpdateManyWithoutRouteNestedInput
    schedules?: RouteScheduleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutTravelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    originLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    originLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buses?: BusUncheckedUpdateManyWithoutRouteNestedInput
    routeStops?: RouteStopUncheckedUpdateManyWithoutRouteNestedInput
    schedules?: RouteScheduleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type DriverUpsertWithoutTravelsInput = {
    update: XOR<DriverUpdateWithoutTravelsInput, DriverUncheckedUpdateWithoutTravelsInput>
    create: XOR<DriverCreateWithoutTravelsInput, DriverUncheckedCreateWithoutTravelsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutTravelsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutTravelsInput, DriverUncheckedUpdateWithoutTravelsInput>
  }

  export type DriverUpdateWithoutTravelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    experienceTime?: IntFieldUpdateOperationsInput | number
    effectiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBus?: BusUpdateOneWithoutDriverNestedInput
    feedbacks?: FeedbackUpdateManyWithoutDriverNestedInput
    notifications?: NotificationUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutTravelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    experienceTime?: IntFieldUpdateOperationsInput | number
    effectiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBus?: BusUncheckedUpdateOneWithoutDriverNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutDriverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type BusUpsertWithoutTravelsInput = {
    update: XOR<BusUpdateWithoutTravelsInput, BusUncheckedUpdateWithoutTravelsInput>
    create: XOR<BusCreateWithoutTravelsInput, BusUncheckedCreateWithoutTravelsInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutTravelsInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutTravelsInput, BusUncheckedUpdateWithoutTravelsInput>
  }

  export type BusUpdateWithoutTravelsInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutAssignedBusNestedInput
    route?: RouteUpdateOneRequiredWithoutBusesNestedInput
    feedbacks?: FeedbackUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutTravelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    routeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbacks?: FeedbackUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusCreateWithoutRouteInput = {
    matricula: string
    nia: string
    status?: string
    capacity: number
    currentLoad: number
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: DriverCreateNestedOneWithoutAssignedBusInput
    travels?: TravelCreateNestedManyWithoutBusInput
    feedbacks?: FeedbackCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutRouteInput = {
    id?: number
    matricula: string
    nia: string
    driverId?: number | null
    status?: string
    capacity: number
    currentLoad: number
    createdAt?: Date | string
    updatedAt?: Date | string
    travels?: TravelUncheckedCreateNestedManyWithoutBusInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutRouteInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput>
  }

  export type BusCreateManyRouteInputEnvelope = {
    data: BusCreateManyRouteInput | BusCreateManyRouteInput[]
  }

  export type RouteStopCreateWithoutRouteInput = {
    order?: number | null
    stop: StopCreateNestedOneWithoutRouteStopsInput
  }

  export type RouteStopUncheckedCreateWithoutRouteInput = {
    id?: number
    stopId: number
    order?: number | null
  }

  export type RouteStopCreateOrConnectWithoutRouteInput = {
    where: RouteStopWhereUniqueInput
    create: XOR<RouteStopCreateWithoutRouteInput, RouteStopUncheckedCreateWithoutRouteInput>
  }

  export type RouteStopCreateManyRouteInputEnvelope = {
    data: RouteStopCreateManyRouteInput | RouteStopCreateManyRouteInput[]
  }

  export type TravelCreateWithoutRouteInput = {
    profit: number
    arrivalTime?: Date | string | null
    departureTime?: Date | string | null
    createdAt?: Date | string
    driver: DriverCreateNestedOneWithoutTravelsInput
    bus: BusCreateNestedOneWithoutTravelsInput
  }

  export type TravelUncheckedCreateWithoutRouteInput = {
    id?: number
    driverId: number
    busId: number
    profit: number
    arrivalTime?: Date | string | null
    departureTime?: Date | string | null
    createdAt?: Date | string
  }

  export type TravelCreateOrConnectWithoutRouteInput = {
    where: TravelWhereUniqueInput
    create: XOR<TravelCreateWithoutRouteInput, TravelUncheckedCreateWithoutRouteInput>
  }

  export type TravelCreateManyRouteInputEnvelope = {
    data: TravelCreateManyRouteInput | TravelCreateManyRouteInput[]
  }

  export type RouteScheduleCreateWithoutRouteInput = {
    departureLocation: string
    arrivalLocation: string
    departureTime: Date | string
    arrivalTime: Date | string
    estimatedDurationMinutes: number
    status: string
    distanceKM: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteScheduleUncheckedCreateWithoutRouteInput = {
    id?: number
    departureLocation: string
    arrivalLocation: string
    departureTime: Date | string
    arrivalTime: Date | string
    estimatedDurationMinutes: number
    status: string
    distanceKM: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteScheduleCreateOrConnectWithoutRouteInput = {
    where: RouteScheduleWhereUniqueInput
    create: XOR<RouteScheduleCreateWithoutRouteInput, RouteScheduleUncheckedCreateWithoutRouteInput>
  }

  export type RouteScheduleCreateManyRouteInputEnvelope = {
    data: RouteScheduleCreateManyRouteInput | RouteScheduleCreateManyRouteInput[]
  }

  export type BusUpsertWithWhereUniqueWithoutRouteInput = {
    where: BusWhereUniqueInput
    update: XOR<BusUpdateWithoutRouteInput, BusUncheckedUpdateWithoutRouteInput>
    create: XOR<BusCreateWithoutRouteInput, BusUncheckedCreateWithoutRouteInput>
  }

  export type BusUpdateWithWhereUniqueWithoutRouteInput = {
    where: BusWhereUniqueInput
    data: XOR<BusUpdateWithoutRouteInput, BusUncheckedUpdateWithoutRouteInput>
  }

  export type BusUpdateManyWithWhereWithoutRouteInput = {
    where: BusScalarWhereInput
    data: XOR<BusUpdateManyMutationInput, BusUncheckedUpdateManyWithoutRouteInput>
  }

  export type BusScalarWhereInput = {
    AND?: BusScalarWhereInput | BusScalarWhereInput[]
    OR?: BusScalarWhereInput[]
    NOT?: BusScalarWhereInput | BusScalarWhereInput[]
    id?: IntFilter<"Bus"> | number
    matricula?: StringFilter<"Bus"> | string
    nia?: StringFilter<"Bus"> | string
    driverId?: IntNullableFilter<"Bus"> | number | null
    routeId?: IntFilter<"Bus"> | number
    status?: StringFilter<"Bus"> | string
    capacity?: IntFilter<"Bus"> | number
    currentLoad?: IntFilter<"Bus"> | number
    createdAt?: DateTimeFilter<"Bus"> | Date | string
    updatedAt?: DateTimeFilter<"Bus"> | Date | string
  }

  export type RouteStopUpsertWithWhereUniqueWithoutRouteInput = {
    where: RouteStopWhereUniqueInput
    update: XOR<RouteStopUpdateWithoutRouteInput, RouteStopUncheckedUpdateWithoutRouteInput>
    create: XOR<RouteStopCreateWithoutRouteInput, RouteStopUncheckedCreateWithoutRouteInput>
  }

  export type RouteStopUpdateWithWhereUniqueWithoutRouteInput = {
    where: RouteStopWhereUniqueInput
    data: XOR<RouteStopUpdateWithoutRouteInput, RouteStopUncheckedUpdateWithoutRouteInput>
  }

  export type RouteStopUpdateManyWithWhereWithoutRouteInput = {
    where: RouteStopScalarWhereInput
    data: XOR<RouteStopUpdateManyMutationInput, RouteStopUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteStopScalarWhereInput = {
    AND?: RouteStopScalarWhereInput | RouteStopScalarWhereInput[]
    OR?: RouteStopScalarWhereInput[]
    NOT?: RouteStopScalarWhereInput | RouteStopScalarWhereInput[]
    id?: IntFilter<"RouteStop"> | number
    routeId?: IntFilter<"RouteStop"> | number
    stopId?: IntFilter<"RouteStop"> | number
    order?: IntNullableFilter<"RouteStop"> | number | null
  }

  export type TravelUpsertWithWhereUniqueWithoutRouteInput = {
    where: TravelWhereUniqueInput
    update: XOR<TravelUpdateWithoutRouteInput, TravelUncheckedUpdateWithoutRouteInput>
    create: XOR<TravelCreateWithoutRouteInput, TravelUncheckedCreateWithoutRouteInput>
  }

  export type TravelUpdateWithWhereUniqueWithoutRouteInput = {
    where: TravelWhereUniqueInput
    data: XOR<TravelUpdateWithoutRouteInput, TravelUncheckedUpdateWithoutRouteInput>
  }

  export type TravelUpdateManyWithWhereWithoutRouteInput = {
    where: TravelScalarWhereInput
    data: XOR<TravelUpdateManyMutationInput, TravelUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteScheduleUpsertWithWhereUniqueWithoutRouteInput = {
    where: RouteScheduleWhereUniqueInput
    update: XOR<RouteScheduleUpdateWithoutRouteInput, RouteScheduleUncheckedUpdateWithoutRouteInput>
    create: XOR<RouteScheduleCreateWithoutRouteInput, RouteScheduleUncheckedCreateWithoutRouteInput>
  }

  export type RouteScheduleUpdateWithWhereUniqueWithoutRouteInput = {
    where: RouteScheduleWhereUniqueInput
    data: XOR<RouteScheduleUpdateWithoutRouteInput, RouteScheduleUncheckedUpdateWithoutRouteInput>
  }

  export type RouteScheduleUpdateManyWithWhereWithoutRouteInput = {
    where: RouteScheduleScalarWhereInput
    data: XOR<RouteScheduleUpdateManyMutationInput, RouteScheduleUncheckedUpdateManyWithoutRouteInput>
  }

  export type RouteScheduleScalarWhereInput = {
    AND?: RouteScheduleScalarWhereInput | RouteScheduleScalarWhereInput[]
    OR?: RouteScheduleScalarWhereInput[]
    NOT?: RouteScheduleScalarWhereInput | RouteScheduleScalarWhereInput[]
    id?: IntFilter<"RouteSchedule"> | number
    routeId?: IntFilter<"RouteSchedule"> | number
    departureLocation?: StringFilter<"RouteSchedule"> | string
    arrivalLocation?: StringFilter<"RouteSchedule"> | string
    departureTime?: DateTimeFilter<"RouteSchedule"> | Date | string
    arrivalTime?: DateTimeFilter<"RouteSchedule"> | Date | string
    estimatedDurationMinutes?: IntFilter<"RouteSchedule"> | number
    status?: StringFilter<"RouteSchedule"> | string
    distanceKM?: DecimalFilter<"RouteSchedule"> | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFilter<"RouteSchedule"> | Date | string
    updatedAt?: DateTimeFilter<"RouteSchedule"> | Date | string
  }

  export type RouteCreateWithoutSchedulesInput = {
    name: string
    origin: string
    originLatitude?: number | null
    originLongitude?: number | null
    destination: string
    destinationLatitude?: number | null
    destinationLongitude?: number | null
    status?: string
    buses?: BusCreateNestedManyWithoutRouteInput
    routeStops?: RouteStopCreateNestedManyWithoutRouteInput
    travels?: TravelCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutSchedulesInput = {
    id?: number
    name: string
    origin: string
    originLatitude?: number | null
    originLongitude?: number | null
    destination: string
    destinationLatitude?: number | null
    destinationLongitude?: number | null
    status?: string
    buses?: BusUncheckedCreateNestedManyWithoutRouteInput
    routeStops?: RouteStopUncheckedCreateNestedManyWithoutRouteInput
    travels?: TravelUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutSchedulesInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutSchedulesInput, RouteUncheckedCreateWithoutSchedulesInput>
  }

  export type RouteUpsertWithoutSchedulesInput = {
    update: XOR<RouteUpdateWithoutSchedulesInput, RouteUncheckedUpdateWithoutSchedulesInput>
    create: XOR<RouteCreateWithoutSchedulesInput, RouteUncheckedCreateWithoutSchedulesInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutSchedulesInput, RouteUncheckedUpdateWithoutSchedulesInput>
  }

  export type RouteUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    originLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    originLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buses?: BusUpdateManyWithoutRouteNestedInput
    routeStops?: RouteStopUpdateManyWithoutRouteNestedInput
    travels?: TravelUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    originLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    originLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buses?: BusUncheckedUpdateManyWithoutRouteNestedInput
    routeStops?: RouteStopUncheckedUpdateManyWithoutRouteNestedInput
    travels?: TravelUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type RouteStopCreateWithoutStopInput = {
    order?: number | null
    route: RouteCreateNestedOneWithoutRouteStopsInput
  }

  export type RouteStopUncheckedCreateWithoutStopInput = {
    id?: number
    routeId: number
    order?: number | null
  }

  export type RouteStopCreateOrConnectWithoutStopInput = {
    where: RouteStopWhereUniqueInput
    create: XOR<RouteStopCreateWithoutStopInput, RouteStopUncheckedCreateWithoutStopInput>
  }

  export type RouteStopCreateManyStopInputEnvelope = {
    data: RouteStopCreateManyStopInput | RouteStopCreateManyStopInput[]
  }

  export type RouteStopUpsertWithWhereUniqueWithoutStopInput = {
    where: RouteStopWhereUniqueInput
    update: XOR<RouteStopUpdateWithoutStopInput, RouteStopUncheckedUpdateWithoutStopInput>
    create: XOR<RouteStopCreateWithoutStopInput, RouteStopUncheckedCreateWithoutStopInput>
  }

  export type RouteStopUpdateWithWhereUniqueWithoutStopInput = {
    where: RouteStopWhereUniqueInput
    data: XOR<RouteStopUpdateWithoutStopInput, RouteStopUncheckedUpdateWithoutStopInput>
  }

  export type RouteStopUpdateManyWithWhereWithoutStopInput = {
    where: RouteStopScalarWhereInput
    data: XOR<RouteStopUpdateManyMutationInput, RouteStopUncheckedUpdateManyWithoutStopInput>
  }

  export type RouteCreateWithoutRouteStopsInput = {
    name: string
    origin: string
    originLatitude?: number | null
    originLongitude?: number | null
    destination: string
    destinationLatitude?: number | null
    destinationLongitude?: number | null
    status?: string
    buses?: BusCreateNestedManyWithoutRouteInput
    travels?: TravelCreateNestedManyWithoutRouteInput
    schedules?: RouteScheduleCreateNestedManyWithoutRouteInput
  }

  export type RouteUncheckedCreateWithoutRouteStopsInput = {
    id?: number
    name: string
    origin: string
    originLatitude?: number | null
    originLongitude?: number | null
    destination: string
    destinationLatitude?: number | null
    destinationLongitude?: number | null
    status?: string
    buses?: BusUncheckedCreateNestedManyWithoutRouteInput
    travels?: TravelUncheckedCreateNestedManyWithoutRouteInput
    schedules?: RouteScheduleUncheckedCreateNestedManyWithoutRouteInput
  }

  export type RouteCreateOrConnectWithoutRouteStopsInput = {
    where: RouteWhereUniqueInput
    create: XOR<RouteCreateWithoutRouteStopsInput, RouteUncheckedCreateWithoutRouteStopsInput>
  }

  export type StopCreateWithoutRouteStopsInput = {
    name: string
    latitude?: number | null
    longitude?: number | null
  }

  export type StopUncheckedCreateWithoutRouteStopsInput = {
    id?: number
    name: string
    latitude?: number | null
    longitude?: number | null
  }

  export type StopCreateOrConnectWithoutRouteStopsInput = {
    where: StopWhereUniqueInput
    create: XOR<StopCreateWithoutRouteStopsInput, StopUncheckedCreateWithoutRouteStopsInput>
  }

  export type RouteUpsertWithoutRouteStopsInput = {
    update: XOR<RouteUpdateWithoutRouteStopsInput, RouteUncheckedUpdateWithoutRouteStopsInput>
    create: XOR<RouteCreateWithoutRouteStopsInput, RouteUncheckedCreateWithoutRouteStopsInput>
    where?: RouteWhereInput
  }

  export type RouteUpdateToOneWithWhereWithoutRouteStopsInput = {
    where?: RouteWhereInput
    data: XOR<RouteUpdateWithoutRouteStopsInput, RouteUncheckedUpdateWithoutRouteStopsInput>
  }

  export type RouteUpdateWithoutRouteStopsInput = {
    name?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    originLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    originLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buses?: BusUpdateManyWithoutRouteNestedInput
    travels?: TravelUpdateManyWithoutRouteNestedInput
    schedules?: RouteScheduleUpdateManyWithoutRouteNestedInput
  }

  export type RouteUncheckedUpdateWithoutRouteStopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    origin?: StringFieldUpdateOperationsInput | string
    originLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    originLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destination?: StringFieldUpdateOperationsInput | string
    destinationLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    destinationLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    buses?: BusUncheckedUpdateManyWithoutRouteNestedInput
    travels?: TravelUncheckedUpdateManyWithoutRouteNestedInput
    schedules?: RouteScheduleUncheckedUpdateManyWithoutRouteNestedInput
  }

  export type StopUpsertWithoutRouteStopsInput = {
    update: XOR<StopUpdateWithoutRouteStopsInput, StopUncheckedUpdateWithoutRouteStopsInput>
    create: XOR<StopCreateWithoutRouteStopsInput, StopUncheckedCreateWithoutRouteStopsInput>
    where?: StopWhereInput
  }

  export type StopUpdateToOneWithWhereWithoutRouteStopsInput = {
    where?: StopWhereInput
    data: XOR<StopUpdateWithoutRouteStopsInput, StopUncheckedUpdateWithoutRouteStopsInput>
  }

  export type StopUpdateWithoutRouteStopsInput = {
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StopUncheckedUpdateWithoutRouteStopsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type BusCreateWithoutFeedbacksInput = {
    matricula: string
    nia: string
    status?: string
    capacity: number
    currentLoad: number
    createdAt?: Date | string
    updatedAt?: Date | string
    driver?: DriverCreateNestedOneWithoutAssignedBusInput
    route: RouteCreateNestedOneWithoutBusesInput
    travels?: TravelCreateNestedManyWithoutBusInput
  }

  export type BusUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    matricula: string
    nia: string
    driverId?: number | null
    routeId: number
    status?: string
    capacity: number
    currentLoad: number
    createdAt?: Date | string
    updatedAt?: Date | string
    travels?: TravelUncheckedCreateNestedManyWithoutBusInput
  }

  export type BusCreateOrConnectWithoutFeedbacksInput = {
    where: BusWhereUniqueInput
    create: XOR<BusCreateWithoutFeedbacksInput, BusUncheckedCreateWithoutFeedbacksInput>
  }

  export type UserCreateWithoutFeedbacksInput = {
    name: string
    email: string
    number: string
    password: string
    disability?: string | null
    url_foto_de_perfil?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    name: string
    email: string
    number: string
    password: string
    disability?: string | null
    url_foto_de_perfil?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedbacksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
  }

  export type DriverCreateWithoutFeedbacksInput = {
    name: string
    email: string
    phone: string
    password: string
    licenseNumber: string
    url_foto_de_perfil?: string | null
    experienceTime: number
    effectiveDate?: Date | string | null
    status?: string
    currentLatitude?: number | null
    currentLongitude?: number | null
    lastLogin?: Date | string | null
    deviceToken?: string | null
    isVerified?: boolean
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedBus?: BusCreateNestedOneWithoutDriverInput
    travels?: TravelCreateNestedManyWithoutDriverInput
    notifications?: NotificationCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutFeedbacksInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    licenseNumber: string
    url_foto_de_perfil?: string | null
    experienceTime: number
    effectiveDate?: Date | string | null
    status?: string
    currentLatitude?: number | null
    currentLongitude?: number | null
    lastLogin?: Date | string | null
    deviceToken?: string | null
    isVerified?: boolean
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedBus?: BusUncheckedCreateNestedOneWithoutDriverInput
    travels?: TravelUncheckedCreateNestedManyWithoutDriverInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutFeedbacksInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutFeedbacksInput, DriverUncheckedCreateWithoutFeedbacksInput>
  }

  export type BusUpsertWithoutFeedbacksInput = {
    update: XOR<BusUpdateWithoutFeedbacksInput, BusUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<BusCreateWithoutFeedbacksInput, BusUncheckedCreateWithoutFeedbacksInput>
    where?: BusWhereInput
  }

  export type BusUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: BusWhereInput
    data: XOR<BusUpdateWithoutFeedbacksInput, BusUncheckedUpdateWithoutFeedbacksInput>
  }

  export type BusUpdateWithoutFeedbacksInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutAssignedBusNestedInput
    route?: RouteUpdateOneRequiredWithoutBusesNestedInput
    travels?: TravelUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    routeId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travels?: TravelUncheckedUpdateManyWithoutBusNestedInput
  }

  export type UserUpsertWithoutFeedbacksInput = {
    update: XOR<UserUpdateWithoutFeedbacksInput, UserUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<UserCreateWithoutFeedbacksInput, UserUncheckedCreateWithoutFeedbacksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedbacksInput, UserUncheckedUpdateWithoutFeedbacksInput>
  }

  export type UserUpdateWithoutFeedbacksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DriverUpsertWithoutFeedbacksInput = {
    update: XOR<DriverUpdateWithoutFeedbacksInput, DriverUncheckedUpdateWithoutFeedbacksInput>
    create: XOR<DriverCreateWithoutFeedbacksInput, DriverUncheckedCreateWithoutFeedbacksInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutFeedbacksInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutFeedbacksInput, DriverUncheckedUpdateWithoutFeedbacksInput>
  }

  export type DriverUpdateWithoutFeedbacksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    experienceTime?: IntFieldUpdateOperationsInput | number
    effectiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBus?: BusUpdateOneWithoutDriverNestedInput
    travels?: TravelUpdateManyWithoutDriverNestedInput
    notifications?: NotificationUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutFeedbacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    experienceTime?: IntFieldUpdateOperationsInput | number
    effectiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBus?: BusUncheckedUpdateOneWithoutDriverNestedInput
    travels?: TravelUncheckedUpdateManyWithoutDriverNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    name: string
    email: string
    number: string
    password: string
    disability?: string | null
    url_foto_de_perfil?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    feedbacks?: FeedbackCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name: string
    email: string
    number: string
    password: string
    disability?: string | null
    url_foto_de_perfil?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type DriverCreateWithoutNotificationsInput = {
    name: string
    email: string
    phone: string
    password: string
    licenseNumber: string
    url_foto_de_perfil?: string | null
    experienceTime: number
    effectiveDate?: Date | string | null
    status?: string
    currentLatitude?: number | null
    currentLongitude?: number | null
    lastLogin?: Date | string | null
    deviceToken?: string | null
    isVerified?: boolean
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedBus?: BusCreateNestedOneWithoutDriverInput
    travels?: TravelCreateNestedManyWithoutDriverInput
    feedbacks?: FeedbackCreateNestedManyWithoutDriverInput
  }

  export type DriverUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name: string
    email: string
    phone: string
    password: string
    licenseNumber: string
    url_foto_de_perfil?: string | null
    experienceTime: number
    effectiveDate?: Date | string | null
    status?: string
    currentLatitude?: number | null
    currentLongitude?: number | null
    lastLogin?: Date | string | null
    deviceToken?: string | null
    isVerified?: boolean
    rating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedBus?: BusUncheckedCreateNestedOneWithoutDriverInput
    travels?: TravelUncheckedCreateNestedManyWithoutDriverInput
    feedbacks?: FeedbackUncheckedCreateNestedManyWithoutDriverInput
  }

  export type DriverCreateOrConnectWithoutNotificationsInput = {
    where: DriverWhereUniqueInput
    create: XOR<DriverCreateWithoutNotificationsInput, DriverUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbacks?: FeedbackUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    number?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    disability?: NullableStringFieldUpdateOperationsInput | string | null
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    feedbacks?: FeedbackUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DriverUpsertWithoutNotificationsInput = {
    update: XOR<DriverUpdateWithoutNotificationsInput, DriverUncheckedUpdateWithoutNotificationsInput>
    create: XOR<DriverCreateWithoutNotificationsInput, DriverUncheckedCreateWithoutNotificationsInput>
    where?: DriverWhereInput
  }

  export type DriverUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: DriverWhereInput
    data: XOR<DriverUpdateWithoutNotificationsInput, DriverUncheckedUpdateWithoutNotificationsInput>
  }

  export type DriverUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    experienceTime?: IntFieldUpdateOperationsInput | number
    effectiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBus?: BusUpdateOneWithoutDriverNestedInput
    travels?: TravelUpdateManyWithoutDriverNestedInput
    feedbacks?: FeedbackUpdateManyWithoutDriverNestedInput
  }

  export type DriverUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    licenseNumber?: StringFieldUpdateOperationsInput | string
    url_foto_de_perfil?: NullableStringFieldUpdateOperationsInput | string | null
    experienceTime?: IntFieldUpdateOperationsInput | number
    effectiveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    currentLatitude?: NullableFloatFieldUpdateOperationsInput | number | null
    currentLongitude?: NullableFloatFieldUpdateOperationsInput | number | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deviceToken?: NullableStringFieldUpdateOperationsInput | string | null
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedBus?: BusUncheckedUpdateOneWithoutDriverNestedInput
    travels?: TravelUncheckedUpdateManyWithoutDriverNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutDriverNestedInput
  }

  export type FeedbackCreateManyUserInput = {
    id?: number
    busId: number
    driverId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyUserInput = {
    id?: number
    driverId: number
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type FeedbackUpdateWithoutUserInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutFeedbacksNestedInput
    driver?: DriverUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelCreateManyDriverInput = {
    id?: number
    routeId: number
    busId: number
    profit: number
    arrivalTime?: Date | string | null
    departureTime?: Date | string | null
    createdAt?: Date | string
  }

  export type FeedbackCreateManyDriverInput = {
    id?: number
    userId: number
    busId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type NotificationCreateManyDriverInput = {
    id?: number
    userId: number
    title: string
    message: string
    read?: boolean
    createdAt?: Date | string
  }

  export type TravelUpdateWithoutDriverInput = {
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutTravelsNestedInput
    bus?: BusUpdateOneRequiredWithoutTravelsNestedInput
  }

  export type TravelUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutDriverInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    bus?: BusUpdateOneRequiredWithoutFeedbacksNestedInput
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUpdateWithoutDriverInput = {
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyWithoutDriverInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    read?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelCreateManyBusInput = {
    id?: number
    routeId: number
    driverId: number
    profit: number
    arrivalTime?: Date | string | null
    departureTime?: Date | string | null
    createdAt?: Date | string
  }

  export type FeedbackCreateManyBusInput = {
    id?: number
    userId: number
    driverId: number
    rating: number
    comment: string
    createdAt?: Date | string
  }

  export type TravelUpdateWithoutBusInput = {
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    route?: RouteUpdateOneRequiredWithoutTravelsNestedInput
    driver?: DriverUpdateOneRequiredWithoutTravelsNestedInput
  }

  export type TravelUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUpdateWithoutBusInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFeedbacksNestedInput
    driver?: DriverUpdateOneRequiredWithoutFeedbacksNestedInput
  }

  export type FeedbackUncheckedUpdateWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FeedbackUncheckedUpdateManyWithoutBusInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusCreateManyRouteInput = {
    id?: number
    matricula: string
    nia: string
    driverId?: number | null
    status?: string
    capacity: number
    currentLoad: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RouteStopCreateManyRouteInput = {
    id?: number
    stopId: number
    order?: number | null
  }

  export type TravelCreateManyRouteInput = {
    id?: number
    driverId: number
    busId: number
    profit: number
    arrivalTime?: Date | string | null
    departureTime?: Date | string | null
    createdAt?: Date | string
  }

  export type RouteScheduleCreateManyRouteInput = {
    id?: number
    departureLocation: string
    arrivalLocation: string
    departureTime: Date | string
    arrivalTime: Date | string
    estimatedDurationMinutes: number
    status: string
    distanceKM: Decimal | DecimalJsLike | number | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BusUpdateWithoutRouteInput = {
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneWithoutAssignedBusNestedInput
    travels?: TravelUpdateManyWithoutBusNestedInput
    feedbacks?: FeedbackUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    travels?: TravelUncheckedUpdateManyWithoutBusNestedInput
    feedbacks?: FeedbackUncheckedUpdateManyWithoutBusNestedInput
  }

  export type BusUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    matricula?: StringFieldUpdateOperationsInput | string
    nia?: StringFieldUpdateOperationsInput | string
    driverId?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    capacity?: IntFieldUpdateOperationsInput | number
    currentLoad?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteStopUpdateWithoutRouteInput = {
    order?: NullableIntFieldUpdateOperationsInput | number | null
    stop?: StopUpdateOneRequiredWithoutRouteStopsNestedInput
  }

  export type RouteStopUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    stopId?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RouteStopUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    stopId?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TravelUpdateWithoutRouteInput = {
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    driver?: DriverUpdateOneRequiredWithoutTravelsNestedInput
    bus?: BusUpdateOneRequiredWithoutTravelsNestedInput
  }

  export type TravelUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TravelUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    driverId?: IntFieldUpdateOperationsInput | number
    busId?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    arrivalTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    departureTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteScheduleUpdateWithoutRouteInput = {
    departureLocation?: StringFieldUpdateOperationsInput | string
    arrivalLocation?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDurationMinutes?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    distanceKM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteScheduleUncheckedUpdateWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    departureLocation?: StringFieldUpdateOperationsInput | string
    arrivalLocation?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDurationMinutes?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    distanceKM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteScheduleUncheckedUpdateManyWithoutRouteInput = {
    id?: IntFieldUpdateOperationsInput | number
    departureLocation?: StringFieldUpdateOperationsInput | string
    arrivalLocation?: StringFieldUpdateOperationsInput | string
    departureTime?: DateTimeFieldUpdateOperationsInput | Date | string
    arrivalTime?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDurationMinutes?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    distanceKM?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RouteStopCreateManyStopInput = {
    id?: number
    routeId: number
    order?: number | null
  }

  export type RouteStopUpdateWithoutStopInput = {
    order?: NullableIntFieldUpdateOperationsInput | number | null
    route?: RouteUpdateOneRequiredWithoutRouteStopsNestedInput
  }

  export type RouteStopUncheckedUpdateWithoutStopInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RouteStopUncheckedUpdateManyWithoutStopInput = {
    id?: IntFieldUpdateOperationsInput | number
    routeId?: IntFieldUpdateOperationsInput | number
    order?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}