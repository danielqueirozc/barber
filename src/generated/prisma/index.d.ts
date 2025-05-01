
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
 * Model Barbershop
 * 
 */
export type Barbershop = $Result.DefaultSelection<Prisma.$BarbershopPayload>
/**
 * Model BarbershopService
 * 
 */
export type BarbershopService = $Result.DefaultSelection<Prisma.$BarbershopServicePayload>

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
   * `prisma.barbershop`: Exposes CRUD operations for the **Barbershop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Barbershops
    * const barbershops = await prisma.barbershop.findMany()
    * ```
    */
  get barbershop(): Prisma.BarbershopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.barbershopService`: Exposes CRUD operations for the **BarbershopService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BarbershopServices
    * const barbershopServices = await prisma.barbershopService.findMany()
    * ```
    */
  get barbershopService(): Prisma.BarbershopServiceDelegate<ExtArgs, ClientOptions>;
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
    Barbershop: 'Barbershop',
    BarbershopService: 'BarbershopService'
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
      modelProps: "user" | "barbershop" | "barbershopService"
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
      Barbershop: {
        payload: Prisma.$BarbershopPayload<ExtArgs>
        fields: Prisma.BarbershopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarbershopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarbershopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          findFirst: {
            args: Prisma.BarbershopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarbershopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          findMany: {
            args: Prisma.BarbershopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>[]
          }
          create: {
            args: Prisma.BarbershopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          createMany: {
            args: Prisma.BarbershopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarbershopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>[]
          }
          delete: {
            args: Prisma.BarbershopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          update: {
            args: Prisma.BarbershopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          deleteMany: {
            args: Prisma.BarbershopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarbershopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarbershopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>[]
          }
          upsert: {
            args: Prisma.BarbershopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopPayload>
          }
          aggregate: {
            args: Prisma.BarbershopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarbershop>
          }
          groupBy: {
            args: Prisma.BarbershopGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarbershopGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarbershopCountArgs<ExtArgs>
            result: $Utils.Optional<BarbershopCountAggregateOutputType> | number
          }
        }
      }
      BarbershopService: {
        payload: Prisma.$BarbershopServicePayload<ExtArgs>
        fields: Prisma.BarbershopServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BarbershopServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BarbershopServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>
          }
          findFirst: {
            args: Prisma.BarbershopServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BarbershopServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>
          }
          findMany: {
            args: Prisma.BarbershopServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>[]
          }
          create: {
            args: Prisma.BarbershopServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>
          }
          createMany: {
            args: Prisma.BarbershopServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BarbershopServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>[]
          }
          delete: {
            args: Prisma.BarbershopServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>
          }
          update: {
            args: Prisma.BarbershopServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>
          }
          deleteMany: {
            args: Prisma.BarbershopServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BarbershopServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BarbershopServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>[]
          }
          upsert: {
            args: Prisma.BarbershopServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BarbershopServicePayload>
          }
          aggregate: {
            args: Prisma.BarbershopServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBarbershopService>
          }
          groupBy: {
            args: Prisma.BarbershopServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<BarbershopServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.BarbershopServiceCountArgs<ExtArgs>
            result: $Utils.Optional<BarbershopServiceCountAggregateOutputType> | number
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
    barbershop?: BarbershopOmit
    barbershopService?: BarbershopServiceOmit
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
    barbershop: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | UserCountOutputTypeCountBarbershopArgs
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
  export type UserCountOutputTypeCountBarbershopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarbershopWhereInput
  }


  /**
   * Count Type BarbershopCountOutputType
   */

  export type BarbershopCountOutputType = {
    service: number
  }

  export type BarbershopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | BarbershopCountOutputTypeCountServiceArgs
  }

  // Custom InputTypes
  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopCountOutputType
     */
    select?: BarbershopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BarbershopCountOutputType without action
   */
  export type BarbershopCountOutputTypeCountServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarbershopServiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    barbershop?: boolean | User$barbershopArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | User$barbershopArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      barbershop: Prisma.$BarbershopPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
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
    barbershop<T extends User$barbershopArgs<ExtArgs> = {}>(args?: Subset<T, User$barbershopArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * User.barbershop
   */
  export type User$barbershopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    where?: BarbershopWhereInput
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    cursor?: BarbershopWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
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
   * Model Barbershop
   */

  export type AggregateBarbershop = {
    _count: BarbershopCountAggregateOutputType | null
    _min: BarbershopMinAggregateOutputType | null
    _max: BarbershopMaxAggregateOutputType | null
  }

  export type BarbershopMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BarbershopMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    description: string | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type BarbershopCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phone: number
    description: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type BarbershopMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BarbershopMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type BarbershopCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phone?: true
    description?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type BarbershopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barbershop to aggregate.
     */
    where?: BarbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbershops to fetch.
     */
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbershops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Barbershops
    **/
    _count?: true | BarbershopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarbershopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarbershopMaxAggregateInputType
  }

  export type GetBarbershopAggregateType<T extends BarbershopAggregateArgs> = {
        [P in keyof T & keyof AggregateBarbershop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarbershop[P]>
      : GetScalarType<T[P], AggregateBarbershop[P]>
  }




  export type BarbershopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarbershopWhereInput
    orderBy?: BarbershopOrderByWithAggregationInput | BarbershopOrderByWithAggregationInput[]
    by: BarbershopScalarFieldEnum[] | BarbershopScalarFieldEnum
    having?: BarbershopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarbershopCountAggregateInputType | true
    _min?: BarbershopMinAggregateInputType
    _max?: BarbershopMaxAggregateInputType
  }

  export type BarbershopGroupByOutputType = {
    id: string
    name: string
    address: string
    phone: string[]
    description: string
    imageUrl: string
    createdAt: Date
    updatedAt: Date
    userId: string
    _count: BarbershopCountAggregateOutputType | null
    _min: BarbershopMinAggregateOutputType | null
    _max: BarbershopMaxAggregateOutputType | null
  }

  type GetBarbershopGroupByPayload<T extends BarbershopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarbershopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarbershopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarbershopGroupByOutputType[P]>
            : GetScalarType<T[P], BarbershopGroupByOutputType[P]>
        }
      >
    >


  export type BarbershopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | Barbershop$serviceArgs<ExtArgs>
    _count?: boolean | BarbershopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershop"]>

  export type BarbershopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershop"]>

  export type BarbershopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershop"]>

  export type BarbershopSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phone?: boolean
    description?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type BarbershopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "phone" | "description" | "imageUrl" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["barbershop"]>
  export type BarbershopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    service?: boolean | Barbershop$serviceArgs<ExtArgs>
    _count?: boolean | BarbershopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BarbershopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BarbershopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BarbershopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Barbershop"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      service: Prisma.$BarbershopServicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phone: string[]
      description: string
      imageUrl: string
      createdAt: Date
      updatedAt: Date
      userId: string
    }, ExtArgs["result"]["barbershop"]>
    composites: {}
  }

  type BarbershopGetPayload<S extends boolean | null | undefined | BarbershopDefaultArgs> = $Result.GetResult<Prisma.$BarbershopPayload, S>

  type BarbershopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarbershopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarbershopCountAggregateInputType | true
    }

  export interface BarbershopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Barbershop'], meta: { name: 'Barbershop' } }
    /**
     * Find zero or one Barbershop that matches the filter.
     * @param {BarbershopFindUniqueArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarbershopFindUniqueArgs>(args: SelectSubset<T, BarbershopFindUniqueArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Barbershop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarbershopFindUniqueOrThrowArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarbershopFindUniqueOrThrowArgs>(args: SelectSubset<T, BarbershopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barbershop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopFindFirstArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarbershopFindFirstArgs>(args?: SelectSubset<T, BarbershopFindFirstArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Barbershop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopFindFirstOrThrowArgs} args - Arguments to find a Barbershop
     * @example
     * // Get one Barbershop
     * const barbershop = await prisma.barbershop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarbershopFindFirstOrThrowArgs>(args?: SelectSubset<T, BarbershopFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Barbershops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Barbershops
     * const barbershops = await prisma.barbershop.findMany()
     * 
     * // Get first 10 Barbershops
     * const barbershops = await prisma.barbershop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barbershopWithIdOnly = await prisma.barbershop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarbershopFindManyArgs>(args?: SelectSubset<T, BarbershopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Barbershop.
     * @param {BarbershopCreateArgs} args - Arguments to create a Barbershop.
     * @example
     * // Create one Barbershop
     * const Barbershop = await prisma.barbershop.create({
     *   data: {
     *     // ... data to create a Barbershop
     *   }
     * })
     * 
     */
    create<T extends BarbershopCreateArgs>(args: SelectSubset<T, BarbershopCreateArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Barbershops.
     * @param {BarbershopCreateManyArgs} args - Arguments to create many Barbershops.
     * @example
     * // Create many Barbershops
     * const barbershop = await prisma.barbershop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarbershopCreateManyArgs>(args?: SelectSubset<T, BarbershopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Barbershops and returns the data saved in the database.
     * @param {BarbershopCreateManyAndReturnArgs} args - Arguments to create many Barbershops.
     * @example
     * // Create many Barbershops
     * const barbershop = await prisma.barbershop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Barbershops and only return the `id`
     * const barbershopWithIdOnly = await prisma.barbershop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarbershopCreateManyAndReturnArgs>(args?: SelectSubset<T, BarbershopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Barbershop.
     * @param {BarbershopDeleteArgs} args - Arguments to delete one Barbershop.
     * @example
     * // Delete one Barbershop
     * const Barbershop = await prisma.barbershop.delete({
     *   where: {
     *     // ... filter to delete one Barbershop
     *   }
     * })
     * 
     */
    delete<T extends BarbershopDeleteArgs>(args: SelectSubset<T, BarbershopDeleteArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Barbershop.
     * @param {BarbershopUpdateArgs} args - Arguments to update one Barbershop.
     * @example
     * // Update one Barbershop
     * const barbershop = await prisma.barbershop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarbershopUpdateArgs>(args: SelectSubset<T, BarbershopUpdateArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Barbershops.
     * @param {BarbershopDeleteManyArgs} args - Arguments to filter Barbershops to delete.
     * @example
     * // Delete a few Barbershops
     * const { count } = await prisma.barbershop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarbershopDeleteManyArgs>(args?: SelectSubset<T, BarbershopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbershops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Barbershops
     * const barbershop = await prisma.barbershop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarbershopUpdateManyArgs>(args: SelectSubset<T, BarbershopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Barbershops and returns the data updated in the database.
     * @param {BarbershopUpdateManyAndReturnArgs} args - Arguments to update many Barbershops.
     * @example
     * // Update many Barbershops
     * const barbershop = await prisma.barbershop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Barbershops and only return the `id`
     * const barbershopWithIdOnly = await prisma.barbershop.updateManyAndReturn({
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
    updateManyAndReturn<T extends BarbershopUpdateManyAndReturnArgs>(args: SelectSubset<T, BarbershopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Barbershop.
     * @param {BarbershopUpsertArgs} args - Arguments to update or create a Barbershop.
     * @example
     * // Update or create a Barbershop
     * const barbershop = await prisma.barbershop.upsert({
     *   create: {
     *     // ... data to create a Barbershop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Barbershop we want to update
     *   }
     * })
     */
    upsert<T extends BarbershopUpsertArgs>(args: SelectSubset<T, BarbershopUpsertArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Barbershops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopCountArgs} args - Arguments to filter Barbershops to count.
     * @example
     * // Count the number of Barbershops
     * const count = await prisma.barbershop.count({
     *   where: {
     *     // ... the filter for the Barbershops we want to count
     *   }
     * })
    **/
    count<T extends BarbershopCountArgs>(
      args?: Subset<T, BarbershopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarbershopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Barbershop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarbershopAggregateArgs>(args: Subset<T, BarbershopAggregateArgs>): Prisma.PrismaPromise<GetBarbershopAggregateType<T>>

    /**
     * Group by Barbershop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopGroupByArgs} args - Group by arguments.
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
      T extends BarbershopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarbershopGroupByArgs['orderBy'] }
        : { orderBy?: BarbershopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarbershopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarbershopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Barbershop model
   */
  readonly fields: BarbershopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Barbershop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarbershopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends Barbershop$serviceArgs<ExtArgs> = {}>(args?: Subset<T, Barbershop$serviceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Barbershop model
   */
  interface BarbershopFieldRefs {
    readonly id: FieldRef<"Barbershop", 'String'>
    readonly name: FieldRef<"Barbershop", 'String'>
    readonly address: FieldRef<"Barbershop", 'String'>
    readonly phone: FieldRef<"Barbershop", 'String[]'>
    readonly description: FieldRef<"Barbershop", 'String'>
    readonly imageUrl: FieldRef<"Barbershop", 'String'>
    readonly createdAt: FieldRef<"Barbershop", 'DateTime'>
    readonly updatedAt: FieldRef<"Barbershop", 'DateTime'>
    readonly userId: FieldRef<"Barbershop", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Barbershop findUnique
   */
  export type BarbershopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershop to fetch.
     */
    where: BarbershopWhereUniqueInput
  }

  /**
   * Barbershop findUniqueOrThrow
   */
  export type BarbershopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershop to fetch.
     */
    where: BarbershopWhereUniqueInput
  }

  /**
   * Barbershop findFirst
   */
  export type BarbershopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershop to fetch.
     */
    where?: BarbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbershops to fetch.
     */
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barbershops.
     */
    cursor?: BarbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbershops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbershops.
     */
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
  }

  /**
   * Barbershop findFirstOrThrow
   */
  export type BarbershopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershop to fetch.
     */
    where?: BarbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbershops to fetch.
     */
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Barbershops.
     */
    cursor?: BarbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbershops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Barbershops.
     */
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
  }

  /**
   * Barbershop findMany
   */
  export type BarbershopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter, which Barbershops to fetch.
     */
    where?: BarbershopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Barbershops to fetch.
     */
    orderBy?: BarbershopOrderByWithRelationInput | BarbershopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Barbershops.
     */
    cursor?: BarbershopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Barbershops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Barbershops.
     */
    skip?: number
    distinct?: BarbershopScalarFieldEnum | BarbershopScalarFieldEnum[]
  }

  /**
   * Barbershop create
   */
  export type BarbershopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * The data needed to create a Barbershop.
     */
    data: XOR<BarbershopCreateInput, BarbershopUncheckedCreateInput>
  }

  /**
   * Barbershop createMany
   */
  export type BarbershopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Barbershops.
     */
    data: BarbershopCreateManyInput | BarbershopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Barbershop createManyAndReturn
   */
  export type BarbershopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * The data used to create many Barbershops.
     */
    data: BarbershopCreateManyInput | BarbershopCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Barbershop update
   */
  export type BarbershopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * The data needed to update a Barbershop.
     */
    data: XOR<BarbershopUpdateInput, BarbershopUncheckedUpdateInput>
    /**
     * Choose, which Barbershop to update.
     */
    where: BarbershopWhereUniqueInput
  }

  /**
   * Barbershop updateMany
   */
  export type BarbershopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Barbershops.
     */
    data: XOR<BarbershopUpdateManyMutationInput, BarbershopUncheckedUpdateManyInput>
    /**
     * Filter which Barbershops to update
     */
    where?: BarbershopWhereInput
    /**
     * Limit how many Barbershops to update.
     */
    limit?: number
  }

  /**
   * Barbershop updateManyAndReturn
   */
  export type BarbershopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * The data used to update Barbershops.
     */
    data: XOR<BarbershopUpdateManyMutationInput, BarbershopUncheckedUpdateManyInput>
    /**
     * Filter which Barbershops to update
     */
    where?: BarbershopWhereInput
    /**
     * Limit how many Barbershops to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Barbershop upsert
   */
  export type BarbershopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * The filter to search for the Barbershop to update in case it exists.
     */
    where: BarbershopWhereUniqueInput
    /**
     * In case the Barbershop found by the `where` argument doesn't exist, create a new Barbershop with this data.
     */
    create: XOR<BarbershopCreateInput, BarbershopUncheckedCreateInput>
    /**
     * In case the Barbershop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarbershopUpdateInput, BarbershopUncheckedUpdateInput>
  }

  /**
   * Barbershop delete
   */
  export type BarbershopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
    /**
     * Filter which Barbershop to delete.
     */
    where: BarbershopWhereUniqueInput
  }

  /**
   * Barbershop deleteMany
   */
  export type BarbershopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Barbershops to delete
     */
    where?: BarbershopWhereInput
    /**
     * Limit how many Barbershops to delete.
     */
    limit?: number
  }

  /**
   * Barbershop.service
   */
  export type Barbershop$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    where?: BarbershopServiceWhereInput
    orderBy?: BarbershopServiceOrderByWithRelationInput | BarbershopServiceOrderByWithRelationInput[]
    cursor?: BarbershopServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BarbershopServiceScalarFieldEnum | BarbershopServiceScalarFieldEnum[]
  }

  /**
   * Barbershop without action
   */
  export type BarbershopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Barbershop
     */
    select?: BarbershopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Barbershop
     */
    omit?: BarbershopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopInclude<ExtArgs> | null
  }


  /**
   * Model BarbershopService
   */

  export type AggregateBarbershopService = {
    _count: BarbershopServiceCountAggregateOutputType | null
    _avg: BarbershopServiceAvgAggregateOutputType | null
    _sum: BarbershopServiceSumAggregateOutputType | null
    _min: BarbershopServiceMinAggregateOutputType | null
    _max: BarbershopServiceMaxAggregateOutputType | null
  }

  export type BarbershopServiceAvgAggregateOutputType = {
    price: Decimal | null
  }

  export type BarbershopServiceSumAggregateOutputType = {
    price: Decimal | null
  }

  export type BarbershopServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    description: string | null
    imageUrl: string | null
    barbershopId: string | null
  }

  export type BarbershopServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: Decimal | null
    description: string | null
    imageUrl: string | null
    barbershopId: string | null
  }

  export type BarbershopServiceCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    imageUrl: number
    barbershopId: number
    _all: number
  }


  export type BarbershopServiceAvgAggregateInputType = {
    price?: true
  }

  export type BarbershopServiceSumAggregateInputType = {
    price?: true
  }

  export type BarbershopServiceMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    imageUrl?: true
    barbershopId?: true
  }

  export type BarbershopServiceMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    imageUrl?: true
    barbershopId?: true
  }

  export type BarbershopServiceCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    imageUrl?: true
    barbershopId?: true
    _all?: true
  }

  export type BarbershopServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarbershopService to aggregate.
     */
    where?: BarbershopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarbershopServices to fetch.
     */
    orderBy?: BarbershopServiceOrderByWithRelationInput | BarbershopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BarbershopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarbershopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarbershopServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BarbershopServices
    **/
    _count?: true | BarbershopServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BarbershopServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BarbershopServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BarbershopServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BarbershopServiceMaxAggregateInputType
  }

  export type GetBarbershopServiceAggregateType<T extends BarbershopServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateBarbershopService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBarbershopService[P]>
      : GetScalarType<T[P], AggregateBarbershopService[P]>
  }




  export type BarbershopServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BarbershopServiceWhereInput
    orderBy?: BarbershopServiceOrderByWithAggregationInput | BarbershopServiceOrderByWithAggregationInput[]
    by: BarbershopServiceScalarFieldEnum[] | BarbershopServiceScalarFieldEnum
    having?: BarbershopServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BarbershopServiceCountAggregateInputType | true
    _avg?: BarbershopServiceAvgAggregateInputType
    _sum?: BarbershopServiceSumAggregateInputType
    _min?: BarbershopServiceMinAggregateInputType
    _max?: BarbershopServiceMaxAggregateInputType
  }

  export type BarbershopServiceGroupByOutputType = {
    id: string
    name: string
    price: Decimal
    description: string
    imageUrl: string
    barbershopId: string
    _count: BarbershopServiceCountAggregateOutputType | null
    _avg: BarbershopServiceAvgAggregateOutputType | null
    _sum: BarbershopServiceSumAggregateOutputType | null
    _min: BarbershopServiceMinAggregateOutputType | null
    _max: BarbershopServiceMaxAggregateOutputType | null
  }

  type GetBarbershopServiceGroupByPayload<T extends BarbershopServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BarbershopServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BarbershopServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BarbershopServiceGroupByOutputType[P]>
            : GetScalarType<T[P], BarbershopServiceGroupByOutputType[P]>
        }
      >
    >


  export type BarbershopServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    imageUrl?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershopService"]>

  export type BarbershopServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    imageUrl?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershopService"]>

  export type BarbershopServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    imageUrl?: boolean
    barbershopId?: boolean
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["barbershopService"]>

  export type BarbershopServiceSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    imageUrl?: boolean
    barbershopId?: boolean
  }

  export type BarbershopServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "description" | "imageUrl" | "barbershopId", ExtArgs["result"]["barbershopService"]>
  export type BarbershopServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }
  export type BarbershopServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }
  export type BarbershopServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    barbershop?: boolean | BarbershopDefaultArgs<ExtArgs>
  }

  export type $BarbershopServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BarbershopService"
    objects: {
      barbershop: Prisma.$BarbershopPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: Prisma.Decimal
      description: string
      imageUrl: string
      barbershopId: string
    }, ExtArgs["result"]["barbershopService"]>
    composites: {}
  }

  type BarbershopServiceGetPayload<S extends boolean | null | undefined | BarbershopServiceDefaultArgs> = $Result.GetResult<Prisma.$BarbershopServicePayload, S>

  type BarbershopServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BarbershopServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BarbershopServiceCountAggregateInputType | true
    }

  export interface BarbershopServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BarbershopService'], meta: { name: 'BarbershopService' } }
    /**
     * Find zero or one BarbershopService that matches the filter.
     * @param {BarbershopServiceFindUniqueArgs} args - Arguments to find a BarbershopService
     * @example
     * // Get one BarbershopService
     * const barbershopService = await prisma.barbershopService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BarbershopServiceFindUniqueArgs>(args: SelectSubset<T, BarbershopServiceFindUniqueArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BarbershopService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BarbershopServiceFindUniqueOrThrowArgs} args - Arguments to find a BarbershopService
     * @example
     * // Get one BarbershopService
     * const barbershopService = await prisma.barbershopService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BarbershopServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, BarbershopServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarbershopService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceFindFirstArgs} args - Arguments to find a BarbershopService
     * @example
     * // Get one BarbershopService
     * const barbershopService = await prisma.barbershopService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BarbershopServiceFindFirstArgs>(args?: SelectSubset<T, BarbershopServiceFindFirstArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BarbershopService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceFindFirstOrThrowArgs} args - Arguments to find a BarbershopService
     * @example
     * // Get one BarbershopService
     * const barbershopService = await prisma.barbershopService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BarbershopServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, BarbershopServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BarbershopServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BarbershopServices
     * const barbershopServices = await prisma.barbershopService.findMany()
     * 
     * // Get first 10 BarbershopServices
     * const barbershopServices = await prisma.barbershopService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const barbershopServiceWithIdOnly = await prisma.barbershopService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BarbershopServiceFindManyArgs>(args?: SelectSubset<T, BarbershopServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BarbershopService.
     * @param {BarbershopServiceCreateArgs} args - Arguments to create a BarbershopService.
     * @example
     * // Create one BarbershopService
     * const BarbershopService = await prisma.barbershopService.create({
     *   data: {
     *     // ... data to create a BarbershopService
     *   }
     * })
     * 
     */
    create<T extends BarbershopServiceCreateArgs>(args: SelectSubset<T, BarbershopServiceCreateArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BarbershopServices.
     * @param {BarbershopServiceCreateManyArgs} args - Arguments to create many BarbershopServices.
     * @example
     * // Create many BarbershopServices
     * const barbershopService = await prisma.barbershopService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BarbershopServiceCreateManyArgs>(args?: SelectSubset<T, BarbershopServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BarbershopServices and returns the data saved in the database.
     * @param {BarbershopServiceCreateManyAndReturnArgs} args - Arguments to create many BarbershopServices.
     * @example
     * // Create many BarbershopServices
     * const barbershopService = await prisma.barbershopService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BarbershopServices and only return the `id`
     * const barbershopServiceWithIdOnly = await prisma.barbershopService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BarbershopServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, BarbershopServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a BarbershopService.
     * @param {BarbershopServiceDeleteArgs} args - Arguments to delete one BarbershopService.
     * @example
     * // Delete one BarbershopService
     * const BarbershopService = await prisma.barbershopService.delete({
     *   where: {
     *     // ... filter to delete one BarbershopService
     *   }
     * })
     * 
     */
    delete<T extends BarbershopServiceDeleteArgs>(args: SelectSubset<T, BarbershopServiceDeleteArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BarbershopService.
     * @param {BarbershopServiceUpdateArgs} args - Arguments to update one BarbershopService.
     * @example
     * // Update one BarbershopService
     * const barbershopService = await prisma.barbershopService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BarbershopServiceUpdateArgs>(args: SelectSubset<T, BarbershopServiceUpdateArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BarbershopServices.
     * @param {BarbershopServiceDeleteManyArgs} args - Arguments to filter BarbershopServices to delete.
     * @example
     * // Delete a few BarbershopServices
     * const { count } = await prisma.barbershopService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BarbershopServiceDeleteManyArgs>(args?: SelectSubset<T, BarbershopServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarbershopServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BarbershopServices
     * const barbershopService = await prisma.barbershopService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BarbershopServiceUpdateManyArgs>(args: SelectSubset<T, BarbershopServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BarbershopServices and returns the data updated in the database.
     * @param {BarbershopServiceUpdateManyAndReturnArgs} args - Arguments to update many BarbershopServices.
     * @example
     * // Update many BarbershopServices
     * const barbershopService = await prisma.barbershopService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more BarbershopServices and only return the `id`
     * const barbershopServiceWithIdOnly = await prisma.barbershopService.updateManyAndReturn({
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
    updateManyAndReturn<T extends BarbershopServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, BarbershopServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one BarbershopService.
     * @param {BarbershopServiceUpsertArgs} args - Arguments to update or create a BarbershopService.
     * @example
     * // Update or create a BarbershopService
     * const barbershopService = await prisma.barbershopService.upsert({
     *   create: {
     *     // ... data to create a BarbershopService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BarbershopService we want to update
     *   }
     * })
     */
    upsert<T extends BarbershopServiceUpsertArgs>(args: SelectSubset<T, BarbershopServiceUpsertArgs<ExtArgs>>): Prisma__BarbershopServiceClient<$Result.GetResult<Prisma.$BarbershopServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BarbershopServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceCountArgs} args - Arguments to filter BarbershopServices to count.
     * @example
     * // Count the number of BarbershopServices
     * const count = await prisma.barbershopService.count({
     *   where: {
     *     // ... the filter for the BarbershopServices we want to count
     *   }
     * })
    **/
    count<T extends BarbershopServiceCountArgs>(
      args?: Subset<T, BarbershopServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BarbershopServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BarbershopService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BarbershopServiceAggregateArgs>(args: Subset<T, BarbershopServiceAggregateArgs>): Prisma.PrismaPromise<GetBarbershopServiceAggregateType<T>>

    /**
     * Group by BarbershopService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BarbershopServiceGroupByArgs} args - Group by arguments.
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
      T extends BarbershopServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BarbershopServiceGroupByArgs['orderBy'] }
        : { orderBy?: BarbershopServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BarbershopServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBarbershopServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BarbershopService model
   */
  readonly fields: BarbershopServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BarbershopService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BarbershopServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    barbershop<T extends BarbershopDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BarbershopDefaultArgs<ExtArgs>>): Prisma__BarbershopClient<$Result.GetResult<Prisma.$BarbershopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BarbershopService model
   */
  interface BarbershopServiceFieldRefs {
    readonly id: FieldRef<"BarbershopService", 'String'>
    readonly name: FieldRef<"BarbershopService", 'String'>
    readonly price: FieldRef<"BarbershopService", 'Decimal'>
    readonly description: FieldRef<"BarbershopService", 'String'>
    readonly imageUrl: FieldRef<"BarbershopService", 'String'>
    readonly barbershopId: FieldRef<"BarbershopService", 'String'>
  }
    

  // Custom InputTypes
  /**
   * BarbershopService findUnique
   */
  export type BarbershopServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopService to fetch.
     */
    where: BarbershopServiceWhereUniqueInput
  }

  /**
   * BarbershopService findUniqueOrThrow
   */
  export type BarbershopServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopService to fetch.
     */
    where: BarbershopServiceWhereUniqueInput
  }

  /**
   * BarbershopService findFirst
   */
  export type BarbershopServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopService to fetch.
     */
    where?: BarbershopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarbershopServices to fetch.
     */
    orderBy?: BarbershopServiceOrderByWithRelationInput | BarbershopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarbershopServices.
     */
    cursor?: BarbershopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarbershopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarbershopServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarbershopServices.
     */
    distinct?: BarbershopServiceScalarFieldEnum | BarbershopServiceScalarFieldEnum[]
  }

  /**
   * BarbershopService findFirstOrThrow
   */
  export type BarbershopServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopService to fetch.
     */
    where?: BarbershopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarbershopServices to fetch.
     */
    orderBy?: BarbershopServiceOrderByWithRelationInput | BarbershopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BarbershopServices.
     */
    cursor?: BarbershopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarbershopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarbershopServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BarbershopServices.
     */
    distinct?: BarbershopServiceScalarFieldEnum | BarbershopServiceScalarFieldEnum[]
  }

  /**
   * BarbershopService findMany
   */
  export type BarbershopServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * Filter, which BarbershopServices to fetch.
     */
    where?: BarbershopServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BarbershopServices to fetch.
     */
    orderBy?: BarbershopServiceOrderByWithRelationInput | BarbershopServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BarbershopServices.
     */
    cursor?: BarbershopServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BarbershopServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BarbershopServices.
     */
    skip?: number
    distinct?: BarbershopServiceScalarFieldEnum | BarbershopServiceScalarFieldEnum[]
  }

  /**
   * BarbershopService create
   */
  export type BarbershopServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a BarbershopService.
     */
    data: XOR<BarbershopServiceCreateInput, BarbershopServiceUncheckedCreateInput>
  }

  /**
   * BarbershopService createMany
   */
  export type BarbershopServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BarbershopServices.
     */
    data: BarbershopServiceCreateManyInput | BarbershopServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BarbershopService createManyAndReturn
   */
  export type BarbershopServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * The data used to create many BarbershopServices.
     */
    data: BarbershopServiceCreateManyInput | BarbershopServiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarbershopService update
   */
  export type BarbershopServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a BarbershopService.
     */
    data: XOR<BarbershopServiceUpdateInput, BarbershopServiceUncheckedUpdateInput>
    /**
     * Choose, which BarbershopService to update.
     */
    where: BarbershopServiceWhereUniqueInput
  }

  /**
   * BarbershopService updateMany
   */
  export type BarbershopServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BarbershopServices.
     */
    data: XOR<BarbershopServiceUpdateManyMutationInput, BarbershopServiceUncheckedUpdateManyInput>
    /**
     * Filter which BarbershopServices to update
     */
    where?: BarbershopServiceWhereInput
    /**
     * Limit how many BarbershopServices to update.
     */
    limit?: number
  }

  /**
   * BarbershopService updateManyAndReturn
   */
  export type BarbershopServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * The data used to update BarbershopServices.
     */
    data: XOR<BarbershopServiceUpdateManyMutationInput, BarbershopServiceUncheckedUpdateManyInput>
    /**
     * Filter which BarbershopServices to update
     */
    where?: BarbershopServiceWhereInput
    /**
     * Limit how many BarbershopServices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * BarbershopService upsert
   */
  export type BarbershopServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the BarbershopService to update in case it exists.
     */
    where: BarbershopServiceWhereUniqueInput
    /**
     * In case the BarbershopService found by the `where` argument doesn't exist, create a new BarbershopService with this data.
     */
    create: XOR<BarbershopServiceCreateInput, BarbershopServiceUncheckedCreateInput>
    /**
     * In case the BarbershopService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BarbershopServiceUpdateInput, BarbershopServiceUncheckedUpdateInput>
  }

  /**
   * BarbershopService delete
   */
  export type BarbershopServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
    /**
     * Filter which BarbershopService to delete.
     */
    where: BarbershopServiceWhereUniqueInput
  }

  /**
   * BarbershopService deleteMany
   */
  export type BarbershopServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BarbershopServices to delete
     */
    where?: BarbershopServiceWhereInput
    /**
     * Limit how many BarbershopServices to delete.
     */
    limit?: number
  }

  /**
   * BarbershopService without action
   */
  export type BarbershopServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BarbershopService
     */
    select?: BarbershopServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BarbershopService
     */
    omit?: BarbershopServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BarbershopServiceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BarbershopScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phone: 'phone',
    description: 'description',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type BarbershopScalarFieldEnum = (typeof BarbershopScalarFieldEnum)[keyof typeof BarbershopScalarFieldEnum]


  export const BarbershopServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    imageUrl: 'imageUrl',
    barbershopId: 'barbershopId'
  };

  export type BarbershopServiceScalarFieldEnum = (typeof BarbershopServiceScalarFieldEnum)[keyof typeof BarbershopServiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    barbershop?: BarbershopListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    barbershop?: BarbershopOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    barbershop?: BarbershopListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BarbershopWhereInput = {
    AND?: BarbershopWhereInput | BarbershopWhereInput[]
    OR?: BarbershopWhereInput[]
    NOT?: BarbershopWhereInput | BarbershopWhereInput[]
    id?: StringFilter<"Barbershop"> | string
    name?: StringFilter<"Barbershop"> | string
    address?: StringFilter<"Barbershop"> | string
    phone?: StringNullableListFilter<"Barbershop">
    description?: StringFilter<"Barbershop"> | string
    imageUrl?: StringFilter<"Barbershop"> | string
    createdAt?: DateTimeFilter<"Barbershop"> | Date | string
    updatedAt?: DateTimeFilter<"Barbershop"> | Date | string
    userId?: StringFilter<"Barbershop"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: BarbershopServiceListRelationFilter
  }

  export type BarbershopOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    service?: BarbershopServiceOrderByRelationAggregateInput
  }

  export type BarbershopWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BarbershopWhereInput | BarbershopWhereInput[]
    OR?: BarbershopWhereInput[]
    NOT?: BarbershopWhereInput | BarbershopWhereInput[]
    name?: StringFilter<"Barbershop"> | string
    address?: StringFilter<"Barbershop"> | string
    phone?: StringNullableListFilter<"Barbershop">
    description?: StringFilter<"Barbershop"> | string
    imageUrl?: StringFilter<"Barbershop"> | string
    createdAt?: DateTimeFilter<"Barbershop"> | Date | string
    updatedAt?: DateTimeFilter<"Barbershop"> | Date | string
    userId?: StringFilter<"Barbershop"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    service?: BarbershopServiceListRelationFilter
  }, "id">

  export type BarbershopOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: BarbershopCountOrderByAggregateInput
    _max?: BarbershopMaxOrderByAggregateInput
    _min?: BarbershopMinOrderByAggregateInput
  }

  export type BarbershopScalarWhereWithAggregatesInput = {
    AND?: BarbershopScalarWhereWithAggregatesInput | BarbershopScalarWhereWithAggregatesInput[]
    OR?: BarbershopScalarWhereWithAggregatesInput[]
    NOT?: BarbershopScalarWhereWithAggregatesInput | BarbershopScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Barbershop"> | string
    name?: StringWithAggregatesFilter<"Barbershop"> | string
    address?: StringWithAggregatesFilter<"Barbershop"> | string
    phone?: StringNullableListFilter<"Barbershop">
    description?: StringWithAggregatesFilter<"Barbershop"> | string
    imageUrl?: StringWithAggregatesFilter<"Barbershop"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Barbershop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Barbershop"> | Date | string
    userId?: StringWithAggregatesFilter<"Barbershop"> | string
  }

  export type BarbershopServiceWhereInput = {
    AND?: BarbershopServiceWhereInput | BarbershopServiceWhereInput[]
    OR?: BarbershopServiceWhereInput[]
    NOT?: BarbershopServiceWhereInput | BarbershopServiceWhereInput[]
    id?: StringFilter<"BarbershopService"> | string
    name?: StringFilter<"BarbershopService"> | string
    price?: DecimalFilter<"BarbershopService"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"BarbershopService"> | string
    imageUrl?: StringFilter<"BarbershopService"> | string
    barbershopId?: StringFilter<"BarbershopService"> | string
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
  }

  export type BarbershopServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    barbershopId?: SortOrder
    barbershop?: BarbershopOrderByWithRelationInput
  }

  export type BarbershopServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BarbershopServiceWhereInput | BarbershopServiceWhereInput[]
    OR?: BarbershopServiceWhereInput[]
    NOT?: BarbershopServiceWhereInput | BarbershopServiceWhereInput[]
    name?: StringFilter<"BarbershopService"> | string
    price?: DecimalFilter<"BarbershopService"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"BarbershopService"> | string
    imageUrl?: StringFilter<"BarbershopService"> | string
    barbershopId?: StringFilter<"BarbershopService"> | string
    barbershop?: XOR<BarbershopScalarRelationFilter, BarbershopWhereInput>
  }, "id">

  export type BarbershopServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    barbershopId?: SortOrder
    _count?: BarbershopServiceCountOrderByAggregateInput
    _avg?: BarbershopServiceAvgOrderByAggregateInput
    _max?: BarbershopServiceMaxOrderByAggregateInput
    _min?: BarbershopServiceMinOrderByAggregateInput
    _sum?: BarbershopServiceSumOrderByAggregateInput
  }

  export type BarbershopServiceScalarWhereWithAggregatesInput = {
    AND?: BarbershopServiceScalarWhereWithAggregatesInput | BarbershopServiceScalarWhereWithAggregatesInput[]
    OR?: BarbershopServiceScalarWhereWithAggregatesInput[]
    NOT?: BarbershopServiceScalarWhereWithAggregatesInput | BarbershopServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BarbershopService"> | string
    name?: StringWithAggregatesFilter<"BarbershopService"> | string
    price?: DecimalWithAggregatesFilter<"BarbershopService"> | Decimal | DecimalJsLike | number | string
    description?: StringWithAggregatesFilter<"BarbershopService"> | string
    imageUrl?: StringWithAggregatesFilter<"BarbershopService"> | string
    barbershopId?: StringWithAggregatesFilter<"BarbershopService"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barbershop?: BarbershopCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    barbershop?: BarbershopUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barbershop?: BarbershopUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    barbershop?: BarbershopUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarbershopCreateInput = {
    id?: string
    name: string
    address: string
    phone?: BarbershopCreatephoneInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBarbershopInput
    service?: BarbershopServiceCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phone?: BarbershopCreatephoneInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    service?: BarbershopServiceUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: BarbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBarbershopNestedInput
    service?: BarbershopServiceUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: BarbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    service?: BarbershopServiceUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopCreateManyInput = {
    id?: string
    name: string
    address: string
    phone?: BarbershopCreatephoneInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type BarbershopUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: BarbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarbershopUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: BarbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BarbershopServiceCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    imageUrl: string
    barbershop: BarbershopCreateNestedOneWithoutServiceInput
  }

  export type BarbershopServiceUncheckedCreateInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    imageUrl: string
    barbershopId: string
  }

  export type BarbershopServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    barbershop?: BarbershopUpdateOneRequiredWithoutServiceNestedInput
  }

  export type BarbershopServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    barbershopId?: StringFieldUpdateOperationsInput | string
  }

  export type BarbershopServiceCreateManyInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    imageUrl: string
    barbershopId: string
  }

  export type BarbershopServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type BarbershopServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    barbershopId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BarbershopListRelationFilter = {
    every?: BarbershopWhereInput
    some?: BarbershopWhereInput
    none?: BarbershopWhereInput
  }

  export type BarbershopOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type BarbershopServiceListRelationFilter = {
    every?: BarbershopServiceWhereInput
    some?: BarbershopServiceWhereInput
    none?: BarbershopServiceWhereInput
  }

  export type BarbershopServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BarbershopCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phone?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BarbershopMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type BarbershopMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BarbershopScalarRelationFilter = {
    is?: BarbershopWhereInput
    isNot?: BarbershopWhereInput
  }

  export type BarbershopServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarbershopServiceAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type BarbershopServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarbershopServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    imageUrl?: SortOrder
    barbershopId?: SortOrder
  }

  export type BarbershopServiceSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type BarbershopCreateNestedManyWithoutUserInput = {
    create?: XOR<BarbershopCreateWithoutUserInput, BarbershopUncheckedCreateWithoutUserInput> | BarbershopCreateWithoutUserInput[] | BarbershopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BarbershopCreateOrConnectWithoutUserInput | BarbershopCreateOrConnectWithoutUserInput[]
    createMany?: BarbershopCreateManyUserInputEnvelope
    connect?: BarbershopWhereUniqueInput | BarbershopWhereUniqueInput[]
  }

  export type BarbershopUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BarbershopCreateWithoutUserInput, BarbershopUncheckedCreateWithoutUserInput> | BarbershopCreateWithoutUserInput[] | BarbershopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BarbershopCreateOrConnectWithoutUserInput | BarbershopCreateOrConnectWithoutUserInput[]
    createMany?: BarbershopCreateManyUserInputEnvelope
    connect?: BarbershopWhereUniqueInput | BarbershopWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BarbershopUpdateManyWithoutUserNestedInput = {
    create?: XOR<BarbershopCreateWithoutUserInput, BarbershopUncheckedCreateWithoutUserInput> | BarbershopCreateWithoutUserInput[] | BarbershopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BarbershopCreateOrConnectWithoutUserInput | BarbershopCreateOrConnectWithoutUserInput[]
    upsert?: BarbershopUpsertWithWhereUniqueWithoutUserInput | BarbershopUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BarbershopCreateManyUserInputEnvelope
    set?: BarbershopWhereUniqueInput | BarbershopWhereUniqueInput[]
    disconnect?: BarbershopWhereUniqueInput | BarbershopWhereUniqueInput[]
    delete?: BarbershopWhereUniqueInput | BarbershopWhereUniqueInput[]
    connect?: BarbershopWhereUniqueInput | BarbershopWhereUniqueInput[]
    update?: BarbershopUpdateWithWhereUniqueWithoutUserInput | BarbershopUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BarbershopUpdateManyWithWhereWithoutUserInput | BarbershopUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BarbershopScalarWhereInput | BarbershopScalarWhereInput[]
  }

  export type BarbershopUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BarbershopCreateWithoutUserInput, BarbershopUncheckedCreateWithoutUserInput> | BarbershopCreateWithoutUserInput[] | BarbershopUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BarbershopCreateOrConnectWithoutUserInput | BarbershopCreateOrConnectWithoutUserInput[]
    upsert?: BarbershopUpsertWithWhereUniqueWithoutUserInput | BarbershopUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BarbershopCreateManyUserInputEnvelope
    set?: BarbershopWhereUniqueInput | BarbershopWhereUniqueInput[]
    disconnect?: BarbershopWhereUniqueInput | BarbershopWhereUniqueInput[]
    delete?: BarbershopWhereUniqueInput | BarbershopWhereUniqueInput[]
    connect?: BarbershopWhereUniqueInput | BarbershopWhereUniqueInput[]
    update?: BarbershopUpdateWithWhereUniqueWithoutUserInput | BarbershopUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BarbershopUpdateManyWithWhereWithoutUserInput | BarbershopUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BarbershopScalarWhereInput | BarbershopScalarWhereInput[]
  }

  export type BarbershopCreatephoneInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutBarbershopInput = {
    create?: XOR<UserCreateWithoutBarbershopInput, UserUncheckedCreateWithoutBarbershopInput>
    connectOrCreate?: UserCreateOrConnectWithoutBarbershopInput
    connect?: UserWhereUniqueInput
  }

  export type BarbershopServiceCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<BarbershopServiceCreateWithoutBarbershopInput, BarbershopServiceUncheckedCreateWithoutBarbershopInput> | BarbershopServiceCreateWithoutBarbershopInput[] | BarbershopServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarbershopServiceCreateOrConnectWithoutBarbershopInput | BarbershopServiceCreateOrConnectWithoutBarbershopInput[]
    createMany?: BarbershopServiceCreateManyBarbershopInputEnvelope
    connect?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
  }

  export type BarbershopServiceUncheckedCreateNestedManyWithoutBarbershopInput = {
    create?: XOR<BarbershopServiceCreateWithoutBarbershopInput, BarbershopServiceUncheckedCreateWithoutBarbershopInput> | BarbershopServiceCreateWithoutBarbershopInput[] | BarbershopServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarbershopServiceCreateOrConnectWithoutBarbershopInput | BarbershopServiceCreateOrConnectWithoutBarbershopInput[]
    createMany?: BarbershopServiceCreateManyBarbershopInputEnvelope
    connect?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
  }

  export type BarbershopUpdatephoneInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutBarbershopNestedInput = {
    create?: XOR<UserCreateWithoutBarbershopInput, UserUncheckedCreateWithoutBarbershopInput>
    connectOrCreate?: UserCreateOrConnectWithoutBarbershopInput
    upsert?: UserUpsertWithoutBarbershopInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBarbershopInput, UserUpdateWithoutBarbershopInput>, UserUncheckedUpdateWithoutBarbershopInput>
  }

  export type BarbershopServiceUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<BarbershopServiceCreateWithoutBarbershopInput, BarbershopServiceUncheckedCreateWithoutBarbershopInput> | BarbershopServiceCreateWithoutBarbershopInput[] | BarbershopServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarbershopServiceCreateOrConnectWithoutBarbershopInput | BarbershopServiceCreateOrConnectWithoutBarbershopInput[]
    upsert?: BarbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput | BarbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: BarbershopServiceCreateManyBarbershopInputEnvelope
    set?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    disconnect?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    delete?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    connect?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    update?: BarbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput | BarbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: BarbershopServiceUpdateManyWithWhereWithoutBarbershopInput | BarbershopServiceUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: BarbershopServiceScalarWhereInput | BarbershopServiceScalarWhereInput[]
  }

  export type BarbershopServiceUncheckedUpdateManyWithoutBarbershopNestedInput = {
    create?: XOR<BarbershopServiceCreateWithoutBarbershopInput, BarbershopServiceUncheckedCreateWithoutBarbershopInput> | BarbershopServiceCreateWithoutBarbershopInput[] | BarbershopServiceUncheckedCreateWithoutBarbershopInput[]
    connectOrCreate?: BarbershopServiceCreateOrConnectWithoutBarbershopInput | BarbershopServiceCreateOrConnectWithoutBarbershopInput[]
    upsert?: BarbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput | BarbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput[]
    createMany?: BarbershopServiceCreateManyBarbershopInputEnvelope
    set?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    disconnect?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    delete?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    connect?: BarbershopServiceWhereUniqueInput | BarbershopServiceWhereUniqueInput[]
    update?: BarbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput | BarbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput[]
    updateMany?: BarbershopServiceUpdateManyWithWhereWithoutBarbershopInput | BarbershopServiceUpdateManyWithWhereWithoutBarbershopInput[]
    deleteMany?: BarbershopServiceScalarWhereInput | BarbershopServiceScalarWhereInput[]
  }

  export type BarbershopCreateNestedOneWithoutServiceInput = {
    create?: XOR<BarbershopCreateWithoutServiceInput, BarbershopUncheckedCreateWithoutServiceInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutServiceInput
    connect?: BarbershopWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BarbershopUpdateOneRequiredWithoutServiceNestedInput = {
    create?: XOR<BarbershopCreateWithoutServiceInput, BarbershopUncheckedCreateWithoutServiceInput>
    connectOrCreate?: BarbershopCreateOrConnectWithoutServiceInput
    upsert?: BarbershopUpsertWithoutServiceInput
    connect?: BarbershopWhereUniqueInput
    update?: XOR<XOR<BarbershopUpdateToOneWithWhereWithoutServiceInput, BarbershopUpdateWithoutServiceInput>, BarbershopUncheckedUpdateWithoutServiceInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
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

  export type BarbershopCreateWithoutUserInput = {
    id?: string
    name: string
    address: string
    phone?: BarbershopCreatephoneInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    service?: BarbershopServiceCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    address: string
    phone?: BarbershopCreatephoneInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    service?: BarbershopServiceUncheckedCreateNestedManyWithoutBarbershopInput
  }

  export type BarbershopCreateOrConnectWithoutUserInput = {
    where: BarbershopWhereUniqueInput
    create: XOR<BarbershopCreateWithoutUserInput, BarbershopUncheckedCreateWithoutUserInput>
  }

  export type BarbershopCreateManyUserInputEnvelope = {
    data: BarbershopCreateManyUserInput | BarbershopCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type BarbershopUpsertWithWhereUniqueWithoutUserInput = {
    where: BarbershopWhereUniqueInput
    update: XOR<BarbershopUpdateWithoutUserInput, BarbershopUncheckedUpdateWithoutUserInput>
    create: XOR<BarbershopCreateWithoutUserInput, BarbershopUncheckedCreateWithoutUserInput>
  }

  export type BarbershopUpdateWithWhereUniqueWithoutUserInput = {
    where: BarbershopWhereUniqueInput
    data: XOR<BarbershopUpdateWithoutUserInput, BarbershopUncheckedUpdateWithoutUserInput>
  }

  export type BarbershopUpdateManyWithWhereWithoutUserInput = {
    where: BarbershopScalarWhereInput
    data: XOR<BarbershopUpdateManyMutationInput, BarbershopUncheckedUpdateManyWithoutUserInput>
  }

  export type BarbershopScalarWhereInput = {
    AND?: BarbershopScalarWhereInput | BarbershopScalarWhereInput[]
    OR?: BarbershopScalarWhereInput[]
    NOT?: BarbershopScalarWhereInput | BarbershopScalarWhereInput[]
    id?: StringFilter<"Barbershop"> | string
    name?: StringFilter<"Barbershop"> | string
    address?: StringFilter<"Barbershop"> | string
    phone?: StringNullableListFilter<"Barbershop">
    description?: StringFilter<"Barbershop"> | string
    imageUrl?: StringFilter<"Barbershop"> | string
    createdAt?: DateTimeFilter<"Barbershop"> | Date | string
    updatedAt?: DateTimeFilter<"Barbershop"> | Date | string
    userId?: StringFilter<"Barbershop"> | string
  }

  export type UserCreateWithoutBarbershopInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutBarbershopInput = {
    id?: string
    email: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutBarbershopInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBarbershopInput, UserUncheckedCreateWithoutBarbershopInput>
  }

  export type BarbershopServiceCreateWithoutBarbershopInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    imageUrl: string
  }

  export type BarbershopServiceUncheckedCreateWithoutBarbershopInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    imageUrl: string
  }

  export type BarbershopServiceCreateOrConnectWithoutBarbershopInput = {
    where: BarbershopServiceWhereUniqueInput
    create: XOR<BarbershopServiceCreateWithoutBarbershopInput, BarbershopServiceUncheckedCreateWithoutBarbershopInput>
  }

  export type BarbershopServiceCreateManyBarbershopInputEnvelope = {
    data: BarbershopServiceCreateManyBarbershopInput | BarbershopServiceCreateManyBarbershopInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBarbershopInput = {
    update: XOR<UserUpdateWithoutBarbershopInput, UserUncheckedUpdateWithoutBarbershopInput>
    create: XOR<UserCreateWithoutBarbershopInput, UserUncheckedCreateWithoutBarbershopInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBarbershopInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBarbershopInput, UserUncheckedUpdateWithoutBarbershopInput>
  }

  export type UserUpdateWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarbershopServiceUpsertWithWhereUniqueWithoutBarbershopInput = {
    where: BarbershopServiceWhereUniqueInput
    update: XOR<BarbershopServiceUpdateWithoutBarbershopInput, BarbershopServiceUncheckedUpdateWithoutBarbershopInput>
    create: XOR<BarbershopServiceCreateWithoutBarbershopInput, BarbershopServiceUncheckedCreateWithoutBarbershopInput>
  }

  export type BarbershopServiceUpdateWithWhereUniqueWithoutBarbershopInput = {
    where: BarbershopServiceWhereUniqueInput
    data: XOR<BarbershopServiceUpdateWithoutBarbershopInput, BarbershopServiceUncheckedUpdateWithoutBarbershopInput>
  }

  export type BarbershopServiceUpdateManyWithWhereWithoutBarbershopInput = {
    where: BarbershopServiceScalarWhereInput
    data: XOR<BarbershopServiceUpdateManyMutationInput, BarbershopServiceUncheckedUpdateManyWithoutBarbershopInput>
  }

  export type BarbershopServiceScalarWhereInput = {
    AND?: BarbershopServiceScalarWhereInput | BarbershopServiceScalarWhereInput[]
    OR?: BarbershopServiceScalarWhereInput[]
    NOT?: BarbershopServiceScalarWhereInput | BarbershopServiceScalarWhereInput[]
    id?: StringFilter<"BarbershopService"> | string
    name?: StringFilter<"BarbershopService"> | string
    price?: DecimalFilter<"BarbershopService"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"BarbershopService"> | string
    imageUrl?: StringFilter<"BarbershopService"> | string
    barbershopId?: StringFilter<"BarbershopService"> | string
  }

  export type BarbershopCreateWithoutServiceInput = {
    id?: string
    name: string
    address: string
    phone?: BarbershopCreatephoneInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutBarbershopInput
  }

  export type BarbershopUncheckedCreateWithoutServiceInput = {
    id?: string
    name: string
    address: string
    phone?: BarbershopCreatephoneInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type BarbershopCreateOrConnectWithoutServiceInput = {
    where: BarbershopWhereUniqueInput
    create: XOR<BarbershopCreateWithoutServiceInput, BarbershopUncheckedCreateWithoutServiceInput>
  }

  export type BarbershopUpsertWithoutServiceInput = {
    update: XOR<BarbershopUpdateWithoutServiceInput, BarbershopUncheckedUpdateWithoutServiceInput>
    create: XOR<BarbershopCreateWithoutServiceInput, BarbershopUncheckedCreateWithoutServiceInput>
    where?: BarbershopWhereInput
  }

  export type BarbershopUpdateToOneWithWhereWithoutServiceInput = {
    where?: BarbershopWhereInput
    data: XOR<BarbershopUpdateWithoutServiceInput, BarbershopUncheckedUpdateWithoutServiceInput>
  }

  export type BarbershopUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: BarbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: BarbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type BarbershopCreateManyUserInput = {
    id?: string
    name: string
    address: string
    phone?: BarbershopCreatephoneInput | string[]
    description: string
    imageUrl: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BarbershopUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: BarbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: BarbershopServiceUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: BarbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    service?: BarbershopServiceUncheckedUpdateManyWithoutBarbershopNestedInput
  }

  export type BarbershopUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phone?: BarbershopUpdatephoneInput | string[]
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BarbershopServiceCreateManyBarbershopInput = {
    id?: string
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    imageUrl: string
  }

  export type BarbershopServiceUpdateWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type BarbershopServiceUncheckedUpdateWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
  }

  export type BarbershopServiceUncheckedUpdateManyWithoutBarbershopInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
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