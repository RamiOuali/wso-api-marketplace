
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
 * Model SiteTheme
 * 
 */
export type SiteTheme = $Result.DefaultSelection<Prisma.$SiteThemePayload>
/**
 * Model NavItem
 * 
 */
export type NavItem = $Result.DefaultSelection<Prisma.$NavItemPayload>
/**
 * Model Language
 * 
 */
export type Language = $Result.DefaultSelection<Prisma.$LanguagePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more SiteThemes
 * const siteThemes = await prisma.siteTheme.findMany()
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
   * // Fetch zero or more SiteThemes
   * const siteThemes = await prisma.siteTheme.findMany()
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
   * `prisma.siteTheme`: Exposes CRUD operations for the **SiteTheme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SiteThemes
    * const siteThemes = await prisma.siteTheme.findMany()
    * ```
    */
  get siteTheme(): Prisma.SiteThemeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.navItem`: Exposes CRUD operations for the **NavItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NavItems
    * const navItems = await prisma.navItem.findMany()
    * ```
    */
  get navItem(): Prisma.NavItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.language`: Exposes CRUD operations for the **Language** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Languages
    * const languages = await prisma.language.findMany()
    * ```
    */
  get language(): Prisma.LanguageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
    SiteTheme: 'SiteTheme',
    NavItem: 'NavItem',
    Language: 'Language',
    User: 'User'
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
      modelProps: "siteTheme" | "navItem" | "language" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      SiteTheme: {
        payload: Prisma.$SiteThemePayload<ExtArgs>
        fields: Prisma.SiteThemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteThemeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteThemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteThemeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteThemePayload>
          }
          findFirst: {
            args: Prisma.SiteThemeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteThemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteThemeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteThemePayload>
          }
          findMany: {
            args: Prisma.SiteThemeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteThemePayload>[]
          }
          create: {
            args: Prisma.SiteThemeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteThemePayload>
          }
          createMany: {
            args: Prisma.SiteThemeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteThemeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteThemePayload>[]
          }
          delete: {
            args: Prisma.SiteThemeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteThemePayload>
          }
          update: {
            args: Prisma.SiteThemeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteThemePayload>
          }
          deleteMany: {
            args: Prisma.SiteThemeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteThemeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteThemeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteThemePayload>[]
          }
          upsert: {
            args: Prisma.SiteThemeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SiteThemePayload>
          }
          aggregate: {
            args: Prisma.SiteThemeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSiteTheme>
          }
          groupBy: {
            args: Prisma.SiteThemeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteThemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteThemeCountArgs<ExtArgs>
            result: $Utils.Optional<SiteThemeCountAggregateOutputType> | number
          }
        }
      }
      NavItem: {
        payload: Prisma.$NavItemPayload<ExtArgs>
        fields: Prisma.NavItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NavItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NavItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>
          }
          findFirst: {
            args: Prisma.NavItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NavItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>
          }
          findMany: {
            args: Prisma.NavItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>[]
          }
          create: {
            args: Prisma.NavItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>
          }
          createMany: {
            args: Prisma.NavItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NavItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>[]
          }
          delete: {
            args: Prisma.NavItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>
          }
          update: {
            args: Prisma.NavItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>
          }
          deleteMany: {
            args: Prisma.NavItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NavItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NavItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>[]
          }
          upsert: {
            args: Prisma.NavItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NavItemPayload>
          }
          aggregate: {
            args: Prisma.NavItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNavItem>
          }
          groupBy: {
            args: Prisma.NavItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<NavItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.NavItemCountArgs<ExtArgs>
            result: $Utils.Optional<NavItemCountAggregateOutputType> | number
          }
        }
      }
      Language: {
        payload: Prisma.$LanguagePayload<ExtArgs>
        fields: Prisma.LanguageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LanguageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LanguageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findFirst: {
            args: Prisma.LanguageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LanguageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          findMany: {
            args: Prisma.LanguageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          create: {
            args: Prisma.LanguageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          createMany: {
            args: Prisma.LanguageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LanguageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          delete: {
            args: Prisma.LanguageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          update: {
            args: Prisma.LanguageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          deleteMany: {
            args: Prisma.LanguageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LanguageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LanguageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>[]
          }
          upsert: {
            args: Prisma.LanguageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LanguagePayload>
          }
          aggregate: {
            args: Prisma.LanguageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLanguage>
          }
          groupBy: {
            args: Prisma.LanguageGroupByArgs<ExtArgs>
            result: $Utils.Optional<LanguageGroupByOutputType>[]
          }
          count: {
            args: Prisma.LanguageCountArgs<ExtArgs>
            result: $Utils.Optional<LanguageCountAggregateOutputType> | number
          }
        }
      }
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
    siteTheme?: SiteThemeOmit
    navItem?: NavItemOmit
    language?: LanguageOmit
    user?: UserOmit
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
   * Count Type SiteThemeCountOutputType
   */

  export type SiteThemeCountOutputType = {
    navItems: number
    languages: number
  }

  export type SiteThemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navItems?: boolean | SiteThemeCountOutputTypeCountNavItemsArgs
    languages?: boolean | SiteThemeCountOutputTypeCountLanguagesArgs
  }

  // Custom InputTypes
  /**
   * SiteThemeCountOutputType without action
   */
  export type SiteThemeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteThemeCountOutputType
     */
    select?: SiteThemeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteThemeCountOutputType without action
   */
  export type SiteThemeCountOutputTypeCountNavItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavItemWhereInput
  }

  /**
   * SiteThemeCountOutputType without action
   */
  export type SiteThemeCountOutputTypeCountLanguagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model SiteTheme
   */

  export type AggregateSiteTheme = {
    _count: SiteThemeCountAggregateOutputType | null
    _avg: SiteThemeAvgAggregateOutputType | null
    _sum: SiteThemeSumAggregateOutputType | null
    _min: SiteThemeMinAggregateOutputType | null
    _max: SiteThemeMaxAggregateOutputType | null
  }

  export type SiteThemeAvgAggregateOutputType = {
    id: number | null
  }

  export type SiteThemeSumAggregateOutputType = {
    id: number | null
  }

  export type SiteThemeMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    navbarLogo: string | null
    navbarPrimaryColor: string | null
    navbarTextColor: string | null
    navbarFont: string | null
    navbarShowAboutUs: boolean | null
    navbarShowLanguage: boolean | null
    siteTitle: string | null
    siteDescription: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    primaryBgColor: string | null
    secondaryBgColor: string | null
    footerLogo: string | null
    footerText: string | null
    termsUrl: string | null
    privacyUrl: string | null
    supportUrl: string | null
  }

  export type SiteThemeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    navbarLogo: string | null
    navbarPrimaryColor: string | null
    navbarTextColor: string | null
    navbarFont: string | null
    navbarShowAboutUs: boolean | null
    navbarShowLanguage: boolean | null
    siteTitle: string | null
    siteDescription: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    primaryBgColor: string | null
    secondaryBgColor: string | null
    footerLogo: string | null
    footerText: string | null
    termsUrl: string | null
    privacyUrl: string | null
    supportUrl: string | null
  }

  export type SiteThemeCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    navbarLogo: number
    navbarPrimaryColor: number
    navbarTextColor: number
    navbarFont: number
    navbarShowAboutUs: number
    navbarShowLanguage: number
    siteTitle: number
    siteDescription: number
    heroTitle: number
    heroSubtitle: number
    primaryBgColor: number
    secondaryBgColor: number
    footerLogo: number
    footerText: number
    termsUrl: number
    privacyUrl: number
    supportUrl: number
    _all: number
  }


  export type SiteThemeAvgAggregateInputType = {
    id?: true
  }

  export type SiteThemeSumAggregateInputType = {
    id?: true
  }

  export type SiteThemeMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    navbarLogo?: true
    navbarPrimaryColor?: true
    navbarTextColor?: true
    navbarFont?: true
    navbarShowAboutUs?: true
    navbarShowLanguage?: true
    siteTitle?: true
    siteDescription?: true
    heroTitle?: true
    heroSubtitle?: true
    primaryBgColor?: true
    secondaryBgColor?: true
    footerLogo?: true
    footerText?: true
    termsUrl?: true
    privacyUrl?: true
    supportUrl?: true
  }

  export type SiteThemeMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    navbarLogo?: true
    navbarPrimaryColor?: true
    navbarTextColor?: true
    navbarFont?: true
    navbarShowAboutUs?: true
    navbarShowLanguage?: true
    siteTitle?: true
    siteDescription?: true
    heroTitle?: true
    heroSubtitle?: true
    primaryBgColor?: true
    secondaryBgColor?: true
    footerLogo?: true
    footerText?: true
    termsUrl?: true
    privacyUrl?: true
    supportUrl?: true
  }

  export type SiteThemeCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    navbarLogo?: true
    navbarPrimaryColor?: true
    navbarTextColor?: true
    navbarFont?: true
    navbarShowAboutUs?: true
    navbarShowLanguage?: true
    siteTitle?: true
    siteDescription?: true
    heroTitle?: true
    heroSubtitle?: true
    primaryBgColor?: true
    secondaryBgColor?: true
    footerLogo?: true
    footerText?: true
    termsUrl?: true
    privacyUrl?: true
    supportUrl?: true
    _all?: true
  }

  export type SiteThemeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteTheme to aggregate.
     */
    where?: SiteThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteThemes to fetch.
     */
    orderBy?: SiteThemeOrderByWithRelationInput | SiteThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SiteThemes
    **/
    _count?: true | SiteThemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteThemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteThemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteThemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteThemeMaxAggregateInputType
  }

  export type GetSiteThemeAggregateType<T extends SiteThemeAggregateArgs> = {
        [P in keyof T & keyof AggregateSiteTheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSiteTheme[P]>
      : GetScalarType<T[P], AggregateSiteTheme[P]>
  }




  export type SiteThemeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteThemeWhereInput
    orderBy?: SiteThemeOrderByWithAggregationInput | SiteThemeOrderByWithAggregationInput[]
    by: SiteThemeScalarFieldEnum[] | SiteThemeScalarFieldEnum
    having?: SiteThemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteThemeCountAggregateInputType | true
    _avg?: SiteThemeAvgAggregateInputType
    _sum?: SiteThemeSumAggregateInputType
    _min?: SiteThemeMinAggregateInputType
    _max?: SiteThemeMaxAggregateInputType
  }

  export type SiteThemeGroupByOutputType = {
    id: number
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    navbarLogo: string
    navbarPrimaryColor: string
    navbarTextColor: string
    navbarFont: string
    navbarShowAboutUs: boolean
    navbarShowLanguage: boolean
    siteTitle: string | null
    siteDescription: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    primaryBgColor: string | null
    secondaryBgColor: string | null
    footerLogo: string | null
    footerText: string | null
    termsUrl: string | null
    privacyUrl: string | null
    supportUrl: string | null
    _count: SiteThemeCountAggregateOutputType | null
    _avg: SiteThemeAvgAggregateOutputType | null
    _sum: SiteThemeSumAggregateOutputType | null
    _min: SiteThemeMinAggregateOutputType | null
    _max: SiteThemeMaxAggregateOutputType | null
  }

  type GetSiteThemeGroupByPayload<T extends SiteThemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteThemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteThemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteThemeGroupByOutputType[P]>
            : GetScalarType<T[P], SiteThemeGroupByOutputType[P]>
        }
      >
    >


  export type SiteThemeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    navbarLogo?: boolean
    navbarPrimaryColor?: boolean
    navbarTextColor?: boolean
    navbarFont?: boolean
    navbarShowAboutUs?: boolean
    navbarShowLanguage?: boolean
    siteTitle?: boolean
    siteDescription?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    primaryBgColor?: boolean
    secondaryBgColor?: boolean
    footerLogo?: boolean
    footerText?: boolean
    termsUrl?: boolean
    privacyUrl?: boolean
    supportUrl?: boolean
    navItems?: boolean | SiteTheme$navItemsArgs<ExtArgs>
    languages?: boolean | SiteTheme$languagesArgs<ExtArgs>
    _count?: boolean | SiteThemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteTheme"]>

  export type SiteThemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    navbarLogo?: boolean
    navbarPrimaryColor?: boolean
    navbarTextColor?: boolean
    navbarFont?: boolean
    navbarShowAboutUs?: boolean
    navbarShowLanguage?: boolean
    siteTitle?: boolean
    siteDescription?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    primaryBgColor?: boolean
    secondaryBgColor?: boolean
    footerLogo?: boolean
    footerText?: boolean
    termsUrl?: boolean
    privacyUrl?: boolean
    supportUrl?: boolean
  }, ExtArgs["result"]["siteTheme"]>

  export type SiteThemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    navbarLogo?: boolean
    navbarPrimaryColor?: boolean
    navbarTextColor?: boolean
    navbarFont?: boolean
    navbarShowAboutUs?: boolean
    navbarShowLanguage?: boolean
    siteTitle?: boolean
    siteDescription?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    primaryBgColor?: boolean
    secondaryBgColor?: boolean
    footerLogo?: boolean
    footerText?: boolean
    termsUrl?: boolean
    privacyUrl?: boolean
    supportUrl?: boolean
  }, ExtArgs["result"]["siteTheme"]>

  export type SiteThemeSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    navbarLogo?: boolean
    navbarPrimaryColor?: boolean
    navbarTextColor?: boolean
    navbarFont?: boolean
    navbarShowAboutUs?: boolean
    navbarShowLanguage?: boolean
    siteTitle?: boolean
    siteDescription?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    primaryBgColor?: boolean
    secondaryBgColor?: boolean
    footerLogo?: boolean
    footerText?: boolean
    termsUrl?: boolean
    privacyUrl?: boolean
    supportUrl?: boolean
  }

  export type SiteThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "createdAt" | "updatedAt" | "navbarLogo" | "navbarPrimaryColor" | "navbarTextColor" | "navbarFont" | "navbarShowAboutUs" | "navbarShowLanguage" | "siteTitle" | "siteDescription" | "heroTitle" | "heroSubtitle" | "primaryBgColor" | "secondaryBgColor" | "footerLogo" | "footerText" | "termsUrl" | "privacyUrl" | "supportUrl", ExtArgs["result"]["siteTheme"]>
  export type SiteThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navItems?: boolean | SiteTheme$navItemsArgs<ExtArgs>
    languages?: boolean | SiteTheme$languagesArgs<ExtArgs>
    _count?: boolean | SiteThemeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteThemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SiteThemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SiteThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteTheme"
    objects: {
      navItems: Prisma.$NavItemPayload<ExtArgs>[]
      languages: Prisma.$LanguagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      navbarLogo: string
      navbarPrimaryColor: string
      navbarTextColor: string
      navbarFont: string
      navbarShowAboutUs: boolean
      navbarShowLanguage: boolean
      siteTitle: string | null
      siteDescription: string | null
      heroTitle: string | null
      heroSubtitle: string | null
      primaryBgColor: string | null
      secondaryBgColor: string | null
      footerLogo: string | null
      footerText: string | null
      termsUrl: string | null
      privacyUrl: string | null
      supportUrl: string | null
    }, ExtArgs["result"]["siteTheme"]>
    composites: {}
  }

  type SiteThemeGetPayload<S extends boolean | null | undefined | SiteThemeDefaultArgs> = $Result.GetResult<Prisma.$SiteThemePayload, S>

  type SiteThemeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteThemeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteThemeCountAggregateInputType | true
    }

  export interface SiteThemeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SiteTheme'], meta: { name: 'SiteTheme' } }
    /**
     * Find zero or one SiteTheme that matches the filter.
     * @param {SiteThemeFindUniqueArgs} args - Arguments to find a SiteTheme
     * @example
     * // Get one SiteTheme
     * const siteTheme = await prisma.siteTheme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteThemeFindUniqueArgs>(args: SelectSubset<T, SiteThemeFindUniqueArgs<ExtArgs>>): Prisma__SiteThemeClient<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SiteTheme that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteThemeFindUniqueOrThrowArgs} args - Arguments to find a SiteTheme
     * @example
     * // Get one SiteTheme
     * const siteTheme = await prisma.siteTheme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteThemeFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteThemeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteThemeClient<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteTheme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteThemeFindFirstArgs} args - Arguments to find a SiteTheme
     * @example
     * // Get one SiteTheme
     * const siteTheme = await prisma.siteTheme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteThemeFindFirstArgs>(args?: SelectSubset<T, SiteThemeFindFirstArgs<ExtArgs>>): Prisma__SiteThemeClient<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SiteTheme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteThemeFindFirstOrThrowArgs} args - Arguments to find a SiteTheme
     * @example
     * // Get one SiteTheme
     * const siteTheme = await prisma.siteTheme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteThemeFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteThemeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteThemeClient<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SiteThemes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteThemeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SiteThemes
     * const siteThemes = await prisma.siteTheme.findMany()
     * 
     * // Get first 10 SiteThemes
     * const siteThemes = await prisma.siteTheme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteThemeWithIdOnly = await prisma.siteTheme.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteThemeFindManyArgs>(args?: SelectSubset<T, SiteThemeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SiteTheme.
     * @param {SiteThemeCreateArgs} args - Arguments to create a SiteTheme.
     * @example
     * // Create one SiteTheme
     * const SiteTheme = await prisma.siteTheme.create({
     *   data: {
     *     // ... data to create a SiteTheme
     *   }
     * })
     * 
     */
    create<T extends SiteThemeCreateArgs>(args: SelectSubset<T, SiteThemeCreateArgs<ExtArgs>>): Prisma__SiteThemeClient<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SiteThemes.
     * @param {SiteThemeCreateManyArgs} args - Arguments to create many SiteThemes.
     * @example
     * // Create many SiteThemes
     * const siteTheme = await prisma.siteTheme.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteThemeCreateManyArgs>(args?: SelectSubset<T, SiteThemeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SiteThemes and returns the data saved in the database.
     * @param {SiteThemeCreateManyAndReturnArgs} args - Arguments to create many SiteThemes.
     * @example
     * // Create many SiteThemes
     * const siteTheme = await prisma.siteTheme.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SiteThemes and only return the `id`
     * const siteThemeWithIdOnly = await prisma.siteTheme.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteThemeCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteThemeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SiteTheme.
     * @param {SiteThemeDeleteArgs} args - Arguments to delete one SiteTheme.
     * @example
     * // Delete one SiteTheme
     * const SiteTheme = await prisma.siteTheme.delete({
     *   where: {
     *     // ... filter to delete one SiteTheme
     *   }
     * })
     * 
     */
    delete<T extends SiteThemeDeleteArgs>(args: SelectSubset<T, SiteThemeDeleteArgs<ExtArgs>>): Prisma__SiteThemeClient<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SiteTheme.
     * @param {SiteThemeUpdateArgs} args - Arguments to update one SiteTheme.
     * @example
     * // Update one SiteTheme
     * const siteTheme = await prisma.siteTheme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteThemeUpdateArgs>(args: SelectSubset<T, SiteThemeUpdateArgs<ExtArgs>>): Prisma__SiteThemeClient<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SiteThemes.
     * @param {SiteThemeDeleteManyArgs} args - Arguments to filter SiteThemes to delete.
     * @example
     * // Delete a few SiteThemes
     * const { count } = await prisma.siteTheme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteThemeDeleteManyArgs>(args?: SelectSubset<T, SiteThemeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteThemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteThemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SiteThemes
     * const siteTheme = await prisma.siteTheme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteThemeUpdateManyArgs>(args: SelectSubset<T, SiteThemeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SiteThemes and returns the data updated in the database.
     * @param {SiteThemeUpdateManyAndReturnArgs} args - Arguments to update many SiteThemes.
     * @example
     * // Update many SiteThemes
     * const siteTheme = await prisma.siteTheme.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SiteThemes and only return the `id`
     * const siteThemeWithIdOnly = await prisma.siteTheme.updateManyAndReturn({
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
    updateManyAndReturn<T extends SiteThemeUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteThemeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SiteTheme.
     * @param {SiteThemeUpsertArgs} args - Arguments to update or create a SiteTheme.
     * @example
     * // Update or create a SiteTheme
     * const siteTheme = await prisma.siteTheme.upsert({
     *   create: {
     *     // ... data to create a SiteTheme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SiteTheme we want to update
     *   }
     * })
     */
    upsert<T extends SiteThemeUpsertArgs>(args: SelectSubset<T, SiteThemeUpsertArgs<ExtArgs>>): Prisma__SiteThemeClient<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SiteThemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteThemeCountArgs} args - Arguments to filter SiteThemes to count.
     * @example
     * // Count the number of SiteThemes
     * const count = await prisma.siteTheme.count({
     *   where: {
     *     // ... the filter for the SiteThemes we want to count
     *   }
     * })
    **/
    count<T extends SiteThemeCountArgs>(
      args?: Subset<T, SiteThemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteThemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SiteTheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteThemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SiteThemeAggregateArgs>(args: Subset<T, SiteThemeAggregateArgs>): Prisma.PrismaPromise<GetSiteThemeAggregateType<T>>

    /**
     * Group by SiteTheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteThemeGroupByArgs} args - Group by arguments.
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
      T extends SiteThemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteThemeGroupByArgs['orderBy'] }
        : { orderBy?: SiteThemeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SiteThemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteThemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SiteTheme model
   */
  readonly fields: SiteThemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SiteTheme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteThemeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    navItems<T extends SiteTheme$navItemsArgs<ExtArgs> = {}>(args?: Subset<T, SiteTheme$navItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    languages<T extends SiteTheme$languagesArgs<ExtArgs> = {}>(args?: Subset<T, SiteTheme$languagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SiteTheme model
   */
  interface SiteThemeFieldRefs {
    readonly id: FieldRef<"SiteTheme", 'Int'>
    readonly name: FieldRef<"SiteTheme", 'String'>
    readonly isActive: FieldRef<"SiteTheme", 'Boolean'>
    readonly createdAt: FieldRef<"SiteTheme", 'DateTime'>
    readonly updatedAt: FieldRef<"SiteTheme", 'DateTime'>
    readonly navbarLogo: FieldRef<"SiteTheme", 'String'>
    readonly navbarPrimaryColor: FieldRef<"SiteTheme", 'String'>
    readonly navbarTextColor: FieldRef<"SiteTheme", 'String'>
    readonly navbarFont: FieldRef<"SiteTheme", 'String'>
    readonly navbarShowAboutUs: FieldRef<"SiteTheme", 'Boolean'>
    readonly navbarShowLanguage: FieldRef<"SiteTheme", 'Boolean'>
    readonly siteTitle: FieldRef<"SiteTheme", 'String'>
    readonly siteDescription: FieldRef<"SiteTheme", 'String'>
    readonly heroTitle: FieldRef<"SiteTheme", 'String'>
    readonly heroSubtitle: FieldRef<"SiteTheme", 'String'>
    readonly primaryBgColor: FieldRef<"SiteTheme", 'String'>
    readonly secondaryBgColor: FieldRef<"SiteTheme", 'String'>
    readonly footerLogo: FieldRef<"SiteTheme", 'String'>
    readonly footerText: FieldRef<"SiteTheme", 'String'>
    readonly termsUrl: FieldRef<"SiteTheme", 'String'>
    readonly privacyUrl: FieldRef<"SiteTheme", 'String'>
    readonly supportUrl: FieldRef<"SiteTheme", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SiteTheme findUnique
   */
  export type SiteThemeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteTheme
     */
    select?: SiteThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteTheme
     */
    omit?: SiteThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteThemeInclude<ExtArgs> | null
    /**
     * Filter, which SiteTheme to fetch.
     */
    where: SiteThemeWhereUniqueInput
  }

  /**
   * SiteTheme findUniqueOrThrow
   */
  export type SiteThemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteTheme
     */
    select?: SiteThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteTheme
     */
    omit?: SiteThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteThemeInclude<ExtArgs> | null
    /**
     * Filter, which SiteTheme to fetch.
     */
    where: SiteThemeWhereUniqueInput
  }

  /**
   * SiteTheme findFirst
   */
  export type SiteThemeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteTheme
     */
    select?: SiteThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteTheme
     */
    omit?: SiteThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteThemeInclude<ExtArgs> | null
    /**
     * Filter, which SiteTheme to fetch.
     */
    where?: SiteThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteThemes to fetch.
     */
    orderBy?: SiteThemeOrderByWithRelationInput | SiteThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteThemes.
     */
    cursor?: SiteThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteThemes.
     */
    distinct?: SiteThemeScalarFieldEnum | SiteThemeScalarFieldEnum[]
  }

  /**
   * SiteTheme findFirstOrThrow
   */
  export type SiteThemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteTheme
     */
    select?: SiteThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteTheme
     */
    omit?: SiteThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteThemeInclude<ExtArgs> | null
    /**
     * Filter, which SiteTheme to fetch.
     */
    where?: SiteThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteThemes to fetch.
     */
    orderBy?: SiteThemeOrderByWithRelationInput | SiteThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SiteThemes.
     */
    cursor?: SiteThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteThemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SiteThemes.
     */
    distinct?: SiteThemeScalarFieldEnum | SiteThemeScalarFieldEnum[]
  }

  /**
   * SiteTheme findMany
   */
  export type SiteThemeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteTheme
     */
    select?: SiteThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteTheme
     */
    omit?: SiteThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteThemeInclude<ExtArgs> | null
    /**
     * Filter, which SiteThemes to fetch.
     */
    where?: SiteThemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SiteThemes to fetch.
     */
    orderBy?: SiteThemeOrderByWithRelationInput | SiteThemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SiteThemes.
     */
    cursor?: SiteThemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SiteThemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SiteThemes.
     */
    skip?: number
    distinct?: SiteThemeScalarFieldEnum | SiteThemeScalarFieldEnum[]
  }

  /**
   * SiteTheme create
   */
  export type SiteThemeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteTheme
     */
    select?: SiteThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteTheme
     */
    omit?: SiteThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteThemeInclude<ExtArgs> | null
    /**
     * The data needed to create a SiteTheme.
     */
    data: XOR<SiteThemeCreateInput, SiteThemeUncheckedCreateInput>
  }

  /**
   * SiteTheme createMany
   */
  export type SiteThemeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SiteThemes.
     */
    data: SiteThemeCreateManyInput | SiteThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteTheme createManyAndReturn
   */
  export type SiteThemeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteTheme
     */
    select?: SiteThemeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteTheme
     */
    omit?: SiteThemeOmit<ExtArgs> | null
    /**
     * The data used to create many SiteThemes.
     */
    data: SiteThemeCreateManyInput | SiteThemeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SiteTheme update
   */
  export type SiteThemeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteTheme
     */
    select?: SiteThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteTheme
     */
    omit?: SiteThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteThemeInclude<ExtArgs> | null
    /**
     * The data needed to update a SiteTheme.
     */
    data: XOR<SiteThemeUpdateInput, SiteThemeUncheckedUpdateInput>
    /**
     * Choose, which SiteTheme to update.
     */
    where: SiteThemeWhereUniqueInput
  }

  /**
   * SiteTheme updateMany
   */
  export type SiteThemeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SiteThemes.
     */
    data: XOR<SiteThemeUpdateManyMutationInput, SiteThemeUncheckedUpdateManyInput>
    /**
     * Filter which SiteThemes to update
     */
    where?: SiteThemeWhereInput
    /**
     * Limit how many SiteThemes to update.
     */
    limit?: number
  }

  /**
   * SiteTheme updateManyAndReturn
   */
  export type SiteThemeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteTheme
     */
    select?: SiteThemeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SiteTheme
     */
    omit?: SiteThemeOmit<ExtArgs> | null
    /**
     * The data used to update SiteThemes.
     */
    data: XOR<SiteThemeUpdateManyMutationInput, SiteThemeUncheckedUpdateManyInput>
    /**
     * Filter which SiteThemes to update
     */
    where?: SiteThemeWhereInput
    /**
     * Limit how many SiteThemes to update.
     */
    limit?: number
  }

  /**
   * SiteTheme upsert
   */
  export type SiteThemeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteTheme
     */
    select?: SiteThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteTheme
     */
    omit?: SiteThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteThemeInclude<ExtArgs> | null
    /**
     * The filter to search for the SiteTheme to update in case it exists.
     */
    where: SiteThemeWhereUniqueInput
    /**
     * In case the SiteTheme found by the `where` argument doesn't exist, create a new SiteTheme with this data.
     */
    create: XOR<SiteThemeCreateInput, SiteThemeUncheckedCreateInput>
    /**
     * In case the SiteTheme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteThemeUpdateInput, SiteThemeUncheckedUpdateInput>
  }

  /**
   * SiteTheme delete
   */
  export type SiteThemeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteTheme
     */
    select?: SiteThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteTheme
     */
    omit?: SiteThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteThemeInclude<ExtArgs> | null
    /**
     * Filter which SiteTheme to delete.
     */
    where: SiteThemeWhereUniqueInput
  }

  /**
   * SiteTheme deleteMany
   */
  export type SiteThemeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SiteThemes to delete
     */
    where?: SiteThemeWhereInput
    /**
     * Limit how many SiteThemes to delete.
     */
    limit?: number
  }

  /**
   * SiteTheme.navItems
   */
  export type SiteTheme$navItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemInclude<ExtArgs> | null
    where?: NavItemWhereInput
    orderBy?: NavItemOrderByWithRelationInput | NavItemOrderByWithRelationInput[]
    cursor?: NavItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NavItemScalarFieldEnum | NavItemScalarFieldEnum[]
  }

  /**
   * SiteTheme.languages
   */
  export type SiteTheme$languagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    cursor?: LanguageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * SiteTheme without action
   */
  export type SiteThemeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteTheme
     */
    select?: SiteThemeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SiteTheme
     */
    omit?: SiteThemeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteThemeInclude<ExtArgs> | null
  }


  /**
   * Model NavItem
   */

  export type AggregateNavItem = {
    _count: NavItemCountAggregateOutputType | null
    _avg: NavItemAvgAggregateOutputType | null
    _sum: NavItemSumAggregateOutputType | null
    _min: NavItemMinAggregateOutputType | null
    _max: NavItemMaxAggregateOutputType | null
  }

  export type NavItemAvgAggregateOutputType = {
    id: number | null
    order: number | null
    themeId: number | null
  }

  export type NavItemSumAggregateOutputType = {
    id: number | null
    order: number | null
    themeId: number | null
  }

  export type NavItemMinAggregateOutputType = {
    id: number | null
    title: string | null
    href: string | null
    order: number | null
    isActive: boolean | null
    isExternal: boolean | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
    themeId: number | null
  }

  export type NavItemMaxAggregateOutputType = {
    id: number | null
    title: string | null
    href: string | null
    order: number | null
    isActive: boolean | null
    isExternal: boolean | null
    icon: string | null
    createdAt: Date | null
    updatedAt: Date | null
    themeId: number | null
  }

  export type NavItemCountAggregateOutputType = {
    id: number
    title: number
    href: number
    order: number
    isActive: number
    isExternal: number
    icon: number
    createdAt: number
    updatedAt: number
    themeId: number
    _all: number
  }


  export type NavItemAvgAggregateInputType = {
    id?: true
    order?: true
    themeId?: true
  }

  export type NavItemSumAggregateInputType = {
    id?: true
    order?: true
    themeId?: true
  }

  export type NavItemMinAggregateInputType = {
    id?: true
    title?: true
    href?: true
    order?: true
    isActive?: true
    isExternal?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
  }

  export type NavItemMaxAggregateInputType = {
    id?: true
    title?: true
    href?: true
    order?: true
    isActive?: true
    isExternal?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
  }

  export type NavItemCountAggregateInputType = {
    id?: true
    title?: true
    href?: true
    order?: true
    isActive?: true
    isExternal?: true
    icon?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
    _all?: true
  }

  export type NavItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavItem to aggregate.
     */
    where?: NavItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavItems to fetch.
     */
    orderBy?: NavItemOrderByWithRelationInput | NavItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NavItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NavItems
    **/
    _count?: true | NavItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NavItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NavItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NavItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NavItemMaxAggregateInputType
  }

  export type GetNavItemAggregateType<T extends NavItemAggregateArgs> = {
        [P in keyof T & keyof AggregateNavItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNavItem[P]>
      : GetScalarType<T[P], AggregateNavItem[P]>
  }




  export type NavItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NavItemWhereInput
    orderBy?: NavItemOrderByWithAggregationInput | NavItemOrderByWithAggregationInput[]
    by: NavItemScalarFieldEnum[] | NavItemScalarFieldEnum
    having?: NavItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NavItemCountAggregateInputType | true
    _avg?: NavItemAvgAggregateInputType
    _sum?: NavItemSumAggregateInputType
    _min?: NavItemMinAggregateInputType
    _max?: NavItemMaxAggregateInputType
  }

  export type NavItemGroupByOutputType = {
    id: number
    title: string
    href: string
    order: number
    isActive: boolean
    isExternal: boolean
    icon: string | null
    createdAt: Date
    updatedAt: Date
    themeId: number
    _count: NavItemCountAggregateOutputType | null
    _avg: NavItemAvgAggregateOutputType | null
    _sum: NavItemSumAggregateOutputType | null
    _min: NavItemMinAggregateOutputType | null
    _max: NavItemMaxAggregateOutputType | null
  }

  type GetNavItemGroupByPayload<T extends NavItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NavItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NavItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NavItemGroupByOutputType[P]>
            : GetScalarType<T[P], NavItemGroupByOutputType[P]>
        }
      >
    >


  export type NavItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    href?: boolean
    order?: boolean
    isActive?: boolean
    isExternal?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["navItem"]>

  export type NavItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    href?: boolean
    order?: boolean
    isActive?: boolean
    isExternal?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["navItem"]>

  export type NavItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    href?: boolean
    order?: boolean
    isActive?: boolean
    isExternal?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["navItem"]>

  export type NavItemSelectScalar = {
    id?: boolean
    title?: boolean
    href?: boolean
    order?: boolean
    isActive?: boolean
    isExternal?: boolean
    icon?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
  }

  export type NavItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "href" | "order" | "isActive" | "isExternal" | "icon" | "createdAt" | "updatedAt" | "themeId", ExtArgs["result"]["navItem"]>
  export type NavItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }
  export type NavItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }
  export type NavItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }

  export type $NavItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NavItem"
    objects: {
      theme: Prisma.$SiteThemePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      href: string
      order: number
      isActive: boolean
      isExternal: boolean
      icon: string | null
      createdAt: Date
      updatedAt: Date
      themeId: number
    }, ExtArgs["result"]["navItem"]>
    composites: {}
  }

  type NavItemGetPayload<S extends boolean | null | undefined | NavItemDefaultArgs> = $Result.GetResult<Prisma.$NavItemPayload, S>

  type NavItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NavItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NavItemCountAggregateInputType | true
    }

  export interface NavItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NavItem'], meta: { name: 'NavItem' } }
    /**
     * Find zero or one NavItem that matches the filter.
     * @param {NavItemFindUniqueArgs} args - Arguments to find a NavItem
     * @example
     * // Get one NavItem
     * const navItem = await prisma.navItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NavItemFindUniqueArgs>(args: SelectSubset<T, NavItemFindUniqueArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NavItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NavItemFindUniqueOrThrowArgs} args - Arguments to find a NavItem
     * @example
     * // Get one NavItem
     * const navItem = await prisma.navItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NavItemFindUniqueOrThrowArgs>(args: SelectSubset<T, NavItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NavItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemFindFirstArgs} args - Arguments to find a NavItem
     * @example
     * // Get one NavItem
     * const navItem = await prisma.navItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NavItemFindFirstArgs>(args?: SelectSubset<T, NavItemFindFirstArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NavItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemFindFirstOrThrowArgs} args - Arguments to find a NavItem
     * @example
     * // Get one NavItem
     * const navItem = await prisma.navItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NavItemFindFirstOrThrowArgs>(args?: SelectSubset<T, NavItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NavItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NavItems
     * const navItems = await prisma.navItem.findMany()
     * 
     * // Get first 10 NavItems
     * const navItems = await prisma.navItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const navItemWithIdOnly = await prisma.navItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NavItemFindManyArgs>(args?: SelectSubset<T, NavItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NavItem.
     * @param {NavItemCreateArgs} args - Arguments to create a NavItem.
     * @example
     * // Create one NavItem
     * const NavItem = await prisma.navItem.create({
     *   data: {
     *     // ... data to create a NavItem
     *   }
     * })
     * 
     */
    create<T extends NavItemCreateArgs>(args: SelectSubset<T, NavItemCreateArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NavItems.
     * @param {NavItemCreateManyArgs} args - Arguments to create many NavItems.
     * @example
     * // Create many NavItems
     * const navItem = await prisma.navItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NavItemCreateManyArgs>(args?: SelectSubset<T, NavItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NavItems and returns the data saved in the database.
     * @param {NavItemCreateManyAndReturnArgs} args - Arguments to create many NavItems.
     * @example
     * // Create many NavItems
     * const navItem = await prisma.navItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NavItems and only return the `id`
     * const navItemWithIdOnly = await prisma.navItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NavItemCreateManyAndReturnArgs>(args?: SelectSubset<T, NavItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NavItem.
     * @param {NavItemDeleteArgs} args - Arguments to delete one NavItem.
     * @example
     * // Delete one NavItem
     * const NavItem = await prisma.navItem.delete({
     *   where: {
     *     // ... filter to delete one NavItem
     *   }
     * })
     * 
     */
    delete<T extends NavItemDeleteArgs>(args: SelectSubset<T, NavItemDeleteArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NavItem.
     * @param {NavItemUpdateArgs} args - Arguments to update one NavItem.
     * @example
     * // Update one NavItem
     * const navItem = await prisma.navItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NavItemUpdateArgs>(args: SelectSubset<T, NavItemUpdateArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NavItems.
     * @param {NavItemDeleteManyArgs} args - Arguments to filter NavItems to delete.
     * @example
     * // Delete a few NavItems
     * const { count } = await prisma.navItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NavItemDeleteManyArgs>(args?: SelectSubset<T, NavItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NavItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NavItems
     * const navItem = await prisma.navItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NavItemUpdateManyArgs>(args: SelectSubset<T, NavItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NavItems and returns the data updated in the database.
     * @param {NavItemUpdateManyAndReturnArgs} args - Arguments to update many NavItems.
     * @example
     * // Update many NavItems
     * const navItem = await prisma.navItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NavItems and only return the `id`
     * const navItemWithIdOnly = await prisma.navItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends NavItemUpdateManyAndReturnArgs>(args: SelectSubset<T, NavItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NavItem.
     * @param {NavItemUpsertArgs} args - Arguments to update or create a NavItem.
     * @example
     * // Update or create a NavItem
     * const navItem = await prisma.navItem.upsert({
     *   create: {
     *     // ... data to create a NavItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NavItem we want to update
     *   }
     * })
     */
    upsert<T extends NavItemUpsertArgs>(args: SelectSubset<T, NavItemUpsertArgs<ExtArgs>>): Prisma__NavItemClient<$Result.GetResult<Prisma.$NavItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NavItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemCountArgs} args - Arguments to filter NavItems to count.
     * @example
     * // Count the number of NavItems
     * const count = await prisma.navItem.count({
     *   where: {
     *     // ... the filter for the NavItems we want to count
     *   }
     * })
    **/
    count<T extends NavItemCountArgs>(
      args?: Subset<T, NavItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NavItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NavItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NavItemAggregateArgs>(args: Subset<T, NavItemAggregateArgs>): Prisma.PrismaPromise<GetNavItemAggregateType<T>>

    /**
     * Group by NavItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NavItemGroupByArgs} args - Group by arguments.
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
      T extends NavItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NavItemGroupByArgs['orderBy'] }
        : { orderBy?: NavItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NavItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNavItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NavItem model
   */
  readonly fields: NavItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NavItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NavItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    theme<T extends SiteThemeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteThemeDefaultArgs<ExtArgs>>): Prisma__SiteThemeClient<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the NavItem model
   */
  interface NavItemFieldRefs {
    readonly id: FieldRef<"NavItem", 'Int'>
    readonly title: FieldRef<"NavItem", 'String'>
    readonly href: FieldRef<"NavItem", 'String'>
    readonly order: FieldRef<"NavItem", 'Int'>
    readonly isActive: FieldRef<"NavItem", 'Boolean'>
    readonly isExternal: FieldRef<"NavItem", 'Boolean'>
    readonly icon: FieldRef<"NavItem", 'String'>
    readonly createdAt: FieldRef<"NavItem", 'DateTime'>
    readonly updatedAt: FieldRef<"NavItem", 'DateTime'>
    readonly themeId: FieldRef<"NavItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NavItem findUnique
   */
  export type NavItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemInclude<ExtArgs> | null
    /**
     * Filter, which NavItem to fetch.
     */
    where: NavItemWhereUniqueInput
  }

  /**
   * NavItem findUniqueOrThrow
   */
  export type NavItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemInclude<ExtArgs> | null
    /**
     * Filter, which NavItem to fetch.
     */
    where: NavItemWhereUniqueInput
  }

  /**
   * NavItem findFirst
   */
  export type NavItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemInclude<ExtArgs> | null
    /**
     * Filter, which NavItem to fetch.
     */
    where?: NavItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavItems to fetch.
     */
    orderBy?: NavItemOrderByWithRelationInput | NavItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavItems.
     */
    cursor?: NavItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavItems.
     */
    distinct?: NavItemScalarFieldEnum | NavItemScalarFieldEnum[]
  }

  /**
   * NavItem findFirstOrThrow
   */
  export type NavItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemInclude<ExtArgs> | null
    /**
     * Filter, which NavItem to fetch.
     */
    where?: NavItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavItems to fetch.
     */
    orderBy?: NavItemOrderByWithRelationInput | NavItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NavItems.
     */
    cursor?: NavItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NavItems.
     */
    distinct?: NavItemScalarFieldEnum | NavItemScalarFieldEnum[]
  }

  /**
   * NavItem findMany
   */
  export type NavItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemInclude<ExtArgs> | null
    /**
     * Filter, which NavItems to fetch.
     */
    where?: NavItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NavItems to fetch.
     */
    orderBy?: NavItemOrderByWithRelationInput | NavItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NavItems.
     */
    cursor?: NavItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NavItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NavItems.
     */
    skip?: number
    distinct?: NavItemScalarFieldEnum | NavItemScalarFieldEnum[]
  }

  /**
   * NavItem create
   */
  export type NavItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemInclude<ExtArgs> | null
    /**
     * The data needed to create a NavItem.
     */
    data: XOR<NavItemCreateInput, NavItemUncheckedCreateInput>
  }

  /**
   * NavItem createMany
   */
  export type NavItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NavItems.
     */
    data: NavItemCreateManyInput | NavItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NavItem createManyAndReturn
   */
  export type NavItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * The data used to create many NavItems.
     */
    data: NavItemCreateManyInput | NavItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NavItem update
   */
  export type NavItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemInclude<ExtArgs> | null
    /**
     * The data needed to update a NavItem.
     */
    data: XOR<NavItemUpdateInput, NavItemUncheckedUpdateInput>
    /**
     * Choose, which NavItem to update.
     */
    where: NavItemWhereUniqueInput
  }

  /**
   * NavItem updateMany
   */
  export type NavItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NavItems.
     */
    data: XOR<NavItemUpdateManyMutationInput, NavItemUncheckedUpdateManyInput>
    /**
     * Filter which NavItems to update
     */
    where?: NavItemWhereInput
    /**
     * Limit how many NavItems to update.
     */
    limit?: number
  }

  /**
   * NavItem updateManyAndReturn
   */
  export type NavItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * The data used to update NavItems.
     */
    data: XOR<NavItemUpdateManyMutationInput, NavItemUncheckedUpdateManyInput>
    /**
     * Filter which NavItems to update
     */
    where?: NavItemWhereInput
    /**
     * Limit how many NavItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NavItem upsert
   */
  export type NavItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemInclude<ExtArgs> | null
    /**
     * The filter to search for the NavItem to update in case it exists.
     */
    where: NavItemWhereUniqueInput
    /**
     * In case the NavItem found by the `where` argument doesn't exist, create a new NavItem with this data.
     */
    create: XOR<NavItemCreateInput, NavItemUncheckedCreateInput>
    /**
     * In case the NavItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NavItemUpdateInput, NavItemUncheckedUpdateInput>
  }

  /**
   * NavItem delete
   */
  export type NavItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemInclude<ExtArgs> | null
    /**
     * Filter which NavItem to delete.
     */
    where: NavItemWhereUniqueInput
  }

  /**
   * NavItem deleteMany
   */
  export type NavItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NavItems to delete
     */
    where?: NavItemWhereInput
    /**
     * Limit how many NavItems to delete.
     */
    limit?: number
  }

  /**
   * NavItem without action
   */
  export type NavItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NavItem
     */
    select?: NavItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NavItem
     */
    omit?: NavItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NavItemInclude<ExtArgs> | null
  }


  /**
   * Model Language
   */

  export type AggregateLanguage = {
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  export type LanguageAvgAggregateOutputType = {
    id: number | null
    themeId: number | null
  }

  export type LanguageSumAggregateOutputType = {
    id: number | null
    themeId: number | null
  }

  export type LanguageMinAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    isActive: boolean | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    themeId: number | null
  }

  export type LanguageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    code: string | null
    isActive: boolean | null
    isDefault: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    themeId: number | null
  }

  export type LanguageCountAggregateOutputType = {
    id: number
    name: number
    code: number
    isActive: number
    isDefault: number
    createdAt: number
    updatedAt: number
    themeId: number
    _all: number
  }


  export type LanguageAvgAggregateInputType = {
    id?: true
    themeId?: true
  }

  export type LanguageSumAggregateInputType = {
    id?: true
    themeId?: true
  }

  export type LanguageMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    isActive?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
  }

  export type LanguageMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    isActive?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
  }

  export type LanguageCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    isActive?: true
    isDefault?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
    _all?: true
  }

  export type LanguageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Language to aggregate.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Languages
    **/
    _count?: true | LanguageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LanguageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LanguageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LanguageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LanguageMaxAggregateInputType
  }

  export type GetLanguageAggregateType<T extends LanguageAggregateArgs> = {
        [P in keyof T & keyof AggregateLanguage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLanguage[P]>
      : GetScalarType<T[P], AggregateLanguage[P]>
  }




  export type LanguageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LanguageWhereInput
    orderBy?: LanguageOrderByWithAggregationInput | LanguageOrderByWithAggregationInput[]
    by: LanguageScalarFieldEnum[] | LanguageScalarFieldEnum
    having?: LanguageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LanguageCountAggregateInputType | true
    _avg?: LanguageAvgAggregateInputType
    _sum?: LanguageSumAggregateInputType
    _min?: LanguageMinAggregateInputType
    _max?: LanguageMaxAggregateInputType
  }

  export type LanguageGroupByOutputType = {
    id: number
    name: string
    code: string
    isActive: boolean
    isDefault: boolean
    createdAt: Date
    updatedAt: Date
    themeId: number
    _count: LanguageCountAggregateOutputType | null
    _avg: LanguageAvgAggregateOutputType | null
    _sum: LanguageSumAggregateOutputType | null
    _min: LanguageMinAggregateOutputType | null
    _max: LanguageMaxAggregateOutputType | null
  }

  type GetLanguageGroupByPayload<T extends LanguageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LanguageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LanguageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LanguageGroupByOutputType[P]>
            : GetScalarType<T[P], LanguageGroupByOutputType[P]>
        }
      >
    >


  export type LanguageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["language"]>

  export type LanguageSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    isActive?: boolean
    isDefault?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
  }

  export type LanguageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "isActive" | "isDefault" | "createdAt" | "updatedAt" | "themeId", ExtArgs["result"]["language"]>
  export type LanguageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }
  export type LanguageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }

  export type $LanguagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Language"
    objects: {
      theme: Prisma.$SiteThemePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      code: string
      isActive: boolean
      isDefault: boolean
      createdAt: Date
      updatedAt: Date
      themeId: number
    }, ExtArgs["result"]["language"]>
    composites: {}
  }

  type LanguageGetPayload<S extends boolean | null | undefined | LanguageDefaultArgs> = $Result.GetResult<Prisma.$LanguagePayload, S>

  type LanguageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LanguageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LanguageCountAggregateInputType | true
    }

  export interface LanguageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Language'], meta: { name: 'Language' } }
    /**
     * Find zero or one Language that matches the filter.
     * @param {LanguageFindUniqueArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LanguageFindUniqueArgs>(args: SelectSubset<T, LanguageFindUniqueArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Language that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LanguageFindUniqueOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LanguageFindUniqueOrThrowArgs>(args: SelectSubset<T, LanguageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LanguageFindFirstArgs>(args?: SelectSubset<T, LanguageFindFirstArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Language that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindFirstOrThrowArgs} args - Arguments to find a Language
     * @example
     * // Get one Language
     * const language = await prisma.language.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LanguageFindFirstOrThrowArgs>(args?: SelectSubset<T, LanguageFindFirstOrThrowArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Languages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Languages
     * const languages = await prisma.language.findMany()
     * 
     * // Get first 10 Languages
     * const languages = await prisma.language.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const languageWithIdOnly = await prisma.language.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LanguageFindManyArgs>(args?: SelectSubset<T, LanguageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Language.
     * @param {LanguageCreateArgs} args - Arguments to create a Language.
     * @example
     * // Create one Language
     * const Language = await prisma.language.create({
     *   data: {
     *     // ... data to create a Language
     *   }
     * })
     * 
     */
    create<T extends LanguageCreateArgs>(args: SelectSubset<T, LanguageCreateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Languages.
     * @param {LanguageCreateManyArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LanguageCreateManyArgs>(args?: SelectSubset<T, LanguageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Languages and returns the data saved in the database.
     * @param {LanguageCreateManyAndReturnArgs} args - Arguments to create many Languages.
     * @example
     * // Create many Languages
     * const language = await prisma.language.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LanguageCreateManyAndReturnArgs>(args?: SelectSubset<T, LanguageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Language.
     * @param {LanguageDeleteArgs} args - Arguments to delete one Language.
     * @example
     * // Delete one Language
     * const Language = await prisma.language.delete({
     *   where: {
     *     // ... filter to delete one Language
     *   }
     * })
     * 
     */
    delete<T extends LanguageDeleteArgs>(args: SelectSubset<T, LanguageDeleteArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Language.
     * @param {LanguageUpdateArgs} args - Arguments to update one Language.
     * @example
     * // Update one Language
     * const language = await prisma.language.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LanguageUpdateArgs>(args: SelectSubset<T, LanguageUpdateArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Languages.
     * @param {LanguageDeleteManyArgs} args - Arguments to filter Languages to delete.
     * @example
     * // Delete a few Languages
     * const { count } = await prisma.language.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LanguageDeleteManyArgs>(args?: SelectSubset<T, LanguageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LanguageUpdateManyArgs>(args: SelectSubset<T, LanguageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Languages and returns the data updated in the database.
     * @param {LanguageUpdateManyAndReturnArgs} args - Arguments to update many Languages.
     * @example
     * // Update many Languages
     * const language = await prisma.language.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Languages and only return the `id`
     * const languageWithIdOnly = await prisma.language.updateManyAndReturn({
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
    updateManyAndReturn<T extends LanguageUpdateManyAndReturnArgs>(args: SelectSubset<T, LanguageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Language.
     * @param {LanguageUpsertArgs} args - Arguments to update or create a Language.
     * @example
     * // Update or create a Language
     * const language = await prisma.language.upsert({
     *   create: {
     *     // ... data to create a Language
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Language we want to update
     *   }
     * })
     */
    upsert<T extends LanguageUpsertArgs>(args: SelectSubset<T, LanguageUpsertArgs<ExtArgs>>): Prisma__LanguageClient<$Result.GetResult<Prisma.$LanguagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Languages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageCountArgs} args - Arguments to filter Languages to count.
     * @example
     * // Count the number of Languages
     * const count = await prisma.language.count({
     *   where: {
     *     // ... the filter for the Languages we want to count
     *   }
     * })
    **/
    count<T extends LanguageCountArgs>(
      args?: Subset<T, LanguageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LanguageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LanguageAggregateArgs>(args: Subset<T, LanguageAggregateArgs>): Prisma.PrismaPromise<GetLanguageAggregateType<T>>

    /**
     * Group by Language.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LanguageGroupByArgs} args - Group by arguments.
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
      T extends LanguageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LanguageGroupByArgs['orderBy'] }
        : { orderBy?: LanguageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LanguageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLanguageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Language model
   */
  readonly fields: LanguageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Language.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LanguageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    theme<T extends SiteThemeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteThemeDefaultArgs<ExtArgs>>): Prisma__SiteThemeClient<$Result.GetResult<Prisma.$SiteThemePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Language model
   */
  interface LanguageFieldRefs {
    readonly id: FieldRef<"Language", 'Int'>
    readonly name: FieldRef<"Language", 'String'>
    readonly code: FieldRef<"Language", 'String'>
    readonly isActive: FieldRef<"Language", 'Boolean'>
    readonly isDefault: FieldRef<"Language", 'Boolean'>
    readonly createdAt: FieldRef<"Language", 'DateTime'>
    readonly updatedAt: FieldRef<"Language", 'DateTime'>
    readonly themeId: FieldRef<"Language", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Language findUnique
   */
  export type LanguageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findUniqueOrThrow
   */
  export type LanguageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language findFirst
   */
  export type LanguageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findFirstOrThrow
   */
  export type LanguageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Language to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Languages.
     */
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language findMany
   */
  export type LanguageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter, which Languages to fetch.
     */
    where?: LanguageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Languages to fetch.
     */
    orderBy?: LanguageOrderByWithRelationInput | LanguageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Languages.
     */
    cursor?: LanguageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Languages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Languages.
     */
    skip?: number
    distinct?: LanguageScalarFieldEnum | LanguageScalarFieldEnum[]
  }

  /**
   * Language create
   */
  export type LanguageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to create a Language.
     */
    data: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
  }

  /**
   * Language createMany
   */
  export type LanguageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Language createManyAndReturn
   */
  export type LanguageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to create many Languages.
     */
    data: LanguageCreateManyInput | LanguageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Language update
   */
  export type LanguageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The data needed to update a Language.
     */
    data: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
    /**
     * Choose, which Language to update.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language updateMany
   */
  export type LanguageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
  }

  /**
   * Language updateManyAndReturn
   */
  export type LanguageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * The data used to update Languages.
     */
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyInput>
    /**
     * Filter which Languages to update
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Language upsert
   */
  export type LanguageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * The filter to search for the Language to update in case it exists.
     */
    where: LanguageWhereUniqueInput
    /**
     * In case the Language found by the `where` argument doesn't exist, create a new Language with this data.
     */
    create: XOR<LanguageCreateInput, LanguageUncheckedCreateInput>
    /**
     * In case the Language was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LanguageUpdateInput, LanguageUncheckedUpdateInput>
  }

  /**
   * Language delete
   */
  export type LanguageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
    /**
     * Filter which Language to delete.
     */
    where: LanguageWhereUniqueInput
  }

  /**
   * Language deleteMany
   */
  export type LanguageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Languages to delete
     */
    where?: LanguageWhereInput
    /**
     * Limit how many Languages to delete.
     */
    limit?: number
  }

  /**
   * Language without action
   */
  export type LanguageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Language
     */
    select?: LanguageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Language
     */
    omit?: LanguageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LanguageInclude<ExtArgs> | null
  }


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
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    password: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
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
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
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
    email: string
    name: string | null
    password: string
    role: $Enums.Role
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
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
      password: string
      role: $Enums.Role
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
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


  export const SiteThemeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    navbarLogo: 'navbarLogo',
    navbarPrimaryColor: 'navbarPrimaryColor',
    navbarTextColor: 'navbarTextColor',
    navbarFont: 'navbarFont',
    navbarShowAboutUs: 'navbarShowAboutUs',
    navbarShowLanguage: 'navbarShowLanguage',
    siteTitle: 'siteTitle',
    siteDescription: 'siteDescription',
    heroTitle: 'heroTitle',
    heroSubtitle: 'heroSubtitle',
    primaryBgColor: 'primaryBgColor',
    secondaryBgColor: 'secondaryBgColor',
    footerLogo: 'footerLogo',
    footerText: 'footerText',
    termsUrl: 'termsUrl',
    privacyUrl: 'privacyUrl',
    supportUrl: 'supportUrl'
  };

  export type SiteThemeScalarFieldEnum = (typeof SiteThemeScalarFieldEnum)[keyof typeof SiteThemeScalarFieldEnum]


  export const NavItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    href: 'href',
    order: 'order',
    isActive: 'isActive',
    isExternal: 'isExternal',
    icon: 'icon',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    themeId: 'themeId'
  };

  export type NavItemScalarFieldEnum = (typeof NavItemScalarFieldEnum)[keyof typeof NavItemScalarFieldEnum]


  export const LanguageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    isActive: 'isActive',
    isDefault: 'isDefault',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    themeId: 'themeId'
  };

  export type LanguageScalarFieldEnum = (typeof LanguageScalarFieldEnum)[keyof typeof LanguageScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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


  export type SiteThemeWhereInput = {
    AND?: SiteThemeWhereInput | SiteThemeWhereInput[]
    OR?: SiteThemeWhereInput[]
    NOT?: SiteThemeWhereInput | SiteThemeWhereInput[]
    id?: IntFilter<"SiteTheme"> | number
    name?: StringFilter<"SiteTheme"> | string
    isActive?: BoolFilter<"SiteTheme"> | boolean
    createdAt?: DateTimeFilter<"SiteTheme"> | Date | string
    updatedAt?: DateTimeFilter<"SiteTheme"> | Date | string
    navbarLogo?: StringFilter<"SiteTheme"> | string
    navbarPrimaryColor?: StringFilter<"SiteTheme"> | string
    navbarTextColor?: StringFilter<"SiteTheme"> | string
    navbarFont?: StringFilter<"SiteTheme"> | string
    navbarShowAboutUs?: BoolFilter<"SiteTheme"> | boolean
    navbarShowLanguage?: BoolFilter<"SiteTheme"> | boolean
    siteTitle?: StringNullableFilter<"SiteTheme"> | string | null
    siteDescription?: StringNullableFilter<"SiteTheme"> | string | null
    heroTitle?: StringNullableFilter<"SiteTheme"> | string | null
    heroSubtitle?: StringNullableFilter<"SiteTheme"> | string | null
    primaryBgColor?: StringNullableFilter<"SiteTheme"> | string | null
    secondaryBgColor?: StringNullableFilter<"SiteTheme"> | string | null
    footerLogo?: StringNullableFilter<"SiteTheme"> | string | null
    footerText?: StringNullableFilter<"SiteTheme"> | string | null
    termsUrl?: StringNullableFilter<"SiteTheme"> | string | null
    privacyUrl?: StringNullableFilter<"SiteTheme"> | string | null
    supportUrl?: StringNullableFilter<"SiteTheme"> | string | null
    navItems?: NavItemListRelationFilter
    languages?: LanguageListRelationFilter
  }

  export type SiteThemeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    navbarLogo?: SortOrder
    navbarPrimaryColor?: SortOrder
    navbarTextColor?: SortOrder
    navbarFont?: SortOrder
    navbarShowAboutUs?: SortOrder
    navbarShowLanguage?: SortOrder
    siteTitle?: SortOrderInput | SortOrder
    siteDescription?: SortOrderInput | SortOrder
    heroTitle?: SortOrderInput | SortOrder
    heroSubtitle?: SortOrderInput | SortOrder
    primaryBgColor?: SortOrderInput | SortOrder
    secondaryBgColor?: SortOrderInput | SortOrder
    footerLogo?: SortOrderInput | SortOrder
    footerText?: SortOrderInput | SortOrder
    termsUrl?: SortOrderInput | SortOrder
    privacyUrl?: SortOrderInput | SortOrder
    supportUrl?: SortOrderInput | SortOrder
    navItems?: NavItemOrderByRelationAggregateInput
    languages?: LanguageOrderByRelationAggregateInput
  }

  export type SiteThemeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SiteThemeWhereInput | SiteThemeWhereInput[]
    OR?: SiteThemeWhereInput[]
    NOT?: SiteThemeWhereInput | SiteThemeWhereInput[]
    isActive?: BoolFilter<"SiteTheme"> | boolean
    createdAt?: DateTimeFilter<"SiteTheme"> | Date | string
    updatedAt?: DateTimeFilter<"SiteTheme"> | Date | string
    navbarLogo?: StringFilter<"SiteTheme"> | string
    navbarPrimaryColor?: StringFilter<"SiteTheme"> | string
    navbarTextColor?: StringFilter<"SiteTheme"> | string
    navbarFont?: StringFilter<"SiteTheme"> | string
    navbarShowAboutUs?: BoolFilter<"SiteTheme"> | boolean
    navbarShowLanguage?: BoolFilter<"SiteTheme"> | boolean
    siteTitle?: StringNullableFilter<"SiteTheme"> | string | null
    siteDescription?: StringNullableFilter<"SiteTheme"> | string | null
    heroTitle?: StringNullableFilter<"SiteTheme"> | string | null
    heroSubtitle?: StringNullableFilter<"SiteTheme"> | string | null
    primaryBgColor?: StringNullableFilter<"SiteTheme"> | string | null
    secondaryBgColor?: StringNullableFilter<"SiteTheme"> | string | null
    footerLogo?: StringNullableFilter<"SiteTheme"> | string | null
    footerText?: StringNullableFilter<"SiteTheme"> | string | null
    termsUrl?: StringNullableFilter<"SiteTheme"> | string | null
    privacyUrl?: StringNullableFilter<"SiteTheme"> | string | null
    supportUrl?: StringNullableFilter<"SiteTheme"> | string | null
    navItems?: NavItemListRelationFilter
    languages?: LanguageListRelationFilter
  }, "id" | "name">

  export type SiteThemeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    navbarLogo?: SortOrder
    navbarPrimaryColor?: SortOrder
    navbarTextColor?: SortOrder
    navbarFont?: SortOrder
    navbarShowAboutUs?: SortOrder
    navbarShowLanguage?: SortOrder
    siteTitle?: SortOrderInput | SortOrder
    siteDescription?: SortOrderInput | SortOrder
    heroTitle?: SortOrderInput | SortOrder
    heroSubtitle?: SortOrderInput | SortOrder
    primaryBgColor?: SortOrderInput | SortOrder
    secondaryBgColor?: SortOrderInput | SortOrder
    footerLogo?: SortOrderInput | SortOrder
    footerText?: SortOrderInput | SortOrder
    termsUrl?: SortOrderInput | SortOrder
    privacyUrl?: SortOrderInput | SortOrder
    supportUrl?: SortOrderInput | SortOrder
    _count?: SiteThemeCountOrderByAggregateInput
    _avg?: SiteThemeAvgOrderByAggregateInput
    _max?: SiteThemeMaxOrderByAggregateInput
    _min?: SiteThemeMinOrderByAggregateInput
    _sum?: SiteThemeSumOrderByAggregateInput
  }

  export type SiteThemeScalarWhereWithAggregatesInput = {
    AND?: SiteThemeScalarWhereWithAggregatesInput | SiteThemeScalarWhereWithAggregatesInput[]
    OR?: SiteThemeScalarWhereWithAggregatesInput[]
    NOT?: SiteThemeScalarWhereWithAggregatesInput | SiteThemeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SiteTheme"> | number
    name?: StringWithAggregatesFilter<"SiteTheme"> | string
    isActive?: BoolWithAggregatesFilter<"SiteTheme"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SiteTheme"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SiteTheme"> | Date | string
    navbarLogo?: StringWithAggregatesFilter<"SiteTheme"> | string
    navbarPrimaryColor?: StringWithAggregatesFilter<"SiteTheme"> | string
    navbarTextColor?: StringWithAggregatesFilter<"SiteTheme"> | string
    navbarFont?: StringWithAggregatesFilter<"SiteTheme"> | string
    navbarShowAboutUs?: BoolWithAggregatesFilter<"SiteTheme"> | boolean
    navbarShowLanguage?: BoolWithAggregatesFilter<"SiteTheme"> | boolean
    siteTitle?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    siteDescription?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    heroTitle?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    heroSubtitle?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    primaryBgColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    secondaryBgColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    footerLogo?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    footerText?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    termsUrl?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    privacyUrl?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    supportUrl?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
  }

  export type NavItemWhereInput = {
    AND?: NavItemWhereInput | NavItemWhereInput[]
    OR?: NavItemWhereInput[]
    NOT?: NavItemWhereInput | NavItemWhereInput[]
    id?: IntFilter<"NavItem"> | number
    title?: StringFilter<"NavItem"> | string
    href?: StringFilter<"NavItem"> | string
    order?: IntFilter<"NavItem"> | number
    isActive?: BoolFilter<"NavItem"> | boolean
    isExternal?: BoolFilter<"NavItem"> | boolean
    icon?: StringNullableFilter<"NavItem"> | string | null
    createdAt?: DateTimeFilter<"NavItem"> | Date | string
    updatedAt?: DateTimeFilter<"NavItem"> | Date | string
    themeId?: IntFilter<"NavItem"> | number
    theme?: XOR<SiteThemeScalarRelationFilter, SiteThemeWhereInput>
  }

  export type NavItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    href?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    isExternal?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
    theme?: SiteThemeOrderByWithRelationInput
  }

  export type NavItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NavItemWhereInput | NavItemWhereInput[]
    OR?: NavItemWhereInput[]
    NOT?: NavItemWhereInput | NavItemWhereInput[]
    title?: StringFilter<"NavItem"> | string
    href?: StringFilter<"NavItem"> | string
    order?: IntFilter<"NavItem"> | number
    isActive?: BoolFilter<"NavItem"> | boolean
    isExternal?: BoolFilter<"NavItem"> | boolean
    icon?: StringNullableFilter<"NavItem"> | string | null
    createdAt?: DateTimeFilter<"NavItem"> | Date | string
    updatedAt?: DateTimeFilter<"NavItem"> | Date | string
    themeId?: IntFilter<"NavItem"> | number
    theme?: XOR<SiteThemeScalarRelationFilter, SiteThemeWhereInput>
  }, "id">

  export type NavItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    href?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    isExternal?: SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
    _count?: NavItemCountOrderByAggregateInput
    _avg?: NavItemAvgOrderByAggregateInput
    _max?: NavItemMaxOrderByAggregateInput
    _min?: NavItemMinOrderByAggregateInput
    _sum?: NavItemSumOrderByAggregateInput
  }

  export type NavItemScalarWhereWithAggregatesInput = {
    AND?: NavItemScalarWhereWithAggregatesInput | NavItemScalarWhereWithAggregatesInput[]
    OR?: NavItemScalarWhereWithAggregatesInput[]
    NOT?: NavItemScalarWhereWithAggregatesInput | NavItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NavItem"> | number
    title?: StringWithAggregatesFilter<"NavItem"> | string
    href?: StringWithAggregatesFilter<"NavItem"> | string
    order?: IntWithAggregatesFilter<"NavItem"> | number
    isActive?: BoolWithAggregatesFilter<"NavItem"> | boolean
    isExternal?: BoolWithAggregatesFilter<"NavItem"> | boolean
    icon?: StringNullableWithAggregatesFilter<"NavItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"NavItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NavItem"> | Date | string
    themeId?: IntWithAggregatesFilter<"NavItem"> | number
  }

  export type LanguageWhereInput = {
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    id?: IntFilter<"Language"> | number
    name?: StringFilter<"Language"> | string
    code?: StringFilter<"Language"> | string
    isActive?: BoolFilter<"Language"> | boolean
    isDefault?: BoolFilter<"Language"> | boolean
    createdAt?: DateTimeFilter<"Language"> | Date | string
    updatedAt?: DateTimeFilter<"Language"> | Date | string
    themeId?: IntFilter<"Language"> | number
    theme?: XOR<SiteThemeScalarRelationFilter, SiteThemeWhereInput>
  }

  export type LanguageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
    theme?: SiteThemeOrderByWithRelationInput
  }

  export type LanguageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: LanguageWhereInput | LanguageWhereInput[]
    OR?: LanguageWhereInput[]
    NOT?: LanguageWhereInput | LanguageWhereInput[]
    name?: StringFilter<"Language"> | string
    isActive?: BoolFilter<"Language"> | boolean
    isDefault?: BoolFilter<"Language"> | boolean
    createdAt?: DateTimeFilter<"Language"> | Date | string
    updatedAt?: DateTimeFilter<"Language"> | Date | string
    themeId?: IntFilter<"Language"> | number
    theme?: XOR<SiteThemeScalarRelationFilter, SiteThemeWhereInput>
  }, "id" | "code">

  export type LanguageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
    _count?: LanguageCountOrderByAggregateInput
    _avg?: LanguageAvgOrderByAggregateInput
    _max?: LanguageMaxOrderByAggregateInput
    _min?: LanguageMinOrderByAggregateInput
    _sum?: LanguageSumOrderByAggregateInput
  }

  export type LanguageScalarWhereWithAggregatesInput = {
    AND?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    OR?: LanguageScalarWhereWithAggregatesInput[]
    NOT?: LanguageScalarWhereWithAggregatesInput | LanguageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Language"> | number
    name?: StringWithAggregatesFilter<"Language"> | string
    code?: StringWithAggregatesFilter<"Language"> | string
    isActive?: BoolWithAggregatesFilter<"Language"> | boolean
    isDefault?: BoolWithAggregatesFilter<"Language"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Language"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Language"> | Date | string
    themeId?: IntWithAggregatesFilter<"Language"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
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
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SiteThemeCreateInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    navbarLogo?: string
    navbarPrimaryColor?: string
    navbarTextColor?: string
    navbarFont?: string
    navbarShowAboutUs?: boolean
    navbarShowLanguage?: boolean
    siteTitle?: string | null
    siteDescription?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryBgColor?: string | null
    secondaryBgColor?: string | null
    footerLogo?: string | null
    footerText?: string | null
    termsUrl?: string | null
    privacyUrl?: string | null
    supportUrl?: string | null
    navItems?: NavItemCreateNestedManyWithoutThemeInput
    languages?: LanguageCreateNestedManyWithoutThemeInput
  }

  export type SiteThemeUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    navbarLogo?: string
    navbarPrimaryColor?: string
    navbarTextColor?: string
    navbarFont?: string
    navbarShowAboutUs?: boolean
    navbarShowLanguage?: boolean
    siteTitle?: string | null
    siteDescription?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryBgColor?: string | null
    secondaryBgColor?: string | null
    footerLogo?: string | null
    footerText?: string | null
    termsUrl?: string | null
    privacyUrl?: string | null
    supportUrl?: string | null
    navItems?: NavItemUncheckedCreateNestedManyWithoutThemeInput
    languages?: LanguageUncheckedCreateNestedManyWithoutThemeInput
  }

  export type SiteThemeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navbarLogo?: StringFieldUpdateOperationsInput | string
    navbarPrimaryColor?: StringFieldUpdateOperationsInput | string
    navbarTextColor?: StringFieldUpdateOperationsInput | string
    navbarFont?: StringFieldUpdateOperationsInput | string
    navbarShowAboutUs?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    termsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    privacyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUpdateManyWithoutThemeNestedInput
    languages?: LanguageUpdateManyWithoutThemeNestedInput
  }

  export type SiteThemeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navbarLogo?: StringFieldUpdateOperationsInput | string
    navbarPrimaryColor?: StringFieldUpdateOperationsInput | string
    navbarTextColor?: StringFieldUpdateOperationsInput | string
    navbarFont?: StringFieldUpdateOperationsInput | string
    navbarShowAboutUs?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    termsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    privacyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUncheckedUpdateManyWithoutThemeNestedInput
    languages?: LanguageUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type SiteThemeCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    navbarLogo?: string
    navbarPrimaryColor?: string
    navbarTextColor?: string
    navbarFont?: string
    navbarShowAboutUs?: boolean
    navbarShowLanguage?: boolean
    siteTitle?: string | null
    siteDescription?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryBgColor?: string | null
    secondaryBgColor?: string | null
    footerLogo?: string | null
    footerText?: string | null
    termsUrl?: string | null
    privacyUrl?: string | null
    supportUrl?: string | null
  }

  export type SiteThemeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navbarLogo?: StringFieldUpdateOperationsInput | string
    navbarPrimaryColor?: StringFieldUpdateOperationsInput | string
    navbarTextColor?: StringFieldUpdateOperationsInput | string
    navbarFont?: StringFieldUpdateOperationsInput | string
    navbarShowAboutUs?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    termsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    privacyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SiteThemeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navbarLogo?: StringFieldUpdateOperationsInput | string
    navbarPrimaryColor?: StringFieldUpdateOperationsInput | string
    navbarTextColor?: StringFieldUpdateOperationsInput | string
    navbarFont?: StringFieldUpdateOperationsInput | string
    navbarShowAboutUs?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    termsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    privacyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NavItemCreateInput = {
    title: string
    href: string
    order?: number
    isActive?: boolean
    isExternal?: boolean
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    theme: SiteThemeCreateNestedOneWithoutNavItemsInput
  }

  export type NavItemUncheckedCreateInput = {
    id?: number
    title: string
    href: string
    order?: number
    isActive?: boolean
    isExternal?: boolean
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    themeId: number
  }

  export type NavItemUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: SiteThemeUpdateOneRequiredWithoutNavItemsNestedInput
  }

  export type NavItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: IntFieldUpdateOperationsInput | number
  }

  export type NavItemCreateManyInput = {
    id?: number
    title: string
    href: string
    order?: number
    isActive?: boolean
    isExternal?: boolean
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    themeId: number
  }

  export type NavItemUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: IntFieldUpdateOperationsInput | number
  }

  export type LanguageCreateInput = {
    name: string
    code: string
    isActive?: boolean
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    theme: SiteThemeCreateNestedOneWithoutLanguagesInput
  }

  export type LanguageUncheckedCreateInput = {
    id?: number
    name: string
    code: string
    isActive?: boolean
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    themeId: number
  }

  export type LanguageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: SiteThemeUpdateOneRequiredWithoutLanguagesNestedInput
  }

  export type LanguageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: IntFieldUpdateOperationsInput | number
  }

  export type LanguageCreateManyInput = {
    id?: number
    name: string
    code: string
    isActive?: boolean
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    themeId: number
  }

  export type LanguageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    password: string
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NavItemListRelationFilter = {
    every?: NavItemWhereInput
    some?: NavItemWhereInput
    none?: NavItemWhereInput
  }

  export type LanguageListRelationFilter = {
    every?: LanguageWhereInput
    some?: LanguageWhereInput
    none?: LanguageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NavItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LanguageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteThemeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    navbarLogo?: SortOrder
    navbarPrimaryColor?: SortOrder
    navbarTextColor?: SortOrder
    navbarFont?: SortOrder
    navbarShowAboutUs?: SortOrder
    navbarShowLanguage?: SortOrder
    siteTitle?: SortOrder
    siteDescription?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    primaryBgColor?: SortOrder
    secondaryBgColor?: SortOrder
    footerLogo?: SortOrder
    footerText?: SortOrder
    termsUrl?: SortOrder
    privacyUrl?: SortOrder
    supportUrl?: SortOrder
  }

  export type SiteThemeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SiteThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    navbarLogo?: SortOrder
    navbarPrimaryColor?: SortOrder
    navbarTextColor?: SortOrder
    navbarFont?: SortOrder
    navbarShowAboutUs?: SortOrder
    navbarShowLanguage?: SortOrder
    siteTitle?: SortOrder
    siteDescription?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    primaryBgColor?: SortOrder
    secondaryBgColor?: SortOrder
    footerLogo?: SortOrder
    footerText?: SortOrder
    termsUrl?: SortOrder
    privacyUrl?: SortOrder
    supportUrl?: SortOrder
  }

  export type SiteThemeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    navbarLogo?: SortOrder
    navbarPrimaryColor?: SortOrder
    navbarTextColor?: SortOrder
    navbarFont?: SortOrder
    navbarShowAboutUs?: SortOrder
    navbarShowLanguage?: SortOrder
    siteTitle?: SortOrder
    siteDescription?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    primaryBgColor?: SortOrder
    secondaryBgColor?: SortOrder
    footerLogo?: SortOrder
    footerText?: SortOrder
    termsUrl?: SortOrder
    privacyUrl?: SortOrder
    supportUrl?: SortOrder
  }

  export type SiteThemeSumOrderByAggregateInput = {
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type SiteThemeScalarRelationFilter = {
    is?: SiteThemeWhereInput
    isNot?: SiteThemeWhereInput
  }

  export type NavItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    href?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    isExternal?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type NavItemAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    themeId?: SortOrder
  }

  export type NavItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    href?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    isExternal?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type NavItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    href?: SortOrder
    order?: SortOrder
    isActive?: SortOrder
    isExternal?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type NavItemSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    themeId?: SortOrder
  }

  export type LanguageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type LanguageAvgOrderByAggregateInput = {
    id?: SortOrder
    themeId?: SortOrder
  }

  export type LanguageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type LanguageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    isActive?: SortOrder
    isDefault?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type LanguageSumOrderByAggregateInput = {
    id?: SortOrder
    themeId?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NavItemCreateNestedManyWithoutThemeInput = {
    create?: XOR<NavItemCreateWithoutThemeInput, NavItemUncheckedCreateWithoutThemeInput> | NavItemCreateWithoutThemeInput[] | NavItemUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: NavItemCreateOrConnectWithoutThemeInput | NavItemCreateOrConnectWithoutThemeInput[]
    createMany?: NavItemCreateManyThemeInputEnvelope
    connect?: NavItemWhereUniqueInput | NavItemWhereUniqueInput[]
  }

  export type LanguageCreateNestedManyWithoutThemeInput = {
    create?: XOR<LanguageCreateWithoutThemeInput, LanguageUncheckedCreateWithoutThemeInput> | LanguageCreateWithoutThemeInput[] | LanguageUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutThemeInput | LanguageCreateOrConnectWithoutThemeInput[]
    createMany?: LanguageCreateManyThemeInputEnvelope
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
  }

  export type NavItemUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<NavItemCreateWithoutThemeInput, NavItemUncheckedCreateWithoutThemeInput> | NavItemCreateWithoutThemeInput[] | NavItemUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: NavItemCreateOrConnectWithoutThemeInput | NavItemCreateOrConnectWithoutThemeInput[]
    createMany?: NavItemCreateManyThemeInputEnvelope
    connect?: NavItemWhereUniqueInput | NavItemWhereUniqueInput[]
  }

  export type LanguageUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<LanguageCreateWithoutThemeInput, LanguageUncheckedCreateWithoutThemeInput> | LanguageCreateWithoutThemeInput[] | LanguageUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutThemeInput | LanguageCreateOrConnectWithoutThemeInput[]
    createMany?: LanguageCreateManyThemeInputEnvelope
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NavItemUpdateManyWithoutThemeNestedInput = {
    create?: XOR<NavItemCreateWithoutThemeInput, NavItemUncheckedCreateWithoutThemeInput> | NavItemCreateWithoutThemeInput[] | NavItemUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: NavItemCreateOrConnectWithoutThemeInput | NavItemCreateOrConnectWithoutThemeInput[]
    upsert?: NavItemUpsertWithWhereUniqueWithoutThemeInput | NavItemUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: NavItemCreateManyThemeInputEnvelope
    set?: NavItemWhereUniqueInput | NavItemWhereUniqueInput[]
    disconnect?: NavItemWhereUniqueInput | NavItemWhereUniqueInput[]
    delete?: NavItemWhereUniqueInput | NavItemWhereUniqueInput[]
    connect?: NavItemWhereUniqueInput | NavItemWhereUniqueInput[]
    update?: NavItemUpdateWithWhereUniqueWithoutThemeInput | NavItemUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: NavItemUpdateManyWithWhereWithoutThemeInput | NavItemUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: NavItemScalarWhereInput | NavItemScalarWhereInput[]
  }

  export type LanguageUpdateManyWithoutThemeNestedInput = {
    create?: XOR<LanguageCreateWithoutThemeInput, LanguageUncheckedCreateWithoutThemeInput> | LanguageCreateWithoutThemeInput[] | LanguageUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutThemeInput | LanguageCreateOrConnectWithoutThemeInput[]
    upsert?: LanguageUpsertWithWhereUniqueWithoutThemeInput | LanguageUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: LanguageCreateManyThemeInputEnvelope
    set?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    disconnect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    delete?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    update?: LanguageUpdateWithWhereUniqueWithoutThemeInput | LanguageUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: LanguageUpdateManyWithWhereWithoutThemeInput | LanguageUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NavItemUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<NavItemCreateWithoutThemeInput, NavItemUncheckedCreateWithoutThemeInput> | NavItemCreateWithoutThemeInput[] | NavItemUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: NavItemCreateOrConnectWithoutThemeInput | NavItemCreateOrConnectWithoutThemeInput[]
    upsert?: NavItemUpsertWithWhereUniqueWithoutThemeInput | NavItemUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: NavItemCreateManyThemeInputEnvelope
    set?: NavItemWhereUniqueInput | NavItemWhereUniqueInput[]
    disconnect?: NavItemWhereUniqueInput | NavItemWhereUniqueInput[]
    delete?: NavItemWhereUniqueInput | NavItemWhereUniqueInput[]
    connect?: NavItemWhereUniqueInput | NavItemWhereUniqueInput[]
    update?: NavItemUpdateWithWhereUniqueWithoutThemeInput | NavItemUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: NavItemUpdateManyWithWhereWithoutThemeInput | NavItemUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: NavItemScalarWhereInput | NavItemScalarWhereInput[]
  }

  export type LanguageUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<LanguageCreateWithoutThemeInput, LanguageUncheckedCreateWithoutThemeInput> | LanguageCreateWithoutThemeInput[] | LanguageUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: LanguageCreateOrConnectWithoutThemeInput | LanguageCreateOrConnectWithoutThemeInput[]
    upsert?: LanguageUpsertWithWhereUniqueWithoutThemeInput | LanguageUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: LanguageCreateManyThemeInputEnvelope
    set?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    disconnect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    delete?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    connect?: LanguageWhereUniqueInput | LanguageWhereUniqueInput[]
    update?: LanguageUpdateWithWhereUniqueWithoutThemeInput | LanguageUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: LanguageUpdateManyWithWhereWithoutThemeInput | LanguageUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
  }

  export type SiteThemeCreateNestedOneWithoutNavItemsInput = {
    create?: XOR<SiteThemeCreateWithoutNavItemsInput, SiteThemeUncheckedCreateWithoutNavItemsInput>
    connectOrCreate?: SiteThemeCreateOrConnectWithoutNavItemsInput
    connect?: SiteThemeWhereUniqueInput
  }

  export type SiteThemeUpdateOneRequiredWithoutNavItemsNestedInput = {
    create?: XOR<SiteThemeCreateWithoutNavItemsInput, SiteThemeUncheckedCreateWithoutNavItemsInput>
    connectOrCreate?: SiteThemeCreateOrConnectWithoutNavItemsInput
    upsert?: SiteThemeUpsertWithoutNavItemsInput
    connect?: SiteThemeWhereUniqueInput
    update?: XOR<XOR<SiteThemeUpdateToOneWithWhereWithoutNavItemsInput, SiteThemeUpdateWithoutNavItemsInput>, SiteThemeUncheckedUpdateWithoutNavItemsInput>
  }

  export type SiteThemeCreateNestedOneWithoutLanguagesInput = {
    create?: XOR<SiteThemeCreateWithoutLanguagesInput, SiteThemeUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: SiteThemeCreateOrConnectWithoutLanguagesInput
    connect?: SiteThemeWhereUniqueInput
  }

  export type SiteThemeUpdateOneRequiredWithoutLanguagesNestedInput = {
    create?: XOR<SiteThemeCreateWithoutLanguagesInput, SiteThemeUncheckedCreateWithoutLanguagesInput>
    connectOrCreate?: SiteThemeCreateOrConnectWithoutLanguagesInput
    upsert?: SiteThemeUpsertWithoutLanguagesInput
    connect?: SiteThemeWhereUniqueInput
    update?: XOR<XOR<SiteThemeUpdateToOneWithWhereWithoutLanguagesInput, SiteThemeUpdateWithoutLanguagesInput>, SiteThemeUncheckedUpdateWithoutLanguagesInput>
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NavItemCreateWithoutThemeInput = {
    title: string
    href: string
    order?: number
    isActive?: boolean
    isExternal?: boolean
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavItemUncheckedCreateWithoutThemeInput = {
    id?: number
    title: string
    href: string
    order?: number
    isActive?: boolean
    isExternal?: boolean
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavItemCreateOrConnectWithoutThemeInput = {
    where: NavItemWhereUniqueInput
    create: XOR<NavItemCreateWithoutThemeInput, NavItemUncheckedCreateWithoutThemeInput>
  }

  export type NavItemCreateManyThemeInputEnvelope = {
    data: NavItemCreateManyThemeInput | NavItemCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type LanguageCreateWithoutThemeInput = {
    name: string
    code: string
    isActive?: boolean
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageUncheckedCreateWithoutThemeInput = {
    id?: number
    name: string
    code: string
    isActive?: boolean
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageCreateOrConnectWithoutThemeInput = {
    where: LanguageWhereUniqueInput
    create: XOR<LanguageCreateWithoutThemeInput, LanguageUncheckedCreateWithoutThemeInput>
  }

  export type LanguageCreateManyThemeInputEnvelope = {
    data: LanguageCreateManyThemeInput | LanguageCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type NavItemUpsertWithWhereUniqueWithoutThemeInput = {
    where: NavItemWhereUniqueInput
    update: XOR<NavItemUpdateWithoutThemeInput, NavItemUncheckedUpdateWithoutThemeInput>
    create: XOR<NavItemCreateWithoutThemeInput, NavItemUncheckedCreateWithoutThemeInput>
  }

  export type NavItemUpdateWithWhereUniqueWithoutThemeInput = {
    where: NavItemWhereUniqueInput
    data: XOR<NavItemUpdateWithoutThemeInput, NavItemUncheckedUpdateWithoutThemeInput>
  }

  export type NavItemUpdateManyWithWhereWithoutThemeInput = {
    where: NavItemScalarWhereInput
    data: XOR<NavItemUpdateManyMutationInput, NavItemUncheckedUpdateManyWithoutThemeInput>
  }

  export type NavItemScalarWhereInput = {
    AND?: NavItemScalarWhereInput | NavItemScalarWhereInput[]
    OR?: NavItemScalarWhereInput[]
    NOT?: NavItemScalarWhereInput | NavItemScalarWhereInput[]
    id?: IntFilter<"NavItem"> | number
    title?: StringFilter<"NavItem"> | string
    href?: StringFilter<"NavItem"> | string
    order?: IntFilter<"NavItem"> | number
    isActive?: BoolFilter<"NavItem"> | boolean
    isExternal?: BoolFilter<"NavItem"> | boolean
    icon?: StringNullableFilter<"NavItem"> | string | null
    createdAt?: DateTimeFilter<"NavItem"> | Date | string
    updatedAt?: DateTimeFilter<"NavItem"> | Date | string
    themeId?: IntFilter<"NavItem"> | number
  }

  export type LanguageUpsertWithWhereUniqueWithoutThemeInput = {
    where: LanguageWhereUniqueInput
    update: XOR<LanguageUpdateWithoutThemeInput, LanguageUncheckedUpdateWithoutThemeInput>
    create: XOR<LanguageCreateWithoutThemeInput, LanguageUncheckedCreateWithoutThemeInput>
  }

  export type LanguageUpdateWithWhereUniqueWithoutThemeInput = {
    where: LanguageWhereUniqueInput
    data: XOR<LanguageUpdateWithoutThemeInput, LanguageUncheckedUpdateWithoutThemeInput>
  }

  export type LanguageUpdateManyWithWhereWithoutThemeInput = {
    where: LanguageScalarWhereInput
    data: XOR<LanguageUpdateManyMutationInput, LanguageUncheckedUpdateManyWithoutThemeInput>
  }

  export type LanguageScalarWhereInput = {
    AND?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
    OR?: LanguageScalarWhereInput[]
    NOT?: LanguageScalarWhereInput | LanguageScalarWhereInput[]
    id?: IntFilter<"Language"> | number
    name?: StringFilter<"Language"> | string
    code?: StringFilter<"Language"> | string
    isActive?: BoolFilter<"Language"> | boolean
    isDefault?: BoolFilter<"Language"> | boolean
    createdAt?: DateTimeFilter<"Language"> | Date | string
    updatedAt?: DateTimeFilter<"Language"> | Date | string
    themeId?: IntFilter<"Language"> | number
  }

  export type SiteThemeCreateWithoutNavItemsInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    navbarLogo?: string
    navbarPrimaryColor?: string
    navbarTextColor?: string
    navbarFont?: string
    navbarShowAboutUs?: boolean
    navbarShowLanguage?: boolean
    siteTitle?: string | null
    siteDescription?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryBgColor?: string | null
    secondaryBgColor?: string | null
    footerLogo?: string | null
    footerText?: string | null
    termsUrl?: string | null
    privacyUrl?: string | null
    supportUrl?: string | null
    languages?: LanguageCreateNestedManyWithoutThemeInput
  }

  export type SiteThemeUncheckedCreateWithoutNavItemsInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    navbarLogo?: string
    navbarPrimaryColor?: string
    navbarTextColor?: string
    navbarFont?: string
    navbarShowAboutUs?: boolean
    navbarShowLanguage?: boolean
    siteTitle?: string | null
    siteDescription?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryBgColor?: string | null
    secondaryBgColor?: string | null
    footerLogo?: string | null
    footerText?: string | null
    termsUrl?: string | null
    privacyUrl?: string | null
    supportUrl?: string | null
    languages?: LanguageUncheckedCreateNestedManyWithoutThemeInput
  }

  export type SiteThemeCreateOrConnectWithoutNavItemsInput = {
    where: SiteThemeWhereUniqueInput
    create: XOR<SiteThemeCreateWithoutNavItemsInput, SiteThemeUncheckedCreateWithoutNavItemsInput>
  }

  export type SiteThemeUpsertWithoutNavItemsInput = {
    update: XOR<SiteThemeUpdateWithoutNavItemsInput, SiteThemeUncheckedUpdateWithoutNavItemsInput>
    create: XOR<SiteThemeCreateWithoutNavItemsInput, SiteThemeUncheckedCreateWithoutNavItemsInput>
    where?: SiteThemeWhereInput
  }

  export type SiteThemeUpdateToOneWithWhereWithoutNavItemsInput = {
    where?: SiteThemeWhereInput
    data: XOR<SiteThemeUpdateWithoutNavItemsInput, SiteThemeUncheckedUpdateWithoutNavItemsInput>
  }

  export type SiteThemeUpdateWithoutNavItemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navbarLogo?: StringFieldUpdateOperationsInput | string
    navbarPrimaryColor?: StringFieldUpdateOperationsInput | string
    navbarTextColor?: StringFieldUpdateOperationsInput | string
    navbarFont?: StringFieldUpdateOperationsInput | string
    navbarShowAboutUs?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    termsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    privacyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: LanguageUpdateManyWithoutThemeNestedInput
  }

  export type SiteThemeUncheckedUpdateWithoutNavItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navbarLogo?: StringFieldUpdateOperationsInput | string
    navbarPrimaryColor?: StringFieldUpdateOperationsInput | string
    navbarTextColor?: StringFieldUpdateOperationsInput | string
    navbarFont?: StringFieldUpdateOperationsInput | string
    navbarShowAboutUs?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    termsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    privacyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: LanguageUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type SiteThemeCreateWithoutLanguagesInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    navbarLogo?: string
    navbarPrimaryColor?: string
    navbarTextColor?: string
    navbarFont?: string
    navbarShowAboutUs?: boolean
    navbarShowLanguage?: boolean
    siteTitle?: string | null
    siteDescription?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryBgColor?: string | null
    secondaryBgColor?: string | null
    footerLogo?: string | null
    footerText?: string | null
    termsUrl?: string | null
    privacyUrl?: string | null
    supportUrl?: string | null
    navItems?: NavItemCreateNestedManyWithoutThemeInput
  }

  export type SiteThemeUncheckedCreateWithoutLanguagesInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    navbarLogo?: string
    navbarPrimaryColor?: string
    navbarTextColor?: string
    navbarFont?: string
    navbarShowAboutUs?: boolean
    navbarShowLanguage?: boolean
    siteTitle?: string | null
    siteDescription?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    primaryBgColor?: string | null
    secondaryBgColor?: string | null
    footerLogo?: string | null
    footerText?: string | null
    termsUrl?: string | null
    privacyUrl?: string | null
    supportUrl?: string | null
    navItems?: NavItemUncheckedCreateNestedManyWithoutThemeInput
  }

  export type SiteThemeCreateOrConnectWithoutLanguagesInput = {
    where: SiteThemeWhereUniqueInput
    create: XOR<SiteThemeCreateWithoutLanguagesInput, SiteThemeUncheckedCreateWithoutLanguagesInput>
  }

  export type SiteThemeUpsertWithoutLanguagesInput = {
    update: XOR<SiteThemeUpdateWithoutLanguagesInput, SiteThemeUncheckedUpdateWithoutLanguagesInput>
    create: XOR<SiteThemeCreateWithoutLanguagesInput, SiteThemeUncheckedCreateWithoutLanguagesInput>
    where?: SiteThemeWhereInput
  }

  export type SiteThemeUpdateToOneWithWhereWithoutLanguagesInput = {
    where?: SiteThemeWhereInput
    data: XOR<SiteThemeUpdateWithoutLanguagesInput, SiteThemeUncheckedUpdateWithoutLanguagesInput>
  }

  export type SiteThemeUpdateWithoutLanguagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navbarLogo?: StringFieldUpdateOperationsInput | string
    navbarPrimaryColor?: StringFieldUpdateOperationsInput | string
    navbarTextColor?: StringFieldUpdateOperationsInput | string
    navbarFont?: StringFieldUpdateOperationsInput | string
    navbarShowAboutUs?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    termsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    privacyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUpdateManyWithoutThemeNestedInput
  }

  export type SiteThemeUncheckedUpdateWithoutLanguagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    navbarLogo?: StringFieldUpdateOperationsInput | string
    navbarPrimaryColor?: StringFieldUpdateOperationsInput | string
    navbarTextColor?: StringFieldUpdateOperationsInput | string
    navbarFont?: StringFieldUpdateOperationsInput | string
    navbarShowAboutUs?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    primaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryBgColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerText?: NullableStringFieldUpdateOperationsInput | string | null
    termsUrl?: NullableStringFieldUpdateOperationsInput | string | null
    privacyUrl?: NullableStringFieldUpdateOperationsInput | string | null
    supportUrl?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUncheckedUpdateManyWithoutThemeNestedInput
  }

  export type NavItemCreateManyThemeInput = {
    id?: number
    title: string
    href: string
    order?: number
    isActive?: boolean
    isExternal?: boolean
    icon?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LanguageCreateManyThemeInput = {
    id?: number
    name: string
    code: string
    isActive?: boolean
    isDefault?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NavItemUpdateWithoutThemeInput = {
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavItemUncheckedUpdateWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NavItemUncheckedUpdateManyWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    href?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isExternal?: BoolFieldUpdateOperationsInput | boolean
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUpdateWithoutThemeInput = {
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LanguageUncheckedUpdateManyWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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