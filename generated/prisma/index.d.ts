
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
 * Model TableUser
 * 
 */
export type TableUser = $Result.DefaultSelection<Prisma.$TableUserPayload>
/**
 * Model TableService
 * 
 */
export type TableService = $Result.DefaultSelection<Prisma.$TableServicePayload>
/**
 * Model TableObject
 * 
 */
export type TableObject = $Result.DefaultSelection<Prisma.$TableObjectPayload>
/**
 * Model TableIncident
 * 
 */
export type TableIncident = $Result.DefaultSelection<Prisma.$TableIncidentPayload>
/**
 * Model TableActu
 * 
 */
export type TableActu = $Result.DefaultSelection<Prisma.$TableActuPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TableUsers
 * const tableUsers = await prisma.tableUser.findMany()
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
   * // Fetch zero or more TableUsers
   * const tableUsers = await prisma.tableUser.findMany()
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
   * `prisma.tableUser`: Exposes CRUD operations for the **TableUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TableUsers
    * const tableUsers = await prisma.tableUser.findMany()
    * ```
    */
  get tableUser(): Prisma.TableUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tableService`: Exposes CRUD operations for the **TableService** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TableServices
    * const tableServices = await prisma.tableService.findMany()
    * ```
    */
  get tableService(): Prisma.TableServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tableObject`: Exposes CRUD operations for the **TableObject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TableObjects
    * const tableObjects = await prisma.tableObject.findMany()
    * ```
    */
  get tableObject(): Prisma.TableObjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tableIncident`: Exposes CRUD operations for the **TableIncident** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TableIncidents
    * const tableIncidents = await prisma.tableIncident.findMany()
    * ```
    */
  get tableIncident(): Prisma.TableIncidentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tableActu`: Exposes CRUD operations for the **TableActu** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TableActus
    * const tableActus = await prisma.tableActu.findMany()
    * ```
    */
  get tableActu(): Prisma.TableActuDelegate<ExtArgs, ClientOptions>;
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
    TableUser: 'TableUser',
    TableService: 'TableService',
    TableObject: 'TableObject',
    TableIncident: 'TableIncident',
    TableActu: 'TableActu'
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
      modelProps: "tableUser" | "tableService" | "tableObject" | "tableIncident" | "tableActu"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TableUser: {
        payload: Prisma.$TableUserPayload<ExtArgs>
        fields: Prisma.TableUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableUserPayload>
          }
          findFirst: {
            args: Prisma.TableUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableUserPayload>
          }
          findMany: {
            args: Prisma.TableUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableUserPayload>[]
          }
          create: {
            args: Prisma.TableUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableUserPayload>
          }
          createMany: {
            args: Prisma.TableUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableUserPayload>[]
          }
          delete: {
            args: Prisma.TableUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableUserPayload>
          }
          update: {
            args: Prisma.TableUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableUserPayload>
          }
          deleteMany: {
            args: Prisma.TableUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableUserPayload>[]
          }
          upsert: {
            args: Prisma.TableUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableUserPayload>
          }
          aggregate: {
            args: Prisma.TableUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTableUser>
          }
          groupBy: {
            args: Prisma.TableUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableUserCountArgs<ExtArgs>
            result: $Utils.Optional<TableUserCountAggregateOutputType> | number
          }
        }
      }
      TableService: {
        payload: Prisma.$TableServicePayload<ExtArgs>
        fields: Prisma.TableServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableServicePayload>
          }
          findFirst: {
            args: Prisma.TableServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableServicePayload>
          }
          findMany: {
            args: Prisma.TableServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableServicePayload>[]
          }
          create: {
            args: Prisma.TableServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableServicePayload>
          }
          createMany: {
            args: Prisma.TableServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableServicePayload>[]
          }
          delete: {
            args: Prisma.TableServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableServicePayload>
          }
          update: {
            args: Prisma.TableServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableServicePayload>
          }
          deleteMany: {
            args: Prisma.TableServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableServicePayload>[]
          }
          upsert: {
            args: Prisma.TableServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableServicePayload>
          }
          aggregate: {
            args: Prisma.TableServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTableService>
          }
          groupBy: {
            args: Prisma.TableServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableServiceCountArgs<ExtArgs>
            result: $Utils.Optional<TableServiceCountAggregateOutputType> | number
          }
        }
      }
      TableObject: {
        payload: Prisma.$TableObjectPayload<ExtArgs>
        fields: Prisma.TableObjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableObjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableObjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableObjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableObjectPayload>
          }
          findFirst: {
            args: Prisma.TableObjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableObjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableObjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableObjectPayload>
          }
          findMany: {
            args: Prisma.TableObjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableObjectPayload>[]
          }
          create: {
            args: Prisma.TableObjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableObjectPayload>
          }
          createMany: {
            args: Prisma.TableObjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableObjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableObjectPayload>[]
          }
          delete: {
            args: Prisma.TableObjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableObjectPayload>
          }
          update: {
            args: Prisma.TableObjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableObjectPayload>
          }
          deleteMany: {
            args: Prisma.TableObjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableObjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableObjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableObjectPayload>[]
          }
          upsert: {
            args: Prisma.TableObjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableObjectPayload>
          }
          aggregate: {
            args: Prisma.TableObjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTableObject>
          }
          groupBy: {
            args: Prisma.TableObjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableObjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableObjectCountArgs<ExtArgs>
            result: $Utils.Optional<TableObjectCountAggregateOutputType> | number
          }
        }
      }
      TableIncident: {
        payload: Prisma.$TableIncidentPayload<ExtArgs>
        fields: Prisma.TableIncidentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableIncidentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableIncidentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableIncidentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableIncidentPayload>
          }
          findFirst: {
            args: Prisma.TableIncidentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableIncidentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableIncidentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableIncidentPayload>
          }
          findMany: {
            args: Prisma.TableIncidentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableIncidentPayload>[]
          }
          create: {
            args: Prisma.TableIncidentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableIncidentPayload>
          }
          createMany: {
            args: Prisma.TableIncidentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableIncidentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableIncidentPayload>[]
          }
          delete: {
            args: Prisma.TableIncidentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableIncidentPayload>
          }
          update: {
            args: Prisma.TableIncidentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableIncidentPayload>
          }
          deleteMany: {
            args: Prisma.TableIncidentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableIncidentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableIncidentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableIncidentPayload>[]
          }
          upsert: {
            args: Prisma.TableIncidentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableIncidentPayload>
          }
          aggregate: {
            args: Prisma.TableIncidentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTableIncident>
          }
          groupBy: {
            args: Prisma.TableIncidentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableIncidentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableIncidentCountArgs<ExtArgs>
            result: $Utils.Optional<TableIncidentCountAggregateOutputType> | number
          }
        }
      }
      TableActu: {
        payload: Prisma.$TableActuPayload<ExtArgs>
        fields: Prisma.TableActuFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TableActuFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableActuPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TableActuFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableActuPayload>
          }
          findFirst: {
            args: Prisma.TableActuFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableActuPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TableActuFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableActuPayload>
          }
          findMany: {
            args: Prisma.TableActuFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableActuPayload>[]
          }
          create: {
            args: Prisma.TableActuCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableActuPayload>
          }
          createMany: {
            args: Prisma.TableActuCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TableActuCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableActuPayload>[]
          }
          delete: {
            args: Prisma.TableActuDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableActuPayload>
          }
          update: {
            args: Prisma.TableActuUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableActuPayload>
          }
          deleteMany: {
            args: Prisma.TableActuDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TableActuUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TableActuUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableActuPayload>[]
          }
          upsert: {
            args: Prisma.TableActuUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TableActuPayload>
          }
          aggregate: {
            args: Prisma.TableActuAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTableActu>
          }
          groupBy: {
            args: Prisma.TableActuGroupByArgs<ExtArgs>
            result: $Utils.Optional<TableActuGroupByOutputType>[]
          }
          count: {
            args: Prisma.TableActuCountArgs<ExtArgs>
            result: $Utils.Optional<TableActuCountAggregateOutputType> | number
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
    tableUser?: TableUserOmit
    tableService?: TableServiceOmit
    tableObject?: TableObjectOmit
    tableIncident?: TableIncidentOmit
    tableActu?: TableActuOmit
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
   * Count Type TableUserCountOutputType
   */

  export type TableUserCountOutputType = {
    incidentsByUsername: number
  }

  export type TableUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidentsByUsername?: boolean | TableUserCountOutputTypeCountIncidentsByUsernameArgs
  }

  // Custom InputTypes
  /**
   * TableUserCountOutputType without action
   */
  export type TableUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUserCountOutputType
     */
    select?: TableUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TableUserCountOutputType without action
   */
  export type TableUserCountOutputTypeCountIncidentsByUsernameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableIncidentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TableUser
   */

  export type AggregateTableUser = {
    _count: TableUserCountAggregateOutputType | null
    _avg: TableUserAvgAggregateOutputType | null
    _sum: TableUserSumAggregateOutputType | null
    _min: TableUserMinAggregateOutputType | null
    _max: TableUserMaxAggregateOutputType | null
  }

  export type TableUserAvgAggregateOutputType = {
    id: number | null
  }

  export type TableUserSumAggregateOutputType = {
    id: number | null
  }

  export type TableUserMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    firstname: string | null
    lastname: string | null
    role: string | null
    autorized: boolean | null
  }

  export type TableUserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
    email: string | null
    firstname: string | null
    lastname: string | null
    role: string | null
    autorized: boolean | null
  }

  export type TableUserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    firstname: number
    lastname: number
    role: number
    autorized: number
    _all: number
  }


  export type TableUserAvgAggregateInputType = {
    id?: true
  }

  export type TableUserSumAggregateInputType = {
    id?: true
  }

  export type TableUserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    firstname?: true
    lastname?: true
    role?: true
    autorized?: true
  }

  export type TableUserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    firstname?: true
    lastname?: true
    role?: true
    autorized?: true
  }

  export type TableUserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
    firstname?: true
    lastname?: true
    role?: true
    autorized?: true
    _all?: true
  }

  export type TableUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableUser to aggregate.
     */
    where?: TableUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableUsers to fetch.
     */
    orderBy?: TableUserOrderByWithRelationInput | TableUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TableUsers
    **/
    _count?: true | TableUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableUserMaxAggregateInputType
  }

  export type GetTableUserAggregateType<T extends TableUserAggregateArgs> = {
        [P in keyof T & keyof AggregateTableUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTableUser[P]>
      : GetScalarType<T[P], AggregateTableUser[P]>
  }




  export type TableUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableUserWhereInput
    orderBy?: TableUserOrderByWithAggregationInput | TableUserOrderByWithAggregationInput[]
    by: TableUserScalarFieldEnum[] | TableUserScalarFieldEnum
    having?: TableUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableUserCountAggregateInputType | true
    _avg?: TableUserAvgAggregateInputType
    _sum?: TableUserSumAggregateInputType
    _min?: TableUserMinAggregateInputType
    _max?: TableUserMaxAggregateInputType
  }

  export type TableUserGroupByOutputType = {
    id: number
    username: string
    password: string
    email: string
    firstname: string
    lastname: string
    role: string
    autorized: boolean
    _count: TableUserCountAggregateOutputType | null
    _avg: TableUserAvgAggregateOutputType | null
    _sum: TableUserSumAggregateOutputType | null
    _min: TableUserMinAggregateOutputType | null
    _max: TableUserMaxAggregateOutputType | null
  }

  type GetTableUserGroupByPayload<T extends TableUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableUserGroupByOutputType[P]>
            : GetScalarType<T[P], TableUserGroupByOutputType[P]>
        }
      >
    >


  export type TableUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    autorized?: boolean
    incidentsByUsername?: boolean | TableUser$incidentsByUsernameArgs<ExtArgs>
    _count?: boolean | TableUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tableUser"]>

  export type TableUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    autorized?: boolean
  }, ExtArgs["result"]["tableUser"]>

  export type TableUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    autorized?: boolean
  }, ExtArgs["result"]["tableUser"]>

  export type TableUserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
    firstname?: boolean
    lastname?: boolean
    role?: boolean
    autorized?: boolean
  }

  export type TableUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email" | "firstname" | "lastname" | "role" | "autorized", ExtArgs["result"]["tableUser"]>
  export type TableUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    incidentsByUsername?: boolean | TableUser$incidentsByUsernameArgs<ExtArgs>
    _count?: boolean | TableUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TableUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TableUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TableUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TableUser"
    objects: {
      incidentsByUsername: Prisma.$TableIncidentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
      email: string
      firstname: string
      lastname: string
      role: string
      autorized: boolean
    }, ExtArgs["result"]["tableUser"]>
    composites: {}
  }

  type TableUserGetPayload<S extends boolean | null | undefined | TableUserDefaultArgs> = $Result.GetResult<Prisma.$TableUserPayload, S>

  type TableUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableUserCountAggregateInputType | true
    }

  export interface TableUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TableUser'], meta: { name: 'TableUser' } }
    /**
     * Find zero or one TableUser that matches the filter.
     * @param {TableUserFindUniqueArgs} args - Arguments to find a TableUser
     * @example
     * // Get one TableUser
     * const tableUser = await prisma.tableUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableUserFindUniqueArgs>(args: SelectSubset<T, TableUserFindUniqueArgs<ExtArgs>>): Prisma__TableUserClient<$Result.GetResult<Prisma.$TableUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TableUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableUserFindUniqueOrThrowArgs} args - Arguments to find a TableUser
     * @example
     * // Get one TableUser
     * const tableUser = await prisma.tableUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableUserFindUniqueOrThrowArgs>(args: SelectSubset<T, TableUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableUserClient<$Result.GetResult<Prisma.$TableUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUserFindFirstArgs} args - Arguments to find a TableUser
     * @example
     * // Get one TableUser
     * const tableUser = await prisma.tableUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableUserFindFirstArgs>(args?: SelectSubset<T, TableUserFindFirstArgs<ExtArgs>>): Prisma__TableUserClient<$Result.GetResult<Prisma.$TableUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUserFindFirstOrThrowArgs} args - Arguments to find a TableUser
     * @example
     * // Get one TableUser
     * const tableUser = await prisma.tableUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableUserFindFirstOrThrowArgs>(args?: SelectSubset<T, TableUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableUserClient<$Result.GetResult<Prisma.$TableUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TableUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TableUsers
     * const tableUsers = await prisma.tableUser.findMany()
     * 
     * // Get first 10 TableUsers
     * const tableUsers = await prisma.tableUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableUserWithIdOnly = await prisma.tableUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableUserFindManyArgs>(args?: SelectSubset<T, TableUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TableUser.
     * @param {TableUserCreateArgs} args - Arguments to create a TableUser.
     * @example
     * // Create one TableUser
     * const TableUser = await prisma.tableUser.create({
     *   data: {
     *     // ... data to create a TableUser
     *   }
     * })
     * 
     */
    create<T extends TableUserCreateArgs>(args: SelectSubset<T, TableUserCreateArgs<ExtArgs>>): Prisma__TableUserClient<$Result.GetResult<Prisma.$TableUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TableUsers.
     * @param {TableUserCreateManyArgs} args - Arguments to create many TableUsers.
     * @example
     * // Create many TableUsers
     * const tableUser = await prisma.tableUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableUserCreateManyArgs>(args?: SelectSubset<T, TableUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TableUsers and returns the data saved in the database.
     * @param {TableUserCreateManyAndReturnArgs} args - Arguments to create many TableUsers.
     * @example
     * // Create many TableUsers
     * const tableUser = await prisma.tableUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TableUsers and only return the `id`
     * const tableUserWithIdOnly = await prisma.tableUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableUserCreateManyAndReturnArgs>(args?: SelectSubset<T, TableUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TableUser.
     * @param {TableUserDeleteArgs} args - Arguments to delete one TableUser.
     * @example
     * // Delete one TableUser
     * const TableUser = await prisma.tableUser.delete({
     *   where: {
     *     // ... filter to delete one TableUser
     *   }
     * })
     * 
     */
    delete<T extends TableUserDeleteArgs>(args: SelectSubset<T, TableUserDeleteArgs<ExtArgs>>): Prisma__TableUserClient<$Result.GetResult<Prisma.$TableUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TableUser.
     * @param {TableUserUpdateArgs} args - Arguments to update one TableUser.
     * @example
     * // Update one TableUser
     * const tableUser = await prisma.tableUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableUserUpdateArgs>(args: SelectSubset<T, TableUserUpdateArgs<ExtArgs>>): Prisma__TableUserClient<$Result.GetResult<Prisma.$TableUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TableUsers.
     * @param {TableUserDeleteManyArgs} args - Arguments to filter TableUsers to delete.
     * @example
     * // Delete a few TableUsers
     * const { count } = await prisma.tableUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableUserDeleteManyArgs>(args?: SelectSubset<T, TableUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TableUsers
     * const tableUser = await prisma.tableUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableUserUpdateManyArgs>(args: SelectSubset<T, TableUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableUsers and returns the data updated in the database.
     * @param {TableUserUpdateManyAndReturnArgs} args - Arguments to update many TableUsers.
     * @example
     * // Update many TableUsers
     * const tableUser = await prisma.tableUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TableUsers and only return the `id`
     * const tableUserWithIdOnly = await prisma.tableUser.updateManyAndReturn({
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
    updateManyAndReturn<T extends TableUserUpdateManyAndReturnArgs>(args: SelectSubset<T, TableUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TableUser.
     * @param {TableUserUpsertArgs} args - Arguments to update or create a TableUser.
     * @example
     * // Update or create a TableUser
     * const tableUser = await prisma.tableUser.upsert({
     *   create: {
     *     // ... data to create a TableUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TableUser we want to update
     *   }
     * })
     */
    upsert<T extends TableUserUpsertArgs>(args: SelectSubset<T, TableUserUpsertArgs<ExtArgs>>): Prisma__TableUserClient<$Result.GetResult<Prisma.$TableUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TableUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUserCountArgs} args - Arguments to filter TableUsers to count.
     * @example
     * // Count the number of TableUsers
     * const count = await prisma.tableUser.count({
     *   where: {
     *     // ... the filter for the TableUsers we want to count
     *   }
     * })
    **/
    count<T extends TableUserCountArgs>(
      args?: Subset<T, TableUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TableUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableUserAggregateArgs>(args: Subset<T, TableUserAggregateArgs>): Prisma.PrismaPromise<GetTableUserAggregateType<T>>

    /**
     * Group by TableUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableUserGroupByArgs} args - Group by arguments.
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
      T extends TableUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableUserGroupByArgs['orderBy'] }
        : { orderBy?: TableUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TableUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TableUser model
   */
  readonly fields: TableUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TableUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    incidentsByUsername<T extends TableUser$incidentsByUsernameArgs<ExtArgs> = {}>(args?: Subset<T, TableUser$incidentsByUsernameArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableIncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the TableUser model
   */
  interface TableUserFieldRefs {
    readonly id: FieldRef<"TableUser", 'Int'>
    readonly username: FieldRef<"TableUser", 'String'>
    readonly password: FieldRef<"TableUser", 'String'>
    readonly email: FieldRef<"TableUser", 'String'>
    readonly firstname: FieldRef<"TableUser", 'String'>
    readonly lastname: FieldRef<"TableUser", 'String'>
    readonly role: FieldRef<"TableUser", 'String'>
    readonly autorized: FieldRef<"TableUser", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TableUser findUnique
   */
  export type TableUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUser
     */
    select?: TableUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableUser
     */
    omit?: TableUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableUserInclude<ExtArgs> | null
    /**
     * Filter, which TableUser to fetch.
     */
    where: TableUserWhereUniqueInput
  }

  /**
   * TableUser findUniqueOrThrow
   */
  export type TableUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUser
     */
    select?: TableUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableUser
     */
    omit?: TableUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableUserInclude<ExtArgs> | null
    /**
     * Filter, which TableUser to fetch.
     */
    where: TableUserWhereUniqueInput
  }

  /**
   * TableUser findFirst
   */
  export type TableUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUser
     */
    select?: TableUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableUser
     */
    omit?: TableUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableUserInclude<ExtArgs> | null
    /**
     * Filter, which TableUser to fetch.
     */
    where?: TableUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableUsers to fetch.
     */
    orderBy?: TableUserOrderByWithRelationInput | TableUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableUsers.
     */
    cursor?: TableUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableUsers.
     */
    distinct?: TableUserScalarFieldEnum | TableUserScalarFieldEnum[]
  }

  /**
   * TableUser findFirstOrThrow
   */
  export type TableUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUser
     */
    select?: TableUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableUser
     */
    omit?: TableUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableUserInclude<ExtArgs> | null
    /**
     * Filter, which TableUser to fetch.
     */
    where?: TableUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableUsers to fetch.
     */
    orderBy?: TableUserOrderByWithRelationInput | TableUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableUsers.
     */
    cursor?: TableUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableUsers.
     */
    distinct?: TableUserScalarFieldEnum | TableUserScalarFieldEnum[]
  }

  /**
   * TableUser findMany
   */
  export type TableUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUser
     */
    select?: TableUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableUser
     */
    omit?: TableUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableUserInclude<ExtArgs> | null
    /**
     * Filter, which TableUsers to fetch.
     */
    where?: TableUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableUsers to fetch.
     */
    orderBy?: TableUserOrderByWithRelationInput | TableUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TableUsers.
     */
    cursor?: TableUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableUsers.
     */
    skip?: number
    distinct?: TableUserScalarFieldEnum | TableUserScalarFieldEnum[]
  }

  /**
   * TableUser create
   */
  export type TableUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUser
     */
    select?: TableUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableUser
     */
    omit?: TableUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableUserInclude<ExtArgs> | null
    /**
     * The data needed to create a TableUser.
     */
    data: XOR<TableUserCreateInput, TableUserUncheckedCreateInput>
  }

  /**
   * TableUser createMany
   */
  export type TableUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TableUsers.
     */
    data: TableUserCreateManyInput | TableUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableUser createManyAndReturn
   */
  export type TableUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUser
     */
    select?: TableUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableUser
     */
    omit?: TableUserOmit<ExtArgs> | null
    /**
     * The data used to create many TableUsers.
     */
    data: TableUserCreateManyInput | TableUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableUser update
   */
  export type TableUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUser
     */
    select?: TableUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableUser
     */
    omit?: TableUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableUserInclude<ExtArgs> | null
    /**
     * The data needed to update a TableUser.
     */
    data: XOR<TableUserUpdateInput, TableUserUncheckedUpdateInput>
    /**
     * Choose, which TableUser to update.
     */
    where: TableUserWhereUniqueInput
  }

  /**
   * TableUser updateMany
   */
  export type TableUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TableUsers.
     */
    data: XOR<TableUserUpdateManyMutationInput, TableUserUncheckedUpdateManyInput>
    /**
     * Filter which TableUsers to update
     */
    where?: TableUserWhereInput
    /**
     * Limit how many TableUsers to update.
     */
    limit?: number
  }

  /**
   * TableUser updateManyAndReturn
   */
  export type TableUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUser
     */
    select?: TableUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableUser
     */
    omit?: TableUserOmit<ExtArgs> | null
    /**
     * The data used to update TableUsers.
     */
    data: XOR<TableUserUpdateManyMutationInput, TableUserUncheckedUpdateManyInput>
    /**
     * Filter which TableUsers to update
     */
    where?: TableUserWhereInput
    /**
     * Limit how many TableUsers to update.
     */
    limit?: number
  }

  /**
   * TableUser upsert
   */
  export type TableUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUser
     */
    select?: TableUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableUser
     */
    omit?: TableUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableUserInclude<ExtArgs> | null
    /**
     * The filter to search for the TableUser to update in case it exists.
     */
    where: TableUserWhereUniqueInput
    /**
     * In case the TableUser found by the `where` argument doesn't exist, create a new TableUser with this data.
     */
    create: XOR<TableUserCreateInput, TableUserUncheckedCreateInput>
    /**
     * In case the TableUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableUserUpdateInput, TableUserUncheckedUpdateInput>
  }

  /**
   * TableUser delete
   */
  export type TableUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUser
     */
    select?: TableUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableUser
     */
    omit?: TableUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableUserInclude<ExtArgs> | null
    /**
     * Filter which TableUser to delete.
     */
    where: TableUserWhereUniqueInput
  }

  /**
   * TableUser deleteMany
   */
  export type TableUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableUsers to delete
     */
    where?: TableUserWhereInput
    /**
     * Limit how many TableUsers to delete.
     */
    limit?: number
  }

  /**
   * TableUser.incidentsByUsername
   */
  export type TableUser$incidentsByUsernameArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentInclude<ExtArgs> | null
    where?: TableIncidentWhereInput
    orderBy?: TableIncidentOrderByWithRelationInput | TableIncidentOrderByWithRelationInput[]
    cursor?: TableIncidentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TableIncidentScalarFieldEnum | TableIncidentScalarFieldEnum[]
  }

  /**
   * TableUser without action
   */
  export type TableUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableUser
     */
    select?: TableUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableUser
     */
    omit?: TableUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableUserInclude<ExtArgs> | null
  }


  /**
   * Model TableService
   */

  export type AggregateTableService = {
    _count: TableServiceCountAggregateOutputType | null
    _avg: TableServiceAvgAggregateOutputType | null
    _sum: TableServiceSumAggregateOutputType | null
    _min: TableServiceMinAggregateOutputType | null
    _max: TableServiceMaxAggregateOutputType | null
  }

  export type TableServiceAvgAggregateOutputType = {
    id: number | null
  }

  export type TableServiceSumAggregateOutputType = {
    id: number | null
  }

  export type TableServiceMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    type: string | null
    status: string | null
    description: string | null
    localisation: string | null
  }

  export type TableServiceMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    type: string | null
    status: string | null
    description: string | null
    localisation: string | null
  }

  export type TableServiceCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    type: number
    status: number
    description: number
    localisation: number
    _all: number
  }


  export type TableServiceAvgAggregateInputType = {
    id?: true
  }

  export type TableServiceSumAggregateInputType = {
    id?: true
  }

  export type TableServiceMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    type?: true
    status?: true
    description?: true
    localisation?: true
  }

  export type TableServiceMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    type?: true
    status?: true
    description?: true
    localisation?: true
  }

  export type TableServiceCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    type?: true
    status?: true
    description?: true
    localisation?: true
    _all?: true
  }

  export type TableServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableService to aggregate.
     */
    where?: TableServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableServices to fetch.
     */
    orderBy?: TableServiceOrderByWithRelationInput | TableServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TableServices
    **/
    _count?: true | TableServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableServiceMaxAggregateInputType
  }

  export type GetTableServiceAggregateType<T extends TableServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateTableService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTableService[P]>
      : GetScalarType<T[P], AggregateTableService[P]>
  }




  export type TableServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableServiceWhereInput
    orderBy?: TableServiceOrderByWithAggregationInput | TableServiceOrderByWithAggregationInput[]
    by: TableServiceScalarFieldEnum[] | TableServiceScalarFieldEnum
    having?: TableServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableServiceCountAggregateInputType | true
    _avg?: TableServiceAvgAggregateInputType
    _sum?: TableServiceSumAggregateInputType
    _min?: TableServiceMinAggregateInputType
    _max?: TableServiceMaxAggregateInputType
  }

  export type TableServiceGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    name: string
    type: string
    status: string
    description: string
    localisation: string
    _count: TableServiceCountAggregateOutputType | null
    _avg: TableServiceAvgAggregateOutputType | null
    _sum: TableServiceSumAggregateOutputType | null
    _min: TableServiceMinAggregateOutputType | null
    _max: TableServiceMaxAggregateOutputType | null
  }

  type GetTableServiceGroupByPayload<T extends TableServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableServiceGroupByOutputType[P]>
            : GetScalarType<T[P], TableServiceGroupByOutputType[P]>
        }
      >
    >


  export type TableServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    description?: boolean
    localisation?: boolean
  }, ExtArgs["result"]["tableService"]>

  export type TableServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    description?: boolean
    localisation?: boolean
  }, ExtArgs["result"]["tableService"]>

  export type TableServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    description?: boolean
    localisation?: boolean
  }, ExtArgs["result"]["tableService"]>

  export type TableServiceSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    description?: boolean
    localisation?: boolean
  }

  export type TableServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "type" | "status" | "description" | "localisation", ExtArgs["result"]["tableService"]>

  export type $TableServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TableService"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      name: string
      type: string
      status: string
      description: string
      localisation: string
    }, ExtArgs["result"]["tableService"]>
    composites: {}
  }

  type TableServiceGetPayload<S extends boolean | null | undefined | TableServiceDefaultArgs> = $Result.GetResult<Prisma.$TableServicePayload, S>

  type TableServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableServiceCountAggregateInputType | true
    }

  export interface TableServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TableService'], meta: { name: 'TableService' } }
    /**
     * Find zero or one TableService that matches the filter.
     * @param {TableServiceFindUniqueArgs} args - Arguments to find a TableService
     * @example
     * // Get one TableService
     * const tableService = await prisma.tableService.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableServiceFindUniqueArgs>(args: SelectSubset<T, TableServiceFindUniqueArgs<ExtArgs>>): Prisma__TableServiceClient<$Result.GetResult<Prisma.$TableServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TableService that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableServiceFindUniqueOrThrowArgs} args - Arguments to find a TableService
     * @example
     * // Get one TableService
     * const tableService = await prisma.tableService.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, TableServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableServiceClient<$Result.GetResult<Prisma.$TableServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableService that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableServiceFindFirstArgs} args - Arguments to find a TableService
     * @example
     * // Get one TableService
     * const tableService = await prisma.tableService.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableServiceFindFirstArgs>(args?: SelectSubset<T, TableServiceFindFirstArgs<ExtArgs>>): Prisma__TableServiceClient<$Result.GetResult<Prisma.$TableServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableService that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableServiceFindFirstOrThrowArgs} args - Arguments to find a TableService
     * @example
     * // Get one TableService
     * const tableService = await prisma.tableService.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, TableServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableServiceClient<$Result.GetResult<Prisma.$TableServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TableServices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TableServices
     * const tableServices = await prisma.tableService.findMany()
     * 
     * // Get first 10 TableServices
     * const tableServices = await prisma.tableService.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableServiceWithIdOnly = await prisma.tableService.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableServiceFindManyArgs>(args?: SelectSubset<T, TableServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TableService.
     * @param {TableServiceCreateArgs} args - Arguments to create a TableService.
     * @example
     * // Create one TableService
     * const TableService = await prisma.tableService.create({
     *   data: {
     *     // ... data to create a TableService
     *   }
     * })
     * 
     */
    create<T extends TableServiceCreateArgs>(args: SelectSubset<T, TableServiceCreateArgs<ExtArgs>>): Prisma__TableServiceClient<$Result.GetResult<Prisma.$TableServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TableServices.
     * @param {TableServiceCreateManyArgs} args - Arguments to create many TableServices.
     * @example
     * // Create many TableServices
     * const tableService = await prisma.tableService.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableServiceCreateManyArgs>(args?: SelectSubset<T, TableServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TableServices and returns the data saved in the database.
     * @param {TableServiceCreateManyAndReturnArgs} args - Arguments to create many TableServices.
     * @example
     * // Create many TableServices
     * const tableService = await prisma.tableService.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TableServices and only return the `id`
     * const tableServiceWithIdOnly = await prisma.tableService.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, TableServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TableService.
     * @param {TableServiceDeleteArgs} args - Arguments to delete one TableService.
     * @example
     * // Delete one TableService
     * const TableService = await prisma.tableService.delete({
     *   where: {
     *     // ... filter to delete one TableService
     *   }
     * })
     * 
     */
    delete<T extends TableServiceDeleteArgs>(args: SelectSubset<T, TableServiceDeleteArgs<ExtArgs>>): Prisma__TableServiceClient<$Result.GetResult<Prisma.$TableServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TableService.
     * @param {TableServiceUpdateArgs} args - Arguments to update one TableService.
     * @example
     * // Update one TableService
     * const tableService = await prisma.tableService.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableServiceUpdateArgs>(args: SelectSubset<T, TableServiceUpdateArgs<ExtArgs>>): Prisma__TableServiceClient<$Result.GetResult<Prisma.$TableServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TableServices.
     * @param {TableServiceDeleteManyArgs} args - Arguments to filter TableServices to delete.
     * @example
     * // Delete a few TableServices
     * const { count } = await prisma.tableService.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableServiceDeleteManyArgs>(args?: SelectSubset<T, TableServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TableServices
     * const tableService = await prisma.tableService.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableServiceUpdateManyArgs>(args: SelectSubset<T, TableServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableServices and returns the data updated in the database.
     * @param {TableServiceUpdateManyAndReturnArgs} args - Arguments to update many TableServices.
     * @example
     * // Update many TableServices
     * const tableService = await prisma.tableService.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TableServices and only return the `id`
     * const tableServiceWithIdOnly = await prisma.tableService.updateManyAndReturn({
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
    updateManyAndReturn<T extends TableServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, TableServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TableService.
     * @param {TableServiceUpsertArgs} args - Arguments to update or create a TableService.
     * @example
     * // Update or create a TableService
     * const tableService = await prisma.tableService.upsert({
     *   create: {
     *     // ... data to create a TableService
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TableService we want to update
     *   }
     * })
     */
    upsert<T extends TableServiceUpsertArgs>(args: SelectSubset<T, TableServiceUpsertArgs<ExtArgs>>): Prisma__TableServiceClient<$Result.GetResult<Prisma.$TableServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TableServices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableServiceCountArgs} args - Arguments to filter TableServices to count.
     * @example
     * // Count the number of TableServices
     * const count = await prisma.tableService.count({
     *   where: {
     *     // ... the filter for the TableServices we want to count
     *   }
     * })
    **/
    count<T extends TableServiceCountArgs>(
      args?: Subset<T, TableServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TableService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableServiceAggregateArgs>(args: Subset<T, TableServiceAggregateArgs>): Prisma.PrismaPromise<GetTableServiceAggregateType<T>>

    /**
     * Group by TableService.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableServiceGroupByArgs} args - Group by arguments.
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
      T extends TableServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableServiceGroupByArgs['orderBy'] }
        : { orderBy?: TableServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TableServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TableService model
   */
  readonly fields: TableServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TableService.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TableService model
   */
  interface TableServiceFieldRefs {
    readonly id: FieldRef<"TableService", 'Int'>
    readonly createdAt: FieldRef<"TableService", 'DateTime'>
    readonly updatedAt: FieldRef<"TableService", 'DateTime'>
    readonly name: FieldRef<"TableService", 'String'>
    readonly type: FieldRef<"TableService", 'String'>
    readonly status: FieldRef<"TableService", 'String'>
    readonly description: FieldRef<"TableService", 'String'>
    readonly localisation: FieldRef<"TableService", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TableService findUnique
   */
  export type TableServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableService
     */
    select?: TableServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableService
     */
    omit?: TableServiceOmit<ExtArgs> | null
    /**
     * Filter, which TableService to fetch.
     */
    where: TableServiceWhereUniqueInput
  }

  /**
   * TableService findUniqueOrThrow
   */
  export type TableServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableService
     */
    select?: TableServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableService
     */
    omit?: TableServiceOmit<ExtArgs> | null
    /**
     * Filter, which TableService to fetch.
     */
    where: TableServiceWhereUniqueInput
  }

  /**
   * TableService findFirst
   */
  export type TableServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableService
     */
    select?: TableServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableService
     */
    omit?: TableServiceOmit<ExtArgs> | null
    /**
     * Filter, which TableService to fetch.
     */
    where?: TableServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableServices to fetch.
     */
    orderBy?: TableServiceOrderByWithRelationInput | TableServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableServices.
     */
    cursor?: TableServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableServices.
     */
    distinct?: TableServiceScalarFieldEnum | TableServiceScalarFieldEnum[]
  }

  /**
   * TableService findFirstOrThrow
   */
  export type TableServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableService
     */
    select?: TableServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableService
     */
    omit?: TableServiceOmit<ExtArgs> | null
    /**
     * Filter, which TableService to fetch.
     */
    where?: TableServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableServices to fetch.
     */
    orderBy?: TableServiceOrderByWithRelationInput | TableServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableServices.
     */
    cursor?: TableServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableServices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableServices.
     */
    distinct?: TableServiceScalarFieldEnum | TableServiceScalarFieldEnum[]
  }

  /**
   * TableService findMany
   */
  export type TableServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableService
     */
    select?: TableServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableService
     */
    omit?: TableServiceOmit<ExtArgs> | null
    /**
     * Filter, which TableServices to fetch.
     */
    where?: TableServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableServices to fetch.
     */
    orderBy?: TableServiceOrderByWithRelationInput | TableServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TableServices.
     */
    cursor?: TableServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableServices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableServices.
     */
    skip?: number
    distinct?: TableServiceScalarFieldEnum | TableServiceScalarFieldEnum[]
  }

  /**
   * TableService create
   */
  export type TableServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableService
     */
    select?: TableServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableService
     */
    omit?: TableServiceOmit<ExtArgs> | null
    /**
     * The data needed to create a TableService.
     */
    data: XOR<TableServiceCreateInput, TableServiceUncheckedCreateInput>
  }

  /**
   * TableService createMany
   */
  export type TableServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TableServices.
     */
    data: TableServiceCreateManyInput | TableServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableService createManyAndReturn
   */
  export type TableServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableService
     */
    select?: TableServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableService
     */
    omit?: TableServiceOmit<ExtArgs> | null
    /**
     * The data used to create many TableServices.
     */
    data: TableServiceCreateManyInput | TableServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableService update
   */
  export type TableServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableService
     */
    select?: TableServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableService
     */
    omit?: TableServiceOmit<ExtArgs> | null
    /**
     * The data needed to update a TableService.
     */
    data: XOR<TableServiceUpdateInput, TableServiceUncheckedUpdateInput>
    /**
     * Choose, which TableService to update.
     */
    where: TableServiceWhereUniqueInput
  }

  /**
   * TableService updateMany
   */
  export type TableServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TableServices.
     */
    data: XOR<TableServiceUpdateManyMutationInput, TableServiceUncheckedUpdateManyInput>
    /**
     * Filter which TableServices to update
     */
    where?: TableServiceWhereInput
    /**
     * Limit how many TableServices to update.
     */
    limit?: number
  }

  /**
   * TableService updateManyAndReturn
   */
  export type TableServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableService
     */
    select?: TableServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableService
     */
    omit?: TableServiceOmit<ExtArgs> | null
    /**
     * The data used to update TableServices.
     */
    data: XOR<TableServiceUpdateManyMutationInput, TableServiceUncheckedUpdateManyInput>
    /**
     * Filter which TableServices to update
     */
    where?: TableServiceWhereInput
    /**
     * Limit how many TableServices to update.
     */
    limit?: number
  }

  /**
   * TableService upsert
   */
  export type TableServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableService
     */
    select?: TableServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableService
     */
    omit?: TableServiceOmit<ExtArgs> | null
    /**
     * The filter to search for the TableService to update in case it exists.
     */
    where: TableServiceWhereUniqueInput
    /**
     * In case the TableService found by the `where` argument doesn't exist, create a new TableService with this data.
     */
    create: XOR<TableServiceCreateInput, TableServiceUncheckedCreateInput>
    /**
     * In case the TableService was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableServiceUpdateInput, TableServiceUncheckedUpdateInput>
  }

  /**
   * TableService delete
   */
  export type TableServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableService
     */
    select?: TableServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableService
     */
    omit?: TableServiceOmit<ExtArgs> | null
    /**
     * Filter which TableService to delete.
     */
    where: TableServiceWhereUniqueInput
  }

  /**
   * TableService deleteMany
   */
  export type TableServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableServices to delete
     */
    where?: TableServiceWhereInput
    /**
     * Limit how many TableServices to delete.
     */
    limit?: number
  }

  /**
   * TableService without action
   */
  export type TableServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableService
     */
    select?: TableServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableService
     */
    omit?: TableServiceOmit<ExtArgs> | null
  }


  /**
   * Model TableObject
   */

  export type AggregateTableObject = {
    _count: TableObjectCountAggregateOutputType | null
    _avg: TableObjectAvgAggregateOutputType | null
    _sum: TableObjectSumAggregateOutputType | null
    _min: TableObjectMinAggregateOutputType | null
    _max: TableObjectMaxAggregateOutputType | null
  }

  export type TableObjectAvgAggregateOutputType = {
    id: number | null
  }

  export type TableObjectSumAggregateOutputType = {
    id: number | null
  }

  export type TableObjectMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    type: string | null
    status: string | null
    location: string | null
    lastUpdate: Date | null
  }

  export type TableObjectMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    type: string | null
    status: string | null
    location: string | null
    lastUpdate: Date | null
  }

  export type TableObjectCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    type: number
    status: number
    location: number
    lastUpdate: number
    _all: number
  }


  export type TableObjectAvgAggregateInputType = {
    id?: true
  }

  export type TableObjectSumAggregateInputType = {
    id?: true
  }

  export type TableObjectMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    type?: true
    status?: true
    location?: true
    lastUpdate?: true
  }

  export type TableObjectMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    type?: true
    status?: true
    location?: true
    lastUpdate?: true
  }

  export type TableObjectCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    type?: true
    status?: true
    location?: true
    lastUpdate?: true
    _all?: true
  }

  export type TableObjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableObject to aggregate.
     */
    where?: TableObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableObjects to fetch.
     */
    orderBy?: TableObjectOrderByWithRelationInput | TableObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableObjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableObjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TableObjects
    **/
    _count?: true | TableObjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableObjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableObjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableObjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableObjectMaxAggregateInputType
  }

  export type GetTableObjectAggregateType<T extends TableObjectAggregateArgs> = {
        [P in keyof T & keyof AggregateTableObject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTableObject[P]>
      : GetScalarType<T[P], AggregateTableObject[P]>
  }




  export type TableObjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableObjectWhereInput
    orderBy?: TableObjectOrderByWithAggregationInput | TableObjectOrderByWithAggregationInput[]
    by: TableObjectScalarFieldEnum[] | TableObjectScalarFieldEnum
    having?: TableObjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableObjectCountAggregateInputType | true
    _avg?: TableObjectAvgAggregateInputType
    _sum?: TableObjectSumAggregateInputType
    _min?: TableObjectMinAggregateInputType
    _max?: TableObjectMaxAggregateInputType
  }

  export type TableObjectGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    name: string
    type: string
    status: string
    location: string
    lastUpdate: Date
    _count: TableObjectCountAggregateOutputType | null
    _avg: TableObjectAvgAggregateOutputType | null
    _sum: TableObjectSumAggregateOutputType | null
    _min: TableObjectMinAggregateOutputType | null
    _max: TableObjectMaxAggregateOutputType | null
  }

  type GetTableObjectGroupByPayload<T extends TableObjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableObjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableObjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableObjectGroupByOutputType[P]>
            : GetScalarType<T[P], TableObjectGroupByOutputType[P]>
        }
      >
    >


  export type TableObjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    location?: boolean
    lastUpdate?: boolean
  }, ExtArgs["result"]["tableObject"]>

  export type TableObjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    location?: boolean
    lastUpdate?: boolean
  }, ExtArgs["result"]["tableObject"]>

  export type TableObjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    location?: boolean
    lastUpdate?: boolean
  }, ExtArgs["result"]["tableObject"]>

  export type TableObjectSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    type?: boolean
    status?: boolean
    location?: boolean
    lastUpdate?: boolean
  }

  export type TableObjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "type" | "status" | "location" | "lastUpdate", ExtArgs["result"]["tableObject"]>

  export type $TableObjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TableObject"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      name: string
      type: string
      status: string
      location: string
      lastUpdate: Date
    }, ExtArgs["result"]["tableObject"]>
    composites: {}
  }

  type TableObjectGetPayload<S extends boolean | null | undefined | TableObjectDefaultArgs> = $Result.GetResult<Prisma.$TableObjectPayload, S>

  type TableObjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableObjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableObjectCountAggregateInputType | true
    }

  export interface TableObjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TableObject'], meta: { name: 'TableObject' } }
    /**
     * Find zero or one TableObject that matches the filter.
     * @param {TableObjectFindUniqueArgs} args - Arguments to find a TableObject
     * @example
     * // Get one TableObject
     * const tableObject = await prisma.tableObject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableObjectFindUniqueArgs>(args: SelectSubset<T, TableObjectFindUniqueArgs<ExtArgs>>): Prisma__TableObjectClient<$Result.GetResult<Prisma.$TableObjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TableObject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableObjectFindUniqueOrThrowArgs} args - Arguments to find a TableObject
     * @example
     * // Get one TableObject
     * const tableObject = await prisma.tableObject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableObjectFindUniqueOrThrowArgs>(args: SelectSubset<T, TableObjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableObjectClient<$Result.GetResult<Prisma.$TableObjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableObject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableObjectFindFirstArgs} args - Arguments to find a TableObject
     * @example
     * // Get one TableObject
     * const tableObject = await prisma.tableObject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableObjectFindFirstArgs>(args?: SelectSubset<T, TableObjectFindFirstArgs<ExtArgs>>): Prisma__TableObjectClient<$Result.GetResult<Prisma.$TableObjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableObject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableObjectFindFirstOrThrowArgs} args - Arguments to find a TableObject
     * @example
     * // Get one TableObject
     * const tableObject = await prisma.tableObject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableObjectFindFirstOrThrowArgs>(args?: SelectSubset<T, TableObjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableObjectClient<$Result.GetResult<Prisma.$TableObjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TableObjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableObjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TableObjects
     * const tableObjects = await prisma.tableObject.findMany()
     * 
     * // Get first 10 TableObjects
     * const tableObjects = await prisma.tableObject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableObjectWithIdOnly = await prisma.tableObject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableObjectFindManyArgs>(args?: SelectSubset<T, TableObjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableObjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TableObject.
     * @param {TableObjectCreateArgs} args - Arguments to create a TableObject.
     * @example
     * // Create one TableObject
     * const TableObject = await prisma.tableObject.create({
     *   data: {
     *     // ... data to create a TableObject
     *   }
     * })
     * 
     */
    create<T extends TableObjectCreateArgs>(args: SelectSubset<T, TableObjectCreateArgs<ExtArgs>>): Prisma__TableObjectClient<$Result.GetResult<Prisma.$TableObjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TableObjects.
     * @param {TableObjectCreateManyArgs} args - Arguments to create many TableObjects.
     * @example
     * // Create many TableObjects
     * const tableObject = await prisma.tableObject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableObjectCreateManyArgs>(args?: SelectSubset<T, TableObjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TableObjects and returns the data saved in the database.
     * @param {TableObjectCreateManyAndReturnArgs} args - Arguments to create many TableObjects.
     * @example
     * // Create many TableObjects
     * const tableObject = await prisma.tableObject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TableObjects and only return the `id`
     * const tableObjectWithIdOnly = await prisma.tableObject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableObjectCreateManyAndReturnArgs>(args?: SelectSubset<T, TableObjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableObjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TableObject.
     * @param {TableObjectDeleteArgs} args - Arguments to delete one TableObject.
     * @example
     * // Delete one TableObject
     * const TableObject = await prisma.tableObject.delete({
     *   where: {
     *     // ... filter to delete one TableObject
     *   }
     * })
     * 
     */
    delete<T extends TableObjectDeleteArgs>(args: SelectSubset<T, TableObjectDeleteArgs<ExtArgs>>): Prisma__TableObjectClient<$Result.GetResult<Prisma.$TableObjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TableObject.
     * @param {TableObjectUpdateArgs} args - Arguments to update one TableObject.
     * @example
     * // Update one TableObject
     * const tableObject = await prisma.tableObject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableObjectUpdateArgs>(args: SelectSubset<T, TableObjectUpdateArgs<ExtArgs>>): Prisma__TableObjectClient<$Result.GetResult<Prisma.$TableObjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TableObjects.
     * @param {TableObjectDeleteManyArgs} args - Arguments to filter TableObjects to delete.
     * @example
     * // Delete a few TableObjects
     * const { count } = await prisma.tableObject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableObjectDeleteManyArgs>(args?: SelectSubset<T, TableObjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableObjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableObjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TableObjects
     * const tableObject = await prisma.tableObject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableObjectUpdateManyArgs>(args: SelectSubset<T, TableObjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableObjects and returns the data updated in the database.
     * @param {TableObjectUpdateManyAndReturnArgs} args - Arguments to update many TableObjects.
     * @example
     * // Update many TableObjects
     * const tableObject = await prisma.tableObject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TableObjects and only return the `id`
     * const tableObjectWithIdOnly = await prisma.tableObject.updateManyAndReturn({
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
    updateManyAndReturn<T extends TableObjectUpdateManyAndReturnArgs>(args: SelectSubset<T, TableObjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableObjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TableObject.
     * @param {TableObjectUpsertArgs} args - Arguments to update or create a TableObject.
     * @example
     * // Update or create a TableObject
     * const tableObject = await prisma.tableObject.upsert({
     *   create: {
     *     // ... data to create a TableObject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TableObject we want to update
     *   }
     * })
     */
    upsert<T extends TableObjectUpsertArgs>(args: SelectSubset<T, TableObjectUpsertArgs<ExtArgs>>): Prisma__TableObjectClient<$Result.GetResult<Prisma.$TableObjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TableObjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableObjectCountArgs} args - Arguments to filter TableObjects to count.
     * @example
     * // Count the number of TableObjects
     * const count = await prisma.tableObject.count({
     *   where: {
     *     // ... the filter for the TableObjects we want to count
     *   }
     * })
    **/
    count<T extends TableObjectCountArgs>(
      args?: Subset<T, TableObjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableObjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TableObject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableObjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableObjectAggregateArgs>(args: Subset<T, TableObjectAggregateArgs>): Prisma.PrismaPromise<GetTableObjectAggregateType<T>>

    /**
     * Group by TableObject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableObjectGroupByArgs} args - Group by arguments.
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
      T extends TableObjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableObjectGroupByArgs['orderBy'] }
        : { orderBy?: TableObjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TableObjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableObjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TableObject model
   */
  readonly fields: TableObjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TableObject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableObjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TableObject model
   */
  interface TableObjectFieldRefs {
    readonly id: FieldRef<"TableObject", 'Int'>
    readonly createdAt: FieldRef<"TableObject", 'DateTime'>
    readonly updatedAt: FieldRef<"TableObject", 'DateTime'>
    readonly name: FieldRef<"TableObject", 'String'>
    readonly type: FieldRef<"TableObject", 'String'>
    readonly status: FieldRef<"TableObject", 'String'>
    readonly location: FieldRef<"TableObject", 'String'>
    readonly lastUpdate: FieldRef<"TableObject", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TableObject findUnique
   */
  export type TableObjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableObject
     */
    select?: TableObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableObject
     */
    omit?: TableObjectOmit<ExtArgs> | null
    /**
     * Filter, which TableObject to fetch.
     */
    where: TableObjectWhereUniqueInput
  }

  /**
   * TableObject findUniqueOrThrow
   */
  export type TableObjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableObject
     */
    select?: TableObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableObject
     */
    omit?: TableObjectOmit<ExtArgs> | null
    /**
     * Filter, which TableObject to fetch.
     */
    where: TableObjectWhereUniqueInput
  }

  /**
   * TableObject findFirst
   */
  export type TableObjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableObject
     */
    select?: TableObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableObject
     */
    omit?: TableObjectOmit<ExtArgs> | null
    /**
     * Filter, which TableObject to fetch.
     */
    where?: TableObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableObjects to fetch.
     */
    orderBy?: TableObjectOrderByWithRelationInput | TableObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableObjects.
     */
    cursor?: TableObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableObjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableObjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableObjects.
     */
    distinct?: TableObjectScalarFieldEnum | TableObjectScalarFieldEnum[]
  }

  /**
   * TableObject findFirstOrThrow
   */
  export type TableObjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableObject
     */
    select?: TableObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableObject
     */
    omit?: TableObjectOmit<ExtArgs> | null
    /**
     * Filter, which TableObject to fetch.
     */
    where?: TableObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableObjects to fetch.
     */
    orderBy?: TableObjectOrderByWithRelationInput | TableObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableObjects.
     */
    cursor?: TableObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableObjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableObjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableObjects.
     */
    distinct?: TableObjectScalarFieldEnum | TableObjectScalarFieldEnum[]
  }

  /**
   * TableObject findMany
   */
  export type TableObjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableObject
     */
    select?: TableObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableObject
     */
    omit?: TableObjectOmit<ExtArgs> | null
    /**
     * Filter, which TableObjects to fetch.
     */
    where?: TableObjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableObjects to fetch.
     */
    orderBy?: TableObjectOrderByWithRelationInput | TableObjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TableObjects.
     */
    cursor?: TableObjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableObjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableObjects.
     */
    skip?: number
    distinct?: TableObjectScalarFieldEnum | TableObjectScalarFieldEnum[]
  }

  /**
   * TableObject create
   */
  export type TableObjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableObject
     */
    select?: TableObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableObject
     */
    omit?: TableObjectOmit<ExtArgs> | null
    /**
     * The data needed to create a TableObject.
     */
    data: XOR<TableObjectCreateInput, TableObjectUncheckedCreateInput>
  }

  /**
   * TableObject createMany
   */
  export type TableObjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TableObjects.
     */
    data: TableObjectCreateManyInput | TableObjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableObject createManyAndReturn
   */
  export type TableObjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableObject
     */
    select?: TableObjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableObject
     */
    omit?: TableObjectOmit<ExtArgs> | null
    /**
     * The data used to create many TableObjects.
     */
    data: TableObjectCreateManyInput | TableObjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableObject update
   */
  export type TableObjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableObject
     */
    select?: TableObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableObject
     */
    omit?: TableObjectOmit<ExtArgs> | null
    /**
     * The data needed to update a TableObject.
     */
    data: XOR<TableObjectUpdateInput, TableObjectUncheckedUpdateInput>
    /**
     * Choose, which TableObject to update.
     */
    where: TableObjectWhereUniqueInput
  }

  /**
   * TableObject updateMany
   */
  export type TableObjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TableObjects.
     */
    data: XOR<TableObjectUpdateManyMutationInput, TableObjectUncheckedUpdateManyInput>
    /**
     * Filter which TableObjects to update
     */
    where?: TableObjectWhereInput
    /**
     * Limit how many TableObjects to update.
     */
    limit?: number
  }

  /**
   * TableObject updateManyAndReturn
   */
  export type TableObjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableObject
     */
    select?: TableObjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableObject
     */
    omit?: TableObjectOmit<ExtArgs> | null
    /**
     * The data used to update TableObjects.
     */
    data: XOR<TableObjectUpdateManyMutationInput, TableObjectUncheckedUpdateManyInput>
    /**
     * Filter which TableObjects to update
     */
    where?: TableObjectWhereInput
    /**
     * Limit how many TableObjects to update.
     */
    limit?: number
  }

  /**
   * TableObject upsert
   */
  export type TableObjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableObject
     */
    select?: TableObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableObject
     */
    omit?: TableObjectOmit<ExtArgs> | null
    /**
     * The filter to search for the TableObject to update in case it exists.
     */
    where: TableObjectWhereUniqueInput
    /**
     * In case the TableObject found by the `where` argument doesn't exist, create a new TableObject with this data.
     */
    create: XOR<TableObjectCreateInput, TableObjectUncheckedCreateInput>
    /**
     * In case the TableObject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableObjectUpdateInput, TableObjectUncheckedUpdateInput>
  }

  /**
   * TableObject delete
   */
  export type TableObjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableObject
     */
    select?: TableObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableObject
     */
    omit?: TableObjectOmit<ExtArgs> | null
    /**
     * Filter which TableObject to delete.
     */
    where: TableObjectWhereUniqueInput
  }

  /**
   * TableObject deleteMany
   */
  export type TableObjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableObjects to delete
     */
    where?: TableObjectWhereInput
    /**
     * Limit how many TableObjects to delete.
     */
    limit?: number
  }

  /**
   * TableObject without action
   */
  export type TableObjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableObject
     */
    select?: TableObjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableObject
     */
    omit?: TableObjectOmit<ExtArgs> | null
  }


  /**
   * Model TableIncident
   */

  export type AggregateTableIncident = {
    _count: TableIncidentCountAggregateOutputType | null
    _avg: TableIncidentAvgAggregateOutputType | null
    _sum: TableIncidentSumAggregateOutputType | null
    _min: TableIncidentMinAggregateOutputType | null
    _max: TableIncidentMaxAggregateOutputType | null
  }

  export type TableIncidentAvgAggregateOutputType = {
    id: number | null
  }

  export type TableIncidentSumAggregateOutputType = {
    id: number | null
  }

  export type TableIncidentMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    status: string | null
    location: string | null
    username: string | null
  }

  export type TableIncidentMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    title: string | null
    description: string | null
    status: string | null
    location: string | null
    username: string | null
  }

  export type TableIncidentCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    title: number
    description: number
    status: number
    location: number
    username: number
    _all: number
  }


  export type TableIncidentAvgAggregateInputType = {
    id?: true
  }

  export type TableIncidentSumAggregateInputType = {
    id?: true
  }

  export type TableIncidentMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    status?: true
    location?: true
    username?: true
  }

  export type TableIncidentMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    status?: true
    location?: true
    username?: true
  }

  export type TableIncidentCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    title?: true
    description?: true
    status?: true
    location?: true
    username?: true
    _all?: true
  }

  export type TableIncidentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableIncident to aggregate.
     */
    where?: TableIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableIncidents to fetch.
     */
    orderBy?: TableIncidentOrderByWithRelationInput | TableIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TableIncidents
    **/
    _count?: true | TableIncidentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableIncidentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableIncidentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableIncidentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableIncidentMaxAggregateInputType
  }

  export type GetTableIncidentAggregateType<T extends TableIncidentAggregateArgs> = {
        [P in keyof T & keyof AggregateTableIncident]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTableIncident[P]>
      : GetScalarType<T[P], AggregateTableIncident[P]>
  }




  export type TableIncidentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableIncidentWhereInput
    orderBy?: TableIncidentOrderByWithAggregationInput | TableIncidentOrderByWithAggregationInput[]
    by: TableIncidentScalarFieldEnum[] | TableIncidentScalarFieldEnum
    having?: TableIncidentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableIncidentCountAggregateInputType | true
    _avg?: TableIncidentAvgAggregateInputType
    _sum?: TableIncidentSumAggregateInputType
    _min?: TableIncidentMinAggregateInputType
    _max?: TableIncidentMaxAggregateInputType
  }

  export type TableIncidentGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    title: string
    description: string
    status: string
    location: string
    username: string
    _count: TableIncidentCountAggregateOutputType | null
    _avg: TableIncidentAvgAggregateOutputType | null
    _sum: TableIncidentSumAggregateOutputType | null
    _min: TableIncidentMinAggregateOutputType | null
    _max: TableIncidentMaxAggregateOutputType | null
  }

  type GetTableIncidentGroupByPayload<T extends TableIncidentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableIncidentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableIncidentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableIncidentGroupByOutputType[P]>
            : GetScalarType<T[P], TableIncidentGroupByOutputType[P]>
        }
      >
    >


  export type TableIncidentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    location?: boolean
    username?: boolean
    reportedByUsername?: boolean | TableUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tableIncident"]>

  export type TableIncidentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    location?: boolean
    username?: boolean
    reportedByUsername?: boolean | TableUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tableIncident"]>

  export type TableIncidentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    location?: boolean
    username?: boolean
    reportedByUsername?: boolean | TableUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tableIncident"]>

  export type TableIncidentSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    title?: boolean
    description?: boolean
    status?: boolean
    location?: boolean
    username?: boolean
  }

  export type TableIncidentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "title" | "description" | "status" | "location" | "username", ExtArgs["result"]["tableIncident"]>
  export type TableIncidentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reportedByUsername?: boolean | TableUserDefaultArgs<ExtArgs>
  }
  export type TableIncidentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reportedByUsername?: boolean | TableUserDefaultArgs<ExtArgs>
  }
  export type TableIncidentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reportedByUsername?: boolean | TableUserDefaultArgs<ExtArgs>
  }

  export type $TableIncidentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TableIncident"
    objects: {
      reportedByUsername: Prisma.$TableUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      title: string
      description: string
      status: string
      location: string
      username: string
    }, ExtArgs["result"]["tableIncident"]>
    composites: {}
  }

  type TableIncidentGetPayload<S extends boolean | null | undefined | TableIncidentDefaultArgs> = $Result.GetResult<Prisma.$TableIncidentPayload, S>

  type TableIncidentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableIncidentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableIncidentCountAggregateInputType | true
    }

  export interface TableIncidentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TableIncident'], meta: { name: 'TableIncident' } }
    /**
     * Find zero or one TableIncident that matches the filter.
     * @param {TableIncidentFindUniqueArgs} args - Arguments to find a TableIncident
     * @example
     * // Get one TableIncident
     * const tableIncident = await prisma.tableIncident.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableIncidentFindUniqueArgs>(args: SelectSubset<T, TableIncidentFindUniqueArgs<ExtArgs>>): Prisma__TableIncidentClient<$Result.GetResult<Prisma.$TableIncidentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TableIncident that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableIncidentFindUniqueOrThrowArgs} args - Arguments to find a TableIncident
     * @example
     * // Get one TableIncident
     * const tableIncident = await prisma.tableIncident.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableIncidentFindUniqueOrThrowArgs>(args: SelectSubset<T, TableIncidentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableIncidentClient<$Result.GetResult<Prisma.$TableIncidentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableIncident that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableIncidentFindFirstArgs} args - Arguments to find a TableIncident
     * @example
     * // Get one TableIncident
     * const tableIncident = await prisma.tableIncident.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableIncidentFindFirstArgs>(args?: SelectSubset<T, TableIncidentFindFirstArgs<ExtArgs>>): Prisma__TableIncidentClient<$Result.GetResult<Prisma.$TableIncidentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableIncident that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableIncidentFindFirstOrThrowArgs} args - Arguments to find a TableIncident
     * @example
     * // Get one TableIncident
     * const tableIncident = await prisma.tableIncident.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableIncidentFindFirstOrThrowArgs>(args?: SelectSubset<T, TableIncidentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableIncidentClient<$Result.GetResult<Prisma.$TableIncidentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TableIncidents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableIncidentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TableIncidents
     * const tableIncidents = await prisma.tableIncident.findMany()
     * 
     * // Get first 10 TableIncidents
     * const tableIncidents = await prisma.tableIncident.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableIncidentWithIdOnly = await prisma.tableIncident.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableIncidentFindManyArgs>(args?: SelectSubset<T, TableIncidentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableIncidentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TableIncident.
     * @param {TableIncidentCreateArgs} args - Arguments to create a TableIncident.
     * @example
     * // Create one TableIncident
     * const TableIncident = await prisma.tableIncident.create({
     *   data: {
     *     // ... data to create a TableIncident
     *   }
     * })
     * 
     */
    create<T extends TableIncidentCreateArgs>(args: SelectSubset<T, TableIncidentCreateArgs<ExtArgs>>): Prisma__TableIncidentClient<$Result.GetResult<Prisma.$TableIncidentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TableIncidents.
     * @param {TableIncidentCreateManyArgs} args - Arguments to create many TableIncidents.
     * @example
     * // Create many TableIncidents
     * const tableIncident = await prisma.tableIncident.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableIncidentCreateManyArgs>(args?: SelectSubset<T, TableIncidentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TableIncidents and returns the data saved in the database.
     * @param {TableIncidentCreateManyAndReturnArgs} args - Arguments to create many TableIncidents.
     * @example
     * // Create many TableIncidents
     * const tableIncident = await prisma.tableIncident.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TableIncidents and only return the `id`
     * const tableIncidentWithIdOnly = await prisma.tableIncident.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableIncidentCreateManyAndReturnArgs>(args?: SelectSubset<T, TableIncidentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableIncidentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TableIncident.
     * @param {TableIncidentDeleteArgs} args - Arguments to delete one TableIncident.
     * @example
     * // Delete one TableIncident
     * const TableIncident = await prisma.tableIncident.delete({
     *   where: {
     *     // ... filter to delete one TableIncident
     *   }
     * })
     * 
     */
    delete<T extends TableIncidentDeleteArgs>(args: SelectSubset<T, TableIncidentDeleteArgs<ExtArgs>>): Prisma__TableIncidentClient<$Result.GetResult<Prisma.$TableIncidentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TableIncident.
     * @param {TableIncidentUpdateArgs} args - Arguments to update one TableIncident.
     * @example
     * // Update one TableIncident
     * const tableIncident = await prisma.tableIncident.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableIncidentUpdateArgs>(args: SelectSubset<T, TableIncidentUpdateArgs<ExtArgs>>): Prisma__TableIncidentClient<$Result.GetResult<Prisma.$TableIncidentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TableIncidents.
     * @param {TableIncidentDeleteManyArgs} args - Arguments to filter TableIncidents to delete.
     * @example
     * // Delete a few TableIncidents
     * const { count } = await prisma.tableIncident.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableIncidentDeleteManyArgs>(args?: SelectSubset<T, TableIncidentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableIncidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableIncidentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TableIncidents
     * const tableIncident = await prisma.tableIncident.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableIncidentUpdateManyArgs>(args: SelectSubset<T, TableIncidentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableIncidents and returns the data updated in the database.
     * @param {TableIncidentUpdateManyAndReturnArgs} args - Arguments to update many TableIncidents.
     * @example
     * // Update many TableIncidents
     * const tableIncident = await prisma.tableIncident.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TableIncidents and only return the `id`
     * const tableIncidentWithIdOnly = await prisma.tableIncident.updateManyAndReturn({
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
    updateManyAndReturn<T extends TableIncidentUpdateManyAndReturnArgs>(args: SelectSubset<T, TableIncidentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableIncidentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TableIncident.
     * @param {TableIncidentUpsertArgs} args - Arguments to update or create a TableIncident.
     * @example
     * // Update or create a TableIncident
     * const tableIncident = await prisma.tableIncident.upsert({
     *   create: {
     *     // ... data to create a TableIncident
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TableIncident we want to update
     *   }
     * })
     */
    upsert<T extends TableIncidentUpsertArgs>(args: SelectSubset<T, TableIncidentUpsertArgs<ExtArgs>>): Prisma__TableIncidentClient<$Result.GetResult<Prisma.$TableIncidentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TableIncidents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableIncidentCountArgs} args - Arguments to filter TableIncidents to count.
     * @example
     * // Count the number of TableIncidents
     * const count = await prisma.tableIncident.count({
     *   where: {
     *     // ... the filter for the TableIncidents we want to count
     *   }
     * })
    **/
    count<T extends TableIncidentCountArgs>(
      args?: Subset<T, TableIncidentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableIncidentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TableIncident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableIncidentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableIncidentAggregateArgs>(args: Subset<T, TableIncidentAggregateArgs>): Prisma.PrismaPromise<GetTableIncidentAggregateType<T>>

    /**
     * Group by TableIncident.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableIncidentGroupByArgs} args - Group by arguments.
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
      T extends TableIncidentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableIncidentGroupByArgs['orderBy'] }
        : { orderBy?: TableIncidentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TableIncidentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableIncidentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TableIncident model
   */
  readonly fields: TableIncidentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TableIncident.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableIncidentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reportedByUsername<T extends TableUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TableUserDefaultArgs<ExtArgs>>): Prisma__TableUserClient<$Result.GetResult<Prisma.$TableUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TableIncident model
   */
  interface TableIncidentFieldRefs {
    readonly id: FieldRef<"TableIncident", 'Int'>
    readonly createdAt: FieldRef<"TableIncident", 'DateTime'>
    readonly updatedAt: FieldRef<"TableIncident", 'DateTime'>
    readonly title: FieldRef<"TableIncident", 'String'>
    readonly description: FieldRef<"TableIncident", 'String'>
    readonly status: FieldRef<"TableIncident", 'String'>
    readonly location: FieldRef<"TableIncident", 'String'>
    readonly username: FieldRef<"TableIncident", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TableIncident findUnique
   */
  export type TableIncidentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentInclude<ExtArgs> | null
    /**
     * Filter, which TableIncident to fetch.
     */
    where: TableIncidentWhereUniqueInput
  }

  /**
   * TableIncident findUniqueOrThrow
   */
  export type TableIncidentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentInclude<ExtArgs> | null
    /**
     * Filter, which TableIncident to fetch.
     */
    where: TableIncidentWhereUniqueInput
  }

  /**
   * TableIncident findFirst
   */
  export type TableIncidentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentInclude<ExtArgs> | null
    /**
     * Filter, which TableIncident to fetch.
     */
    where?: TableIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableIncidents to fetch.
     */
    orderBy?: TableIncidentOrderByWithRelationInput | TableIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableIncidents.
     */
    cursor?: TableIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableIncidents.
     */
    distinct?: TableIncidentScalarFieldEnum | TableIncidentScalarFieldEnum[]
  }

  /**
   * TableIncident findFirstOrThrow
   */
  export type TableIncidentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentInclude<ExtArgs> | null
    /**
     * Filter, which TableIncident to fetch.
     */
    where?: TableIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableIncidents to fetch.
     */
    orderBy?: TableIncidentOrderByWithRelationInput | TableIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableIncidents.
     */
    cursor?: TableIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableIncidents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableIncidents.
     */
    distinct?: TableIncidentScalarFieldEnum | TableIncidentScalarFieldEnum[]
  }

  /**
   * TableIncident findMany
   */
  export type TableIncidentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentInclude<ExtArgs> | null
    /**
     * Filter, which TableIncidents to fetch.
     */
    where?: TableIncidentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableIncidents to fetch.
     */
    orderBy?: TableIncidentOrderByWithRelationInput | TableIncidentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TableIncidents.
     */
    cursor?: TableIncidentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableIncidents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableIncidents.
     */
    skip?: number
    distinct?: TableIncidentScalarFieldEnum | TableIncidentScalarFieldEnum[]
  }

  /**
   * TableIncident create
   */
  export type TableIncidentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentInclude<ExtArgs> | null
    /**
     * The data needed to create a TableIncident.
     */
    data: XOR<TableIncidentCreateInput, TableIncidentUncheckedCreateInput>
  }

  /**
   * TableIncident createMany
   */
  export type TableIncidentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TableIncidents.
     */
    data: TableIncidentCreateManyInput | TableIncidentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableIncident createManyAndReturn
   */
  export type TableIncidentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * The data used to create many TableIncidents.
     */
    data: TableIncidentCreateManyInput | TableIncidentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TableIncident update
   */
  export type TableIncidentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentInclude<ExtArgs> | null
    /**
     * The data needed to update a TableIncident.
     */
    data: XOR<TableIncidentUpdateInput, TableIncidentUncheckedUpdateInput>
    /**
     * Choose, which TableIncident to update.
     */
    where: TableIncidentWhereUniqueInput
  }

  /**
   * TableIncident updateMany
   */
  export type TableIncidentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TableIncidents.
     */
    data: XOR<TableIncidentUpdateManyMutationInput, TableIncidentUncheckedUpdateManyInput>
    /**
     * Filter which TableIncidents to update
     */
    where?: TableIncidentWhereInput
    /**
     * Limit how many TableIncidents to update.
     */
    limit?: number
  }

  /**
   * TableIncident updateManyAndReturn
   */
  export type TableIncidentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * The data used to update TableIncidents.
     */
    data: XOR<TableIncidentUpdateManyMutationInput, TableIncidentUncheckedUpdateManyInput>
    /**
     * Filter which TableIncidents to update
     */
    where?: TableIncidentWhereInput
    /**
     * Limit how many TableIncidents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TableIncident upsert
   */
  export type TableIncidentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentInclude<ExtArgs> | null
    /**
     * The filter to search for the TableIncident to update in case it exists.
     */
    where: TableIncidentWhereUniqueInput
    /**
     * In case the TableIncident found by the `where` argument doesn't exist, create a new TableIncident with this data.
     */
    create: XOR<TableIncidentCreateInput, TableIncidentUncheckedCreateInput>
    /**
     * In case the TableIncident was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableIncidentUpdateInput, TableIncidentUncheckedUpdateInput>
  }

  /**
   * TableIncident delete
   */
  export type TableIncidentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentInclude<ExtArgs> | null
    /**
     * Filter which TableIncident to delete.
     */
    where: TableIncidentWhereUniqueInput
  }

  /**
   * TableIncident deleteMany
   */
  export type TableIncidentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableIncidents to delete
     */
    where?: TableIncidentWhereInput
    /**
     * Limit how many TableIncidents to delete.
     */
    limit?: number
  }

  /**
   * TableIncident without action
   */
  export type TableIncidentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableIncident
     */
    select?: TableIncidentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableIncident
     */
    omit?: TableIncidentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TableIncidentInclude<ExtArgs> | null
  }


  /**
   * Model TableActu
   */

  export type AggregateTableActu = {
    _count: TableActuCountAggregateOutputType | null
    _avg: TableActuAvgAggregateOutputType | null
    _sum: TableActuSumAggregateOutputType | null
    _min: TableActuMinAggregateOutputType | null
    _max: TableActuMaxAggregateOutputType | null
  }

  export type TableActuAvgAggregateOutputType = {
    id: number | null
  }

  export type TableActuSumAggregateOutputType = {
    id: number | null
  }

  export type TableActuMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    category: string | null
    title: string | null
    description: string | null
    date: Date | null
  }

  export type TableActuMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    category: string | null
    title: string | null
    description: string | null
    date: Date | null
  }

  export type TableActuCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    category: number
    title: number
    description: number
    date: number
    _all: number
  }


  export type TableActuAvgAggregateInputType = {
    id?: true
  }

  export type TableActuSumAggregateInputType = {
    id?: true
  }

  export type TableActuMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    title?: true
    description?: true
    date?: true
  }

  export type TableActuMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    title?: true
    description?: true
    date?: true
  }

  export type TableActuCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    category?: true
    title?: true
    description?: true
    date?: true
    _all?: true
  }

  export type TableActuAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableActu to aggregate.
     */
    where?: TableActuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableActus to fetch.
     */
    orderBy?: TableActuOrderByWithRelationInput | TableActuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TableActuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableActus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableActus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TableActus
    **/
    _count?: true | TableActuCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TableActuAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TableActuSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TableActuMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TableActuMaxAggregateInputType
  }

  export type GetTableActuAggregateType<T extends TableActuAggregateArgs> = {
        [P in keyof T & keyof AggregateTableActu]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTableActu[P]>
      : GetScalarType<T[P], AggregateTableActu[P]>
  }




  export type TableActuGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TableActuWhereInput
    orderBy?: TableActuOrderByWithAggregationInput | TableActuOrderByWithAggregationInput[]
    by: TableActuScalarFieldEnum[] | TableActuScalarFieldEnum
    having?: TableActuScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TableActuCountAggregateInputType | true
    _avg?: TableActuAvgAggregateInputType
    _sum?: TableActuSumAggregateInputType
    _min?: TableActuMinAggregateInputType
    _max?: TableActuMaxAggregateInputType
  }

  export type TableActuGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    category: string
    title: string
    description: string
    date: Date
    _count: TableActuCountAggregateOutputType | null
    _avg: TableActuAvgAggregateOutputType | null
    _sum: TableActuSumAggregateOutputType | null
    _min: TableActuMinAggregateOutputType | null
    _max: TableActuMaxAggregateOutputType | null
  }

  type GetTableActuGroupByPayload<T extends TableActuGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TableActuGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TableActuGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TableActuGroupByOutputType[P]>
            : GetScalarType<T[P], TableActuGroupByOutputType[P]>
        }
      >
    >


  export type TableActuSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
  }, ExtArgs["result"]["tableActu"]>

  export type TableActuSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
  }, ExtArgs["result"]["tableActu"]>

  export type TableActuSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
  }, ExtArgs["result"]["tableActu"]>

  export type TableActuSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    category?: boolean
    title?: boolean
    description?: boolean
    date?: boolean
  }

  export type TableActuOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "category" | "title" | "description" | "date", ExtArgs["result"]["tableActu"]>

  export type $TableActuPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TableActu"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      category: string
      title: string
      description: string
      date: Date
    }, ExtArgs["result"]["tableActu"]>
    composites: {}
  }

  type TableActuGetPayload<S extends boolean | null | undefined | TableActuDefaultArgs> = $Result.GetResult<Prisma.$TableActuPayload, S>

  type TableActuCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TableActuFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TableActuCountAggregateInputType | true
    }

  export interface TableActuDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TableActu'], meta: { name: 'TableActu' } }
    /**
     * Find zero or one TableActu that matches the filter.
     * @param {TableActuFindUniqueArgs} args - Arguments to find a TableActu
     * @example
     * // Get one TableActu
     * const tableActu = await prisma.tableActu.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TableActuFindUniqueArgs>(args: SelectSubset<T, TableActuFindUniqueArgs<ExtArgs>>): Prisma__TableActuClient<$Result.GetResult<Prisma.$TableActuPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TableActu that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TableActuFindUniqueOrThrowArgs} args - Arguments to find a TableActu
     * @example
     * // Get one TableActu
     * const tableActu = await prisma.tableActu.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TableActuFindUniqueOrThrowArgs>(args: SelectSubset<T, TableActuFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TableActuClient<$Result.GetResult<Prisma.$TableActuPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableActu that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableActuFindFirstArgs} args - Arguments to find a TableActu
     * @example
     * // Get one TableActu
     * const tableActu = await prisma.tableActu.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TableActuFindFirstArgs>(args?: SelectSubset<T, TableActuFindFirstArgs<ExtArgs>>): Prisma__TableActuClient<$Result.GetResult<Prisma.$TableActuPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TableActu that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableActuFindFirstOrThrowArgs} args - Arguments to find a TableActu
     * @example
     * // Get one TableActu
     * const tableActu = await prisma.tableActu.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TableActuFindFirstOrThrowArgs>(args?: SelectSubset<T, TableActuFindFirstOrThrowArgs<ExtArgs>>): Prisma__TableActuClient<$Result.GetResult<Prisma.$TableActuPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TableActus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableActuFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TableActus
     * const tableActus = await prisma.tableActu.findMany()
     * 
     * // Get first 10 TableActus
     * const tableActus = await prisma.tableActu.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tableActuWithIdOnly = await prisma.tableActu.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TableActuFindManyArgs>(args?: SelectSubset<T, TableActuFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableActuPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TableActu.
     * @param {TableActuCreateArgs} args - Arguments to create a TableActu.
     * @example
     * // Create one TableActu
     * const TableActu = await prisma.tableActu.create({
     *   data: {
     *     // ... data to create a TableActu
     *   }
     * })
     * 
     */
    create<T extends TableActuCreateArgs>(args: SelectSubset<T, TableActuCreateArgs<ExtArgs>>): Prisma__TableActuClient<$Result.GetResult<Prisma.$TableActuPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TableActus.
     * @param {TableActuCreateManyArgs} args - Arguments to create many TableActus.
     * @example
     * // Create many TableActus
     * const tableActu = await prisma.tableActu.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TableActuCreateManyArgs>(args?: SelectSubset<T, TableActuCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TableActus and returns the data saved in the database.
     * @param {TableActuCreateManyAndReturnArgs} args - Arguments to create many TableActus.
     * @example
     * // Create many TableActus
     * const tableActu = await prisma.tableActu.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TableActus and only return the `id`
     * const tableActuWithIdOnly = await prisma.tableActu.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TableActuCreateManyAndReturnArgs>(args?: SelectSubset<T, TableActuCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableActuPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TableActu.
     * @param {TableActuDeleteArgs} args - Arguments to delete one TableActu.
     * @example
     * // Delete one TableActu
     * const TableActu = await prisma.tableActu.delete({
     *   where: {
     *     // ... filter to delete one TableActu
     *   }
     * })
     * 
     */
    delete<T extends TableActuDeleteArgs>(args: SelectSubset<T, TableActuDeleteArgs<ExtArgs>>): Prisma__TableActuClient<$Result.GetResult<Prisma.$TableActuPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TableActu.
     * @param {TableActuUpdateArgs} args - Arguments to update one TableActu.
     * @example
     * // Update one TableActu
     * const tableActu = await prisma.tableActu.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TableActuUpdateArgs>(args: SelectSubset<T, TableActuUpdateArgs<ExtArgs>>): Prisma__TableActuClient<$Result.GetResult<Prisma.$TableActuPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TableActus.
     * @param {TableActuDeleteManyArgs} args - Arguments to filter TableActus to delete.
     * @example
     * // Delete a few TableActus
     * const { count } = await prisma.tableActu.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TableActuDeleteManyArgs>(args?: SelectSubset<T, TableActuDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableActus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableActuUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TableActus
     * const tableActu = await prisma.tableActu.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TableActuUpdateManyArgs>(args: SelectSubset<T, TableActuUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TableActus and returns the data updated in the database.
     * @param {TableActuUpdateManyAndReturnArgs} args - Arguments to update many TableActus.
     * @example
     * // Update many TableActus
     * const tableActu = await prisma.tableActu.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TableActus and only return the `id`
     * const tableActuWithIdOnly = await prisma.tableActu.updateManyAndReturn({
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
    updateManyAndReturn<T extends TableActuUpdateManyAndReturnArgs>(args: SelectSubset<T, TableActuUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TableActuPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TableActu.
     * @param {TableActuUpsertArgs} args - Arguments to update or create a TableActu.
     * @example
     * // Update or create a TableActu
     * const tableActu = await prisma.tableActu.upsert({
     *   create: {
     *     // ... data to create a TableActu
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TableActu we want to update
     *   }
     * })
     */
    upsert<T extends TableActuUpsertArgs>(args: SelectSubset<T, TableActuUpsertArgs<ExtArgs>>): Prisma__TableActuClient<$Result.GetResult<Prisma.$TableActuPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TableActus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableActuCountArgs} args - Arguments to filter TableActus to count.
     * @example
     * // Count the number of TableActus
     * const count = await prisma.tableActu.count({
     *   where: {
     *     // ... the filter for the TableActus we want to count
     *   }
     * })
    **/
    count<T extends TableActuCountArgs>(
      args?: Subset<T, TableActuCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TableActuCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TableActu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableActuAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TableActuAggregateArgs>(args: Subset<T, TableActuAggregateArgs>): Prisma.PrismaPromise<GetTableActuAggregateType<T>>

    /**
     * Group by TableActu.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TableActuGroupByArgs} args - Group by arguments.
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
      T extends TableActuGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TableActuGroupByArgs['orderBy'] }
        : { orderBy?: TableActuGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TableActuGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTableActuGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TableActu model
   */
  readonly fields: TableActuFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TableActu.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TableActuClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TableActu model
   */
  interface TableActuFieldRefs {
    readonly id: FieldRef<"TableActu", 'Int'>
    readonly createdAt: FieldRef<"TableActu", 'DateTime'>
    readonly updatedAt: FieldRef<"TableActu", 'DateTime'>
    readonly category: FieldRef<"TableActu", 'String'>
    readonly title: FieldRef<"TableActu", 'String'>
    readonly description: FieldRef<"TableActu", 'String'>
    readonly date: FieldRef<"TableActu", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TableActu findUnique
   */
  export type TableActuFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableActu
     */
    select?: TableActuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableActu
     */
    omit?: TableActuOmit<ExtArgs> | null
    /**
     * Filter, which TableActu to fetch.
     */
    where: TableActuWhereUniqueInput
  }

  /**
   * TableActu findUniqueOrThrow
   */
  export type TableActuFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableActu
     */
    select?: TableActuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableActu
     */
    omit?: TableActuOmit<ExtArgs> | null
    /**
     * Filter, which TableActu to fetch.
     */
    where: TableActuWhereUniqueInput
  }

  /**
   * TableActu findFirst
   */
  export type TableActuFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableActu
     */
    select?: TableActuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableActu
     */
    omit?: TableActuOmit<ExtArgs> | null
    /**
     * Filter, which TableActu to fetch.
     */
    where?: TableActuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableActus to fetch.
     */
    orderBy?: TableActuOrderByWithRelationInput | TableActuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableActus.
     */
    cursor?: TableActuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableActus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableActus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableActus.
     */
    distinct?: TableActuScalarFieldEnum | TableActuScalarFieldEnum[]
  }

  /**
   * TableActu findFirstOrThrow
   */
  export type TableActuFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableActu
     */
    select?: TableActuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableActu
     */
    omit?: TableActuOmit<ExtArgs> | null
    /**
     * Filter, which TableActu to fetch.
     */
    where?: TableActuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableActus to fetch.
     */
    orderBy?: TableActuOrderByWithRelationInput | TableActuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TableActus.
     */
    cursor?: TableActuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableActus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableActus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TableActus.
     */
    distinct?: TableActuScalarFieldEnum | TableActuScalarFieldEnum[]
  }

  /**
   * TableActu findMany
   */
  export type TableActuFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableActu
     */
    select?: TableActuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableActu
     */
    omit?: TableActuOmit<ExtArgs> | null
    /**
     * Filter, which TableActus to fetch.
     */
    where?: TableActuWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TableActus to fetch.
     */
    orderBy?: TableActuOrderByWithRelationInput | TableActuOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TableActus.
     */
    cursor?: TableActuWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TableActus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TableActus.
     */
    skip?: number
    distinct?: TableActuScalarFieldEnum | TableActuScalarFieldEnum[]
  }

  /**
   * TableActu create
   */
  export type TableActuCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableActu
     */
    select?: TableActuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableActu
     */
    omit?: TableActuOmit<ExtArgs> | null
    /**
     * The data needed to create a TableActu.
     */
    data: XOR<TableActuCreateInput, TableActuUncheckedCreateInput>
  }

  /**
   * TableActu createMany
   */
  export type TableActuCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TableActus.
     */
    data: TableActuCreateManyInput | TableActuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableActu createManyAndReturn
   */
  export type TableActuCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableActu
     */
    select?: TableActuSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableActu
     */
    omit?: TableActuOmit<ExtArgs> | null
    /**
     * The data used to create many TableActus.
     */
    data: TableActuCreateManyInput | TableActuCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TableActu update
   */
  export type TableActuUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableActu
     */
    select?: TableActuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableActu
     */
    omit?: TableActuOmit<ExtArgs> | null
    /**
     * The data needed to update a TableActu.
     */
    data: XOR<TableActuUpdateInput, TableActuUncheckedUpdateInput>
    /**
     * Choose, which TableActu to update.
     */
    where: TableActuWhereUniqueInput
  }

  /**
   * TableActu updateMany
   */
  export type TableActuUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TableActus.
     */
    data: XOR<TableActuUpdateManyMutationInput, TableActuUncheckedUpdateManyInput>
    /**
     * Filter which TableActus to update
     */
    where?: TableActuWhereInput
    /**
     * Limit how many TableActus to update.
     */
    limit?: number
  }

  /**
   * TableActu updateManyAndReturn
   */
  export type TableActuUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableActu
     */
    select?: TableActuSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TableActu
     */
    omit?: TableActuOmit<ExtArgs> | null
    /**
     * The data used to update TableActus.
     */
    data: XOR<TableActuUpdateManyMutationInput, TableActuUncheckedUpdateManyInput>
    /**
     * Filter which TableActus to update
     */
    where?: TableActuWhereInput
    /**
     * Limit how many TableActus to update.
     */
    limit?: number
  }

  /**
   * TableActu upsert
   */
  export type TableActuUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableActu
     */
    select?: TableActuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableActu
     */
    omit?: TableActuOmit<ExtArgs> | null
    /**
     * The filter to search for the TableActu to update in case it exists.
     */
    where: TableActuWhereUniqueInput
    /**
     * In case the TableActu found by the `where` argument doesn't exist, create a new TableActu with this data.
     */
    create: XOR<TableActuCreateInput, TableActuUncheckedCreateInput>
    /**
     * In case the TableActu was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TableActuUpdateInput, TableActuUncheckedUpdateInput>
  }

  /**
   * TableActu delete
   */
  export type TableActuDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableActu
     */
    select?: TableActuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableActu
     */
    omit?: TableActuOmit<ExtArgs> | null
    /**
     * Filter which TableActu to delete.
     */
    where: TableActuWhereUniqueInput
  }

  /**
   * TableActu deleteMany
   */
  export type TableActuDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TableActus to delete
     */
    where?: TableActuWhereInput
    /**
     * Limit how many TableActus to delete.
     */
    limit?: number
  }

  /**
   * TableActu without action
   */
  export type TableActuDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TableActu
     */
    select?: TableActuSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TableActu
     */
    omit?: TableActuOmit<ExtArgs> | null
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


  export const TableUserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email',
    firstname: 'firstname',
    lastname: 'lastname',
    role: 'role',
    autorized: 'autorized'
  };

  export type TableUserScalarFieldEnum = (typeof TableUserScalarFieldEnum)[keyof typeof TableUserScalarFieldEnum]


  export const TableServiceScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    type: 'type',
    status: 'status',
    description: 'description',
    localisation: 'localisation'
  };

  export type TableServiceScalarFieldEnum = (typeof TableServiceScalarFieldEnum)[keyof typeof TableServiceScalarFieldEnum]


  export const TableObjectScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    type: 'type',
    status: 'status',
    location: 'location',
    lastUpdate: 'lastUpdate'
  };

  export type TableObjectScalarFieldEnum = (typeof TableObjectScalarFieldEnum)[keyof typeof TableObjectScalarFieldEnum]


  export const TableIncidentScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    title: 'title',
    description: 'description',
    status: 'status',
    location: 'location',
    username: 'username'
  };

  export type TableIncidentScalarFieldEnum = (typeof TableIncidentScalarFieldEnum)[keyof typeof TableIncidentScalarFieldEnum]


  export const TableActuScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    category: 'category',
    title: 'title',
    description: 'description',
    date: 'date'
  };

  export type TableActuScalarFieldEnum = (typeof TableActuScalarFieldEnum)[keyof typeof TableActuScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type TableUserWhereInput = {
    AND?: TableUserWhereInput | TableUserWhereInput[]
    OR?: TableUserWhereInput[]
    NOT?: TableUserWhereInput | TableUserWhereInput[]
    id?: IntFilter<"TableUser"> | number
    username?: StringFilter<"TableUser"> | string
    password?: StringFilter<"TableUser"> | string
    email?: StringFilter<"TableUser"> | string
    firstname?: StringFilter<"TableUser"> | string
    lastname?: StringFilter<"TableUser"> | string
    role?: StringFilter<"TableUser"> | string
    autorized?: BoolFilter<"TableUser"> | boolean
    incidentsByUsername?: TableIncidentListRelationFilter
  }

  export type TableUserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    autorized?: SortOrder
    incidentsByUsername?: TableIncidentOrderByRelationAggregateInput
  }

  export type TableUserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: TableUserWhereInput | TableUserWhereInput[]
    OR?: TableUserWhereInput[]
    NOT?: TableUserWhereInput | TableUserWhereInput[]
    password?: StringFilter<"TableUser"> | string
    firstname?: StringFilter<"TableUser"> | string
    lastname?: StringFilter<"TableUser"> | string
    role?: StringFilter<"TableUser"> | string
    autorized?: BoolFilter<"TableUser"> | boolean
    incidentsByUsername?: TableIncidentListRelationFilter
  }, "id" | "username" | "email">

  export type TableUserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    autorized?: SortOrder
    _count?: TableUserCountOrderByAggregateInput
    _avg?: TableUserAvgOrderByAggregateInput
    _max?: TableUserMaxOrderByAggregateInput
    _min?: TableUserMinOrderByAggregateInput
    _sum?: TableUserSumOrderByAggregateInput
  }

  export type TableUserScalarWhereWithAggregatesInput = {
    AND?: TableUserScalarWhereWithAggregatesInput | TableUserScalarWhereWithAggregatesInput[]
    OR?: TableUserScalarWhereWithAggregatesInput[]
    NOT?: TableUserScalarWhereWithAggregatesInput | TableUserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TableUser"> | number
    username?: StringWithAggregatesFilter<"TableUser"> | string
    password?: StringWithAggregatesFilter<"TableUser"> | string
    email?: StringWithAggregatesFilter<"TableUser"> | string
    firstname?: StringWithAggregatesFilter<"TableUser"> | string
    lastname?: StringWithAggregatesFilter<"TableUser"> | string
    role?: StringWithAggregatesFilter<"TableUser"> | string
    autorized?: BoolWithAggregatesFilter<"TableUser"> | boolean
  }

  export type TableServiceWhereInput = {
    AND?: TableServiceWhereInput | TableServiceWhereInput[]
    OR?: TableServiceWhereInput[]
    NOT?: TableServiceWhereInput | TableServiceWhereInput[]
    id?: IntFilter<"TableService"> | number
    createdAt?: DateTimeFilter<"TableService"> | Date | string
    updatedAt?: DateTimeFilter<"TableService"> | Date | string
    name?: StringFilter<"TableService"> | string
    type?: StringFilter<"TableService"> | string
    status?: StringFilter<"TableService"> | string
    description?: StringFilter<"TableService"> | string
    localisation?: StringFilter<"TableService"> | string
  }

  export type TableServiceOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    description?: SortOrder
    localisation?: SortOrder
  }

  export type TableServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TableServiceWhereInput | TableServiceWhereInput[]
    OR?: TableServiceWhereInput[]
    NOT?: TableServiceWhereInput | TableServiceWhereInput[]
    createdAt?: DateTimeFilter<"TableService"> | Date | string
    updatedAt?: DateTimeFilter<"TableService"> | Date | string
    name?: StringFilter<"TableService"> | string
    type?: StringFilter<"TableService"> | string
    status?: StringFilter<"TableService"> | string
    description?: StringFilter<"TableService"> | string
    localisation?: StringFilter<"TableService"> | string
  }, "id">

  export type TableServiceOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    description?: SortOrder
    localisation?: SortOrder
    _count?: TableServiceCountOrderByAggregateInput
    _avg?: TableServiceAvgOrderByAggregateInput
    _max?: TableServiceMaxOrderByAggregateInput
    _min?: TableServiceMinOrderByAggregateInput
    _sum?: TableServiceSumOrderByAggregateInput
  }

  export type TableServiceScalarWhereWithAggregatesInput = {
    AND?: TableServiceScalarWhereWithAggregatesInput | TableServiceScalarWhereWithAggregatesInput[]
    OR?: TableServiceScalarWhereWithAggregatesInput[]
    NOT?: TableServiceScalarWhereWithAggregatesInput | TableServiceScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TableService"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TableService"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TableService"> | Date | string
    name?: StringWithAggregatesFilter<"TableService"> | string
    type?: StringWithAggregatesFilter<"TableService"> | string
    status?: StringWithAggregatesFilter<"TableService"> | string
    description?: StringWithAggregatesFilter<"TableService"> | string
    localisation?: StringWithAggregatesFilter<"TableService"> | string
  }

  export type TableObjectWhereInput = {
    AND?: TableObjectWhereInput | TableObjectWhereInput[]
    OR?: TableObjectWhereInput[]
    NOT?: TableObjectWhereInput | TableObjectWhereInput[]
    id?: IntFilter<"TableObject"> | number
    createdAt?: DateTimeFilter<"TableObject"> | Date | string
    updatedAt?: DateTimeFilter<"TableObject"> | Date | string
    name?: StringFilter<"TableObject"> | string
    type?: StringFilter<"TableObject"> | string
    status?: StringFilter<"TableObject"> | string
    location?: StringFilter<"TableObject"> | string
    lastUpdate?: DateTimeFilter<"TableObject"> | Date | string
  }

  export type TableObjectOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    location?: SortOrder
    lastUpdate?: SortOrder
  }

  export type TableObjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TableObjectWhereInput | TableObjectWhereInput[]
    OR?: TableObjectWhereInput[]
    NOT?: TableObjectWhereInput | TableObjectWhereInput[]
    createdAt?: DateTimeFilter<"TableObject"> | Date | string
    updatedAt?: DateTimeFilter<"TableObject"> | Date | string
    name?: StringFilter<"TableObject"> | string
    type?: StringFilter<"TableObject"> | string
    status?: StringFilter<"TableObject"> | string
    location?: StringFilter<"TableObject"> | string
    lastUpdate?: DateTimeFilter<"TableObject"> | Date | string
  }, "id">

  export type TableObjectOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    location?: SortOrder
    lastUpdate?: SortOrder
    _count?: TableObjectCountOrderByAggregateInput
    _avg?: TableObjectAvgOrderByAggregateInput
    _max?: TableObjectMaxOrderByAggregateInput
    _min?: TableObjectMinOrderByAggregateInput
    _sum?: TableObjectSumOrderByAggregateInput
  }

  export type TableObjectScalarWhereWithAggregatesInput = {
    AND?: TableObjectScalarWhereWithAggregatesInput | TableObjectScalarWhereWithAggregatesInput[]
    OR?: TableObjectScalarWhereWithAggregatesInput[]
    NOT?: TableObjectScalarWhereWithAggregatesInput | TableObjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TableObject"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TableObject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TableObject"> | Date | string
    name?: StringWithAggregatesFilter<"TableObject"> | string
    type?: StringWithAggregatesFilter<"TableObject"> | string
    status?: StringWithAggregatesFilter<"TableObject"> | string
    location?: StringWithAggregatesFilter<"TableObject"> | string
    lastUpdate?: DateTimeWithAggregatesFilter<"TableObject"> | Date | string
  }

  export type TableIncidentWhereInput = {
    AND?: TableIncidentWhereInput | TableIncidentWhereInput[]
    OR?: TableIncidentWhereInput[]
    NOT?: TableIncidentWhereInput | TableIncidentWhereInput[]
    id?: IntFilter<"TableIncident"> | number
    createdAt?: DateTimeFilter<"TableIncident"> | Date | string
    updatedAt?: DateTimeFilter<"TableIncident"> | Date | string
    title?: StringFilter<"TableIncident"> | string
    description?: StringFilter<"TableIncident"> | string
    status?: StringFilter<"TableIncident"> | string
    location?: StringFilter<"TableIncident"> | string
    username?: StringFilter<"TableIncident"> | string
    reportedByUsername?: XOR<TableUserScalarRelationFilter, TableUserWhereInput>
  }

  export type TableIncidentOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    location?: SortOrder
    username?: SortOrder
    reportedByUsername?: TableUserOrderByWithRelationInput
  }

  export type TableIncidentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TableIncidentWhereInput | TableIncidentWhereInput[]
    OR?: TableIncidentWhereInput[]
    NOT?: TableIncidentWhereInput | TableIncidentWhereInput[]
    createdAt?: DateTimeFilter<"TableIncident"> | Date | string
    updatedAt?: DateTimeFilter<"TableIncident"> | Date | string
    title?: StringFilter<"TableIncident"> | string
    description?: StringFilter<"TableIncident"> | string
    status?: StringFilter<"TableIncident"> | string
    location?: StringFilter<"TableIncident"> | string
    username?: StringFilter<"TableIncident"> | string
    reportedByUsername?: XOR<TableUserScalarRelationFilter, TableUserWhereInput>
  }, "id">

  export type TableIncidentOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    location?: SortOrder
    username?: SortOrder
    _count?: TableIncidentCountOrderByAggregateInput
    _avg?: TableIncidentAvgOrderByAggregateInput
    _max?: TableIncidentMaxOrderByAggregateInput
    _min?: TableIncidentMinOrderByAggregateInput
    _sum?: TableIncidentSumOrderByAggregateInput
  }

  export type TableIncidentScalarWhereWithAggregatesInput = {
    AND?: TableIncidentScalarWhereWithAggregatesInput | TableIncidentScalarWhereWithAggregatesInput[]
    OR?: TableIncidentScalarWhereWithAggregatesInput[]
    NOT?: TableIncidentScalarWhereWithAggregatesInput | TableIncidentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TableIncident"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TableIncident"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TableIncident"> | Date | string
    title?: StringWithAggregatesFilter<"TableIncident"> | string
    description?: StringWithAggregatesFilter<"TableIncident"> | string
    status?: StringWithAggregatesFilter<"TableIncident"> | string
    location?: StringWithAggregatesFilter<"TableIncident"> | string
    username?: StringWithAggregatesFilter<"TableIncident"> | string
  }

  export type TableActuWhereInput = {
    AND?: TableActuWhereInput | TableActuWhereInput[]
    OR?: TableActuWhereInput[]
    NOT?: TableActuWhereInput | TableActuWhereInput[]
    id?: IntFilter<"TableActu"> | number
    createdAt?: DateTimeFilter<"TableActu"> | Date | string
    updatedAt?: DateTimeFilter<"TableActu"> | Date | string
    category?: StringFilter<"TableActu"> | string
    title?: StringFilter<"TableActu"> | string
    description?: StringFilter<"TableActu"> | string
    date?: DateTimeFilter<"TableActu"> | Date | string
  }

  export type TableActuOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
  }

  export type TableActuWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TableActuWhereInput | TableActuWhereInput[]
    OR?: TableActuWhereInput[]
    NOT?: TableActuWhereInput | TableActuWhereInput[]
    createdAt?: DateTimeFilter<"TableActu"> | Date | string
    updatedAt?: DateTimeFilter<"TableActu"> | Date | string
    category?: StringFilter<"TableActu"> | string
    title?: StringFilter<"TableActu"> | string
    description?: StringFilter<"TableActu"> | string
    date?: DateTimeFilter<"TableActu"> | Date | string
  }, "id">

  export type TableActuOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
    _count?: TableActuCountOrderByAggregateInput
    _avg?: TableActuAvgOrderByAggregateInput
    _max?: TableActuMaxOrderByAggregateInput
    _min?: TableActuMinOrderByAggregateInput
    _sum?: TableActuSumOrderByAggregateInput
  }

  export type TableActuScalarWhereWithAggregatesInput = {
    AND?: TableActuScalarWhereWithAggregatesInput | TableActuScalarWhereWithAggregatesInput[]
    OR?: TableActuScalarWhereWithAggregatesInput[]
    NOT?: TableActuScalarWhereWithAggregatesInput | TableActuScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TableActu"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TableActu"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TableActu"> | Date | string
    category?: StringWithAggregatesFilter<"TableActu"> | string
    title?: StringWithAggregatesFilter<"TableActu"> | string
    description?: StringWithAggregatesFilter<"TableActu"> | string
    date?: DateTimeWithAggregatesFilter<"TableActu"> | Date | string
  }

  export type TableUserCreateInput = {
    username: string
    password: string
    email: string
    firstname: string
    lastname: string
    role?: string
    autorized?: boolean
    incidentsByUsername?: TableIncidentCreateNestedManyWithoutReportedByUsernameInput
  }

  export type TableUserUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    email: string
    firstname: string
    lastname: string
    role?: string
    autorized?: boolean
    incidentsByUsername?: TableIncidentUncheckedCreateNestedManyWithoutReportedByUsernameInput
  }

  export type TableUserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    autorized?: BoolFieldUpdateOperationsInput | boolean
    incidentsByUsername?: TableIncidentUpdateManyWithoutReportedByUsernameNestedInput
  }

  export type TableUserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    autorized?: BoolFieldUpdateOperationsInput | boolean
    incidentsByUsername?: TableIncidentUncheckedUpdateManyWithoutReportedByUsernameNestedInput
  }

  export type TableUserCreateManyInput = {
    id?: number
    username: string
    password: string
    email: string
    firstname: string
    lastname: string
    role?: string
    autorized?: boolean
  }

  export type TableUserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    autorized?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TableUserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    autorized?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TableServiceCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    type: string
    status: string
    description: string
    localisation: string
  }

  export type TableServiceUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    type: string
    status: string
    description: string
    localisation: string
  }

  export type TableServiceUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    localisation?: StringFieldUpdateOperationsInput | string
  }

  export type TableServiceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    localisation?: StringFieldUpdateOperationsInput | string
  }

  export type TableServiceCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    type: string
    status: string
    description: string
    localisation: string
  }

  export type TableServiceUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    localisation?: StringFieldUpdateOperationsInput | string
  }

  export type TableServiceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    localisation?: StringFieldUpdateOperationsInput | string
  }

  export type TableObjectCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    type: string
    status: string
    location: string
    lastUpdate: Date | string
  }

  export type TableObjectUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    type: string
    status: string
    location: string
    lastUpdate: Date | string
  }

  export type TableObjectUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableObjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableObjectCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    type: string
    status: string
    location: string
    lastUpdate: Date | string
  }

  export type TableObjectUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableObjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    lastUpdate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableIncidentCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    status: string
    location: string
    reportedByUsername: TableUserCreateNestedOneWithoutIncidentsByUsernameInput
  }

  export type TableIncidentUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    status: string
    location: string
    username: string
  }

  export type TableIncidentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    reportedByUsername?: TableUserUpdateOneRequiredWithoutIncidentsByUsernameNestedInput
  }

  export type TableIncidentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type TableIncidentCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    status: string
    location: string
    username: string
  }

  export type TableIncidentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type TableIncidentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
  }

  export type TableActuCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    category: string
    title: string
    description: string
    date: Date | string
  }

  export type TableActuUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: string
    title: string
    description: string
    date: Date | string
  }

  export type TableActuUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableActuUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableActuCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    category: string
    title: string
    description: string
    date: Date | string
  }

  export type TableActuUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TableActuUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TableIncidentListRelationFilter = {
    every?: TableIncidentWhereInput
    some?: TableIncidentWhereInput
    none?: TableIncidentWhereInput
  }

  export type TableIncidentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TableUserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    autorized?: SortOrder
  }

  export type TableUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TableUserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    autorized?: SortOrder
  }

  export type TableUserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    role?: SortOrder
    autorized?: SortOrder
  }

  export type TableUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TableServiceCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    description?: SortOrder
    localisation?: SortOrder
  }

  export type TableServiceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TableServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    description?: SortOrder
    localisation?: SortOrder
  }

  export type TableServiceMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    description?: SortOrder
    localisation?: SortOrder
  }

  export type TableServiceSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TableObjectCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    location?: SortOrder
    lastUpdate?: SortOrder
  }

  export type TableObjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TableObjectMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    location?: SortOrder
    lastUpdate?: SortOrder
  }

  export type TableObjectMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    type?: SortOrder
    status?: SortOrder
    location?: SortOrder
    lastUpdate?: SortOrder
  }

  export type TableObjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TableUserScalarRelationFilter = {
    is?: TableUserWhereInput
    isNot?: TableUserWhereInput
  }

  export type TableIncidentCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    location?: SortOrder
    username?: SortOrder
  }

  export type TableIncidentAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TableIncidentMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    location?: SortOrder
    username?: SortOrder
  }

  export type TableIncidentMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    title?: SortOrder
    description?: SortOrder
    status?: SortOrder
    location?: SortOrder
    username?: SortOrder
  }

  export type TableIncidentSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TableActuCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
  }

  export type TableActuAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TableActuMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
  }

  export type TableActuMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    category?: SortOrder
    title?: SortOrder
    description?: SortOrder
    date?: SortOrder
  }

  export type TableActuSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TableIncidentCreateNestedManyWithoutReportedByUsernameInput = {
    create?: XOR<TableIncidentCreateWithoutReportedByUsernameInput, TableIncidentUncheckedCreateWithoutReportedByUsernameInput> | TableIncidentCreateWithoutReportedByUsernameInput[] | TableIncidentUncheckedCreateWithoutReportedByUsernameInput[]
    connectOrCreate?: TableIncidentCreateOrConnectWithoutReportedByUsernameInput | TableIncidentCreateOrConnectWithoutReportedByUsernameInput[]
    createMany?: TableIncidentCreateManyReportedByUsernameInputEnvelope
    connect?: TableIncidentWhereUniqueInput | TableIncidentWhereUniqueInput[]
  }

  export type TableIncidentUncheckedCreateNestedManyWithoutReportedByUsernameInput = {
    create?: XOR<TableIncidentCreateWithoutReportedByUsernameInput, TableIncidentUncheckedCreateWithoutReportedByUsernameInput> | TableIncidentCreateWithoutReportedByUsernameInput[] | TableIncidentUncheckedCreateWithoutReportedByUsernameInput[]
    connectOrCreate?: TableIncidentCreateOrConnectWithoutReportedByUsernameInput | TableIncidentCreateOrConnectWithoutReportedByUsernameInput[]
    createMany?: TableIncidentCreateManyReportedByUsernameInputEnvelope
    connect?: TableIncidentWhereUniqueInput | TableIncidentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TableIncidentUpdateManyWithoutReportedByUsernameNestedInput = {
    create?: XOR<TableIncidentCreateWithoutReportedByUsernameInput, TableIncidentUncheckedCreateWithoutReportedByUsernameInput> | TableIncidentCreateWithoutReportedByUsernameInput[] | TableIncidentUncheckedCreateWithoutReportedByUsernameInput[]
    connectOrCreate?: TableIncidentCreateOrConnectWithoutReportedByUsernameInput | TableIncidentCreateOrConnectWithoutReportedByUsernameInput[]
    upsert?: TableIncidentUpsertWithWhereUniqueWithoutReportedByUsernameInput | TableIncidentUpsertWithWhereUniqueWithoutReportedByUsernameInput[]
    createMany?: TableIncidentCreateManyReportedByUsernameInputEnvelope
    set?: TableIncidentWhereUniqueInput | TableIncidentWhereUniqueInput[]
    disconnect?: TableIncidentWhereUniqueInput | TableIncidentWhereUniqueInput[]
    delete?: TableIncidentWhereUniqueInput | TableIncidentWhereUniqueInput[]
    connect?: TableIncidentWhereUniqueInput | TableIncidentWhereUniqueInput[]
    update?: TableIncidentUpdateWithWhereUniqueWithoutReportedByUsernameInput | TableIncidentUpdateWithWhereUniqueWithoutReportedByUsernameInput[]
    updateMany?: TableIncidentUpdateManyWithWhereWithoutReportedByUsernameInput | TableIncidentUpdateManyWithWhereWithoutReportedByUsernameInput[]
    deleteMany?: TableIncidentScalarWhereInput | TableIncidentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TableIncidentUncheckedUpdateManyWithoutReportedByUsernameNestedInput = {
    create?: XOR<TableIncidentCreateWithoutReportedByUsernameInput, TableIncidentUncheckedCreateWithoutReportedByUsernameInput> | TableIncidentCreateWithoutReportedByUsernameInput[] | TableIncidentUncheckedCreateWithoutReportedByUsernameInput[]
    connectOrCreate?: TableIncidentCreateOrConnectWithoutReportedByUsernameInput | TableIncidentCreateOrConnectWithoutReportedByUsernameInput[]
    upsert?: TableIncidentUpsertWithWhereUniqueWithoutReportedByUsernameInput | TableIncidentUpsertWithWhereUniqueWithoutReportedByUsernameInput[]
    createMany?: TableIncidentCreateManyReportedByUsernameInputEnvelope
    set?: TableIncidentWhereUniqueInput | TableIncidentWhereUniqueInput[]
    disconnect?: TableIncidentWhereUniqueInput | TableIncidentWhereUniqueInput[]
    delete?: TableIncidentWhereUniqueInput | TableIncidentWhereUniqueInput[]
    connect?: TableIncidentWhereUniqueInput | TableIncidentWhereUniqueInput[]
    update?: TableIncidentUpdateWithWhereUniqueWithoutReportedByUsernameInput | TableIncidentUpdateWithWhereUniqueWithoutReportedByUsernameInput[]
    updateMany?: TableIncidentUpdateManyWithWhereWithoutReportedByUsernameInput | TableIncidentUpdateManyWithWhereWithoutReportedByUsernameInput[]
    deleteMany?: TableIncidentScalarWhereInput | TableIncidentScalarWhereInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TableUserCreateNestedOneWithoutIncidentsByUsernameInput = {
    create?: XOR<TableUserCreateWithoutIncidentsByUsernameInput, TableUserUncheckedCreateWithoutIncidentsByUsernameInput>
    connectOrCreate?: TableUserCreateOrConnectWithoutIncidentsByUsernameInput
    connect?: TableUserWhereUniqueInput
  }

  export type TableUserUpdateOneRequiredWithoutIncidentsByUsernameNestedInput = {
    create?: XOR<TableUserCreateWithoutIncidentsByUsernameInput, TableUserUncheckedCreateWithoutIncidentsByUsernameInput>
    connectOrCreate?: TableUserCreateOrConnectWithoutIncidentsByUsernameInput
    upsert?: TableUserUpsertWithoutIncidentsByUsernameInput
    connect?: TableUserWhereUniqueInput
    update?: XOR<XOR<TableUserUpdateToOneWithWhereWithoutIncidentsByUsernameInput, TableUserUpdateWithoutIncidentsByUsernameInput>, TableUserUncheckedUpdateWithoutIncidentsByUsernameInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type TableIncidentCreateWithoutReportedByUsernameInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    status: string
    location: string
  }

  export type TableIncidentUncheckedCreateWithoutReportedByUsernameInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    status: string
    location: string
  }

  export type TableIncidentCreateOrConnectWithoutReportedByUsernameInput = {
    where: TableIncidentWhereUniqueInput
    create: XOR<TableIncidentCreateWithoutReportedByUsernameInput, TableIncidentUncheckedCreateWithoutReportedByUsernameInput>
  }

  export type TableIncidentCreateManyReportedByUsernameInputEnvelope = {
    data: TableIncidentCreateManyReportedByUsernameInput | TableIncidentCreateManyReportedByUsernameInput[]
    skipDuplicates?: boolean
  }

  export type TableIncidentUpsertWithWhereUniqueWithoutReportedByUsernameInput = {
    where: TableIncidentWhereUniqueInput
    update: XOR<TableIncidentUpdateWithoutReportedByUsernameInput, TableIncidentUncheckedUpdateWithoutReportedByUsernameInput>
    create: XOR<TableIncidentCreateWithoutReportedByUsernameInput, TableIncidentUncheckedCreateWithoutReportedByUsernameInput>
  }

  export type TableIncidentUpdateWithWhereUniqueWithoutReportedByUsernameInput = {
    where: TableIncidentWhereUniqueInput
    data: XOR<TableIncidentUpdateWithoutReportedByUsernameInput, TableIncidentUncheckedUpdateWithoutReportedByUsernameInput>
  }

  export type TableIncidentUpdateManyWithWhereWithoutReportedByUsernameInput = {
    where: TableIncidentScalarWhereInput
    data: XOR<TableIncidentUpdateManyMutationInput, TableIncidentUncheckedUpdateManyWithoutReportedByUsernameInput>
  }

  export type TableIncidentScalarWhereInput = {
    AND?: TableIncidentScalarWhereInput | TableIncidentScalarWhereInput[]
    OR?: TableIncidentScalarWhereInput[]
    NOT?: TableIncidentScalarWhereInput | TableIncidentScalarWhereInput[]
    id?: IntFilter<"TableIncident"> | number
    createdAt?: DateTimeFilter<"TableIncident"> | Date | string
    updatedAt?: DateTimeFilter<"TableIncident"> | Date | string
    title?: StringFilter<"TableIncident"> | string
    description?: StringFilter<"TableIncident"> | string
    status?: StringFilter<"TableIncident"> | string
    location?: StringFilter<"TableIncident"> | string
    username?: StringFilter<"TableIncident"> | string
  }

  export type TableUserCreateWithoutIncidentsByUsernameInput = {
    username: string
    password: string
    email: string
    firstname: string
    lastname: string
    role?: string
    autorized?: boolean
  }

  export type TableUserUncheckedCreateWithoutIncidentsByUsernameInput = {
    id?: number
    username: string
    password: string
    email: string
    firstname: string
    lastname: string
    role?: string
    autorized?: boolean
  }

  export type TableUserCreateOrConnectWithoutIncidentsByUsernameInput = {
    where: TableUserWhereUniqueInput
    create: XOR<TableUserCreateWithoutIncidentsByUsernameInput, TableUserUncheckedCreateWithoutIncidentsByUsernameInput>
  }

  export type TableUserUpsertWithoutIncidentsByUsernameInput = {
    update: XOR<TableUserUpdateWithoutIncidentsByUsernameInput, TableUserUncheckedUpdateWithoutIncidentsByUsernameInput>
    create: XOR<TableUserCreateWithoutIncidentsByUsernameInput, TableUserUncheckedCreateWithoutIncidentsByUsernameInput>
    where?: TableUserWhereInput
  }

  export type TableUserUpdateToOneWithWhereWithoutIncidentsByUsernameInput = {
    where?: TableUserWhereInput
    data: XOR<TableUserUpdateWithoutIncidentsByUsernameInput, TableUserUncheckedUpdateWithoutIncidentsByUsernameInput>
  }

  export type TableUserUpdateWithoutIncidentsByUsernameInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    autorized?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TableUserUncheckedUpdateWithoutIncidentsByUsernameInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    autorized?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TableIncidentCreateManyReportedByUsernameInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    title: string
    description: string
    status: string
    location: string
  }

  export type TableIncidentUpdateWithoutReportedByUsernameInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type TableIncidentUncheckedUpdateWithoutReportedByUsernameInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type TableIncidentUncheckedUpdateManyWithoutReportedByUsernameInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
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