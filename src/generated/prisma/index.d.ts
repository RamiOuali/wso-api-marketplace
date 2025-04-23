
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
 * Model ContentSection
 * 
 */
export type ContentSection = $Result.DefaultSelection<Prisma.$ContentSectionPayload>
/**
 * Model Banner
 * 
 */
export type Banner = $Result.DefaultSelection<Prisma.$BannerPayload>
/**
 * Model SocialLink
 * 
 */
export type SocialLink = $Result.DefaultSelection<Prisma.$SocialLinkPayload>
/**
 * Model ContactInfo
 * 
 */
export type ContactInfo = $Result.DefaultSelection<Prisma.$ContactInfoPayload>
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
   * `prisma.contentSection`: Exposes CRUD operations for the **ContentSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContentSections
    * const contentSections = await prisma.contentSection.findMany()
    * ```
    */
  get contentSection(): Prisma.ContentSectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **Banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.BannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.socialLink`: Exposes CRUD operations for the **SocialLink** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SocialLinks
    * const socialLinks = await prisma.socialLink.findMany()
    * ```
    */
  get socialLink(): Prisma.SocialLinkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactInfo`: Exposes CRUD operations for the **ContactInfo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactInfos
    * const contactInfos = await prisma.contactInfo.findMany()
    * ```
    */
  get contactInfo(): Prisma.ContactInfoDelegate<ExtArgs, ClientOptions>;

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
    ContentSection: 'ContentSection',
    Banner: 'Banner',
    SocialLink: 'SocialLink',
    ContactInfo: 'ContactInfo',
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
      modelProps: "siteTheme" | "navItem" | "language" | "contentSection" | "banner" | "socialLink" | "contactInfo" | "user"
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
      ContentSection: {
        payload: Prisma.$ContentSectionPayload<ExtArgs>
        fields: Prisma.ContentSectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContentSectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContentSectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>
          }
          findFirst: {
            args: Prisma.ContentSectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContentSectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>
          }
          findMany: {
            args: Prisma.ContentSectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>[]
          }
          create: {
            args: Prisma.ContentSectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>
          }
          createMany: {
            args: Prisma.ContentSectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContentSectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>[]
          }
          delete: {
            args: Prisma.ContentSectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>
          }
          update: {
            args: Prisma.ContentSectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>
          }
          deleteMany: {
            args: Prisma.ContentSectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContentSectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContentSectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>[]
          }
          upsert: {
            args: Prisma.ContentSectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContentSectionPayload>
          }
          aggregate: {
            args: Prisma.ContentSectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContentSection>
          }
          groupBy: {
            args: Prisma.ContentSectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContentSectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContentSectionCountArgs<ExtArgs>
            result: $Utils.Optional<ContentSectionCountAggregateOutputType> | number
          }
        }
      }
      Banner: {
        payload: Prisma.$BannerPayload<ExtArgs>
        fields: Prisma.BannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findFirst: {
            args: Prisma.BannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          findMany: {
            args: Prisma.BannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          create: {
            args: Prisma.BannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          createMany: {
            args: Prisma.BannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          delete: {
            args: Prisma.BannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          update: {
            args: Prisma.BannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          deleteMany: {
            args: Prisma.BannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>[]
          }
          upsert: {
            args: Prisma.BannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.BannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      SocialLink: {
        payload: Prisma.$SocialLinkPayload<ExtArgs>
        fields: Prisma.SocialLinkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialLinkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialLinkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findFirst: {
            args: Prisma.SocialLinkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialLinkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          findMany: {
            args: Prisma.SocialLinkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          create: {
            args: Prisma.SocialLinkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          createMany: {
            args: Prisma.SocialLinkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialLinkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          delete: {
            args: Prisma.SocialLinkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          update: {
            args: Prisma.SocialLinkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          deleteMany: {
            args: Prisma.SocialLinkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialLinkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialLinkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>[]
          }
          upsert: {
            args: Prisma.SocialLinkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialLinkPayload>
          }
          aggregate: {
            args: Prisma.SocialLinkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocialLink>
          }
          groupBy: {
            args: Prisma.SocialLinkGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialLinkCountArgs<ExtArgs>
            result: $Utils.Optional<SocialLinkCountAggregateOutputType> | number
          }
        }
      }
      ContactInfo: {
        payload: Prisma.$ContactInfoPayload<ExtArgs>
        fields: Prisma.ContactInfoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactInfoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactInfoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findFirst: {
            args: Prisma.ContactInfoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactInfoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          findMany: {
            args: Prisma.ContactInfoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          create: {
            args: Prisma.ContactInfoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          createMany: {
            args: Prisma.ContactInfoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactInfoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          delete: {
            args: Prisma.ContactInfoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          update: {
            args: Prisma.ContactInfoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          deleteMany: {
            args: Prisma.ContactInfoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactInfoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactInfoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>[]
          }
          upsert: {
            args: Prisma.ContactInfoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactInfoPayload>
          }
          aggregate: {
            args: Prisma.ContactInfoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactInfo>
          }
          groupBy: {
            args: Prisma.ContactInfoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactInfoCountArgs<ExtArgs>
            result: $Utils.Optional<ContactInfoCountAggregateOutputType> | number
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
    contentSection?: ContentSectionOmit
    banner?: BannerOmit
    socialLink?: SocialLinkOmit
    contactInfo?: ContactInfoOmit
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
    contentSections: number
    banners: number
    socialLinks: number
  }

  export type SiteThemeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navItems?: boolean | SiteThemeCountOutputTypeCountNavItemsArgs
    languages?: boolean | SiteThemeCountOutputTypeCountLanguagesArgs
    contentSections?: boolean | SiteThemeCountOutputTypeCountContentSectionsArgs
    banners?: boolean | SiteThemeCountOutputTypeCountBannersArgs
    socialLinks?: boolean | SiteThemeCountOutputTypeCountSocialLinksArgs
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
   * SiteThemeCountOutputType without action
   */
  export type SiteThemeCountOutputTypeCountContentSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentSectionWhereInput
  }

  /**
   * SiteThemeCountOutputType without action
   */
  export type SiteThemeCountOutputTypeCountBannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
  }

  /**
   * SiteThemeCountOutputType without action
   */
  export type SiteThemeCountOutputTypeCountSocialLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
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
    heroOverlayOpacity: number | null
  }

  export type SiteThemeSumAggregateOutputType = {
    id: number | null
    heroOverlayOpacity: number | null
  }

  export type SiteThemeMinAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    siteTitle: string | null
    siteDescription: string | null
    siteLogo: string | null
    favicon: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    backgroundColor: string | null
    textColor: string | null
    linkColor: string | null
    bodyFont: string | null
    headingFont: string | null
    baseFontSize: string | null
    headingFontSize: string | null
    containerWidth: string | null
    contentWidth: string | null
    sidebarWidth: string | null
    navbarBackground: string | null
    navbarTextColor: string | null
    navbarLogo: string | null
    navbarHeight: string | null
    navbarPosition: string | null
    navbarShowSearch: boolean | null
    navbarShowLanguage: boolean | null
    navbarShowUserMenu: boolean | null
    navbarShowNotifications: boolean | null
    footerBackground: string | null
    footerTextColor: string | null
    footerLogo: string | null
    footerCopyright: string | null
    footerShowSocial: boolean | null
    footerShowNewsletter: boolean | null
    heroDesign: string | null
    heroBackground: string | null
    heroBackgroundImage: string | null
    heroTextColor: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    heroButtonText: string | null
    heroButtonLink: string | null
    heroButtonColor: string | null
    heroOverlayColor: string | null
    heroOverlayOpacity: number | null
    buttonPrimaryColor: string | null
    buttonSecondaryColor: string | null
    buttonTextColor: string | null
    buttonBorderRadius: string | null
    buttonPadding: string | null
    inputBackground: string | null
    inputBorderColor: string | null
    inputTextColor: string | null
    inputFocusColor: string | null
    inputBorderRadius: string | null
    cardBackground: string | null
    cardBorderColor: string | null
    cardBorderRadius: string | null
    cardShadow: string | null
    cardPadding: string | null
    successColor: string | null
    warningColor: string | null
    errorColor: string | null
    infoColor: string | null
    metaTitle: string | null
    metaDescription: string | null
    metaKeywords: string | null
    googleAnalyticsId: string | null
    googleTagManagerId: string | null
    facebookPixelId: string | null
  }

  export type SiteThemeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    siteTitle: string | null
    siteDescription: string | null
    siteLogo: string | null
    favicon: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    backgroundColor: string | null
    textColor: string | null
    linkColor: string | null
    bodyFont: string | null
    headingFont: string | null
    baseFontSize: string | null
    headingFontSize: string | null
    containerWidth: string | null
    contentWidth: string | null
    sidebarWidth: string | null
    navbarBackground: string | null
    navbarTextColor: string | null
    navbarLogo: string | null
    navbarHeight: string | null
    navbarPosition: string | null
    navbarShowSearch: boolean | null
    navbarShowLanguage: boolean | null
    navbarShowUserMenu: boolean | null
    navbarShowNotifications: boolean | null
    footerBackground: string | null
    footerTextColor: string | null
    footerLogo: string | null
    footerCopyright: string | null
    footerShowSocial: boolean | null
    footerShowNewsletter: boolean | null
    heroDesign: string | null
    heroBackground: string | null
    heroBackgroundImage: string | null
    heroTextColor: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    heroButtonText: string | null
    heroButtonLink: string | null
    heroButtonColor: string | null
    heroOverlayColor: string | null
    heroOverlayOpacity: number | null
    buttonPrimaryColor: string | null
    buttonSecondaryColor: string | null
    buttonTextColor: string | null
    buttonBorderRadius: string | null
    buttonPadding: string | null
    inputBackground: string | null
    inputBorderColor: string | null
    inputTextColor: string | null
    inputFocusColor: string | null
    inputBorderRadius: string | null
    cardBackground: string | null
    cardBorderColor: string | null
    cardBorderRadius: string | null
    cardShadow: string | null
    cardPadding: string | null
    successColor: string | null
    warningColor: string | null
    errorColor: string | null
    infoColor: string | null
    metaTitle: string | null
    metaDescription: string | null
    metaKeywords: string | null
    googleAnalyticsId: string | null
    googleTagManagerId: string | null
    facebookPixelId: string | null
  }

  export type SiteThemeCountAggregateOutputType = {
    id: number
    name: number
    isActive: number
    createdAt: number
    updatedAt: number
    siteTitle: number
    siteDescription: number
    siteLogo: number
    favicon: number
    primaryColor: number
    secondaryColor: number
    accentColor: number
    backgroundColor: number
    textColor: number
    linkColor: number
    bodyFont: number
    headingFont: number
    baseFontSize: number
    headingFontSize: number
    containerWidth: number
    contentWidth: number
    sidebarWidth: number
    navbarBackground: number
    navbarTextColor: number
    navbarLogo: number
    navbarHeight: number
    navbarPosition: number
    navbarShowSearch: number
    navbarShowLanguage: number
    navbarShowUserMenu: number
    navbarShowNotifications: number
    footerBackground: number
    footerTextColor: number
    footerLogo: number
    footerCopyright: number
    footerShowSocial: number
    footerShowNewsletter: number
    footerColumns: number
    heroDesign: number
    heroBackground: number
    heroBackgroundImage: number
    heroTextColor: number
    heroTitle: number
    heroSubtitle: number
    heroButtonText: number
    heroButtonLink: number
    heroButtonColor: number
    heroOverlayColor: number
    heroOverlayOpacity: number
    buttonPrimaryColor: number
    buttonSecondaryColor: number
    buttonTextColor: number
    buttonBorderRadius: number
    buttonPadding: number
    inputBackground: number
    inputBorderColor: number
    inputTextColor: number
    inputFocusColor: number
    inputBorderRadius: number
    cardBackground: number
    cardBorderColor: number
    cardBorderRadius: number
    cardShadow: number
    cardPadding: number
    successColor: number
    warningColor: number
    errorColor: number
    infoColor: number
    metaTitle: number
    metaDescription: number
    metaKeywords: number
    googleAnalyticsId: number
    googleTagManagerId: number
    facebookPixelId: number
    _all: number
  }


  export type SiteThemeAvgAggregateInputType = {
    id?: true
    heroOverlayOpacity?: true
  }

  export type SiteThemeSumAggregateInputType = {
    id?: true
    heroOverlayOpacity?: true
  }

  export type SiteThemeMinAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    siteTitle?: true
    siteDescription?: true
    siteLogo?: true
    favicon?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    backgroundColor?: true
    textColor?: true
    linkColor?: true
    bodyFont?: true
    headingFont?: true
    baseFontSize?: true
    headingFontSize?: true
    containerWidth?: true
    contentWidth?: true
    sidebarWidth?: true
    navbarBackground?: true
    navbarTextColor?: true
    navbarLogo?: true
    navbarHeight?: true
    navbarPosition?: true
    navbarShowSearch?: true
    navbarShowLanguage?: true
    navbarShowUserMenu?: true
    navbarShowNotifications?: true
    footerBackground?: true
    footerTextColor?: true
    footerLogo?: true
    footerCopyright?: true
    footerShowSocial?: true
    footerShowNewsletter?: true
    heroDesign?: true
    heroBackground?: true
    heroBackgroundImage?: true
    heroTextColor?: true
    heroTitle?: true
    heroSubtitle?: true
    heroButtonText?: true
    heroButtonLink?: true
    heroButtonColor?: true
    heroOverlayColor?: true
    heroOverlayOpacity?: true
    buttonPrimaryColor?: true
    buttonSecondaryColor?: true
    buttonTextColor?: true
    buttonBorderRadius?: true
    buttonPadding?: true
    inputBackground?: true
    inputBorderColor?: true
    inputTextColor?: true
    inputFocusColor?: true
    inputBorderRadius?: true
    cardBackground?: true
    cardBorderColor?: true
    cardBorderRadius?: true
    cardShadow?: true
    cardPadding?: true
    successColor?: true
    warningColor?: true
    errorColor?: true
    infoColor?: true
    metaTitle?: true
    metaDescription?: true
    metaKeywords?: true
    googleAnalyticsId?: true
    googleTagManagerId?: true
    facebookPixelId?: true
  }

  export type SiteThemeMaxAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    siteTitle?: true
    siteDescription?: true
    siteLogo?: true
    favicon?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    backgroundColor?: true
    textColor?: true
    linkColor?: true
    bodyFont?: true
    headingFont?: true
    baseFontSize?: true
    headingFontSize?: true
    containerWidth?: true
    contentWidth?: true
    sidebarWidth?: true
    navbarBackground?: true
    navbarTextColor?: true
    navbarLogo?: true
    navbarHeight?: true
    navbarPosition?: true
    navbarShowSearch?: true
    navbarShowLanguage?: true
    navbarShowUserMenu?: true
    navbarShowNotifications?: true
    footerBackground?: true
    footerTextColor?: true
    footerLogo?: true
    footerCopyright?: true
    footerShowSocial?: true
    footerShowNewsletter?: true
    heroDesign?: true
    heroBackground?: true
    heroBackgroundImage?: true
    heroTextColor?: true
    heroTitle?: true
    heroSubtitle?: true
    heroButtonText?: true
    heroButtonLink?: true
    heroButtonColor?: true
    heroOverlayColor?: true
    heroOverlayOpacity?: true
    buttonPrimaryColor?: true
    buttonSecondaryColor?: true
    buttonTextColor?: true
    buttonBorderRadius?: true
    buttonPadding?: true
    inputBackground?: true
    inputBorderColor?: true
    inputTextColor?: true
    inputFocusColor?: true
    inputBorderRadius?: true
    cardBackground?: true
    cardBorderColor?: true
    cardBorderRadius?: true
    cardShadow?: true
    cardPadding?: true
    successColor?: true
    warningColor?: true
    errorColor?: true
    infoColor?: true
    metaTitle?: true
    metaDescription?: true
    metaKeywords?: true
    googleAnalyticsId?: true
    googleTagManagerId?: true
    facebookPixelId?: true
  }

  export type SiteThemeCountAggregateInputType = {
    id?: true
    name?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    siteTitle?: true
    siteDescription?: true
    siteLogo?: true
    favicon?: true
    primaryColor?: true
    secondaryColor?: true
    accentColor?: true
    backgroundColor?: true
    textColor?: true
    linkColor?: true
    bodyFont?: true
    headingFont?: true
    baseFontSize?: true
    headingFontSize?: true
    containerWidth?: true
    contentWidth?: true
    sidebarWidth?: true
    navbarBackground?: true
    navbarTextColor?: true
    navbarLogo?: true
    navbarHeight?: true
    navbarPosition?: true
    navbarShowSearch?: true
    navbarShowLanguage?: true
    navbarShowUserMenu?: true
    navbarShowNotifications?: true
    footerBackground?: true
    footerTextColor?: true
    footerLogo?: true
    footerCopyright?: true
    footerShowSocial?: true
    footerShowNewsletter?: true
    footerColumns?: true
    heroDesign?: true
    heroBackground?: true
    heroBackgroundImage?: true
    heroTextColor?: true
    heroTitle?: true
    heroSubtitle?: true
    heroButtonText?: true
    heroButtonLink?: true
    heroButtonColor?: true
    heroOverlayColor?: true
    heroOverlayOpacity?: true
    buttonPrimaryColor?: true
    buttonSecondaryColor?: true
    buttonTextColor?: true
    buttonBorderRadius?: true
    buttonPadding?: true
    inputBackground?: true
    inputBorderColor?: true
    inputTextColor?: true
    inputFocusColor?: true
    inputBorderRadius?: true
    cardBackground?: true
    cardBorderColor?: true
    cardBorderRadius?: true
    cardShadow?: true
    cardPadding?: true
    successColor?: true
    warningColor?: true
    errorColor?: true
    infoColor?: true
    metaTitle?: true
    metaDescription?: true
    metaKeywords?: true
    googleAnalyticsId?: true
    googleTagManagerId?: true
    facebookPixelId?: true
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
    siteTitle: string | null
    siteDescription: string | null
    siteLogo: string | null
    favicon: string | null
    primaryColor: string | null
    secondaryColor: string | null
    accentColor: string | null
    backgroundColor: string | null
    textColor: string | null
    linkColor: string | null
    bodyFont: string | null
    headingFont: string | null
    baseFontSize: string | null
    headingFontSize: string | null
    containerWidth: string | null
    contentWidth: string | null
    sidebarWidth: string | null
    navbarBackground: string | null
    navbarTextColor: string | null
    navbarLogo: string | null
    navbarHeight: string | null
    navbarPosition: string | null
    navbarShowSearch: boolean
    navbarShowLanguage: boolean
    navbarShowUserMenu: boolean
    navbarShowNotifications: boolean
    footerBackground: string | null
    footerTextColor: string | null
    footerLogo: string | null
    footerCopyright: string | null
    footerShowSocial: boolean
    footerShowNewsletter: boolean
    footerColumns: JsonValue | null
    heroDesign: string | null
    heroBackground: string | null
    heroBackgroundImage: string | null
    heroTextColor: string | null
    heroTitle: string | null
    heroSubtitle: string | null
    heroButtonText: string | null
    heroButtonLink: string | null
    heroButtonColor: string | null
    heroOverlayColor: string | null
    heroOverlayOpacity: number | null
    buttonPrimaryColor: string | null
    buttonSecondaryColor: string | null
    buttonTextColor: string | null
    buttonBorderRadius: string | null
    buttonPadding: string | null
    inputBackground: string | null
    inputBorderColor: string | null
    inputTextColor: string | null
    inputFocusColor: string | null
    inputBorderRadius: string | null
    cardBackground: string | null
    cardBorderColor: string | null
    cardBorderRadius: string | null
    cardShadow: string | null
    cardPadding: string | null
    successColor: string | null
    warningColor: string | null
    errorColor: string | null
    infoColor: string | null
    metaTitle: string | null
    metaDescription: string | null
    metaKeywords: string | null
    googleAnalyticsId: string | null
    googleTagManagerId: string | null
    facebookPixelId: string | null
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
    siteTitle?: boolean
    siteDescription?: boolean
    siteLogo?: boolean
    favicon?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    linkColor?: boolean
    bodyFont?: boolean
    headingFont?: boolean
    baseFontSize?: boolean
    headingFontSize?: boolean
    containerWidth?: boolean
    contentWidth?: boolean
    sidebarWidth?: boolean
    navbarBackground?: boolean
    navbarTextColor?: boolean
    navbarLogo?: boolean
    navbarHeight?: boolean
    navbarPosition?: boolean
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: boolean
    footerTextColor?: boolean
    footerLogo?: boolean
    footerCopyright?: boolean
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: boolean
    heroDesign?: boolean
    heroBackground?: boolean
    heroBackgroundImage?: boolean
    heroTextColor?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    heroButtonText?: boolean
    heroButtonLink?: boolean
    heroButtonColor?: boolean
    heroOverlayColor?: boolean
    heroOverlayOpacity?: boolean
    buttonPrimaryColor?: boolean
    buttonSecondaryColor?: boolean
    buttonTextColor?: boolean
    buttonBorderRadius?: boolean
    buttonPadding?: boolean
    inputBackground?: boolean
    inputBorderColor?: boolean
    inputTextColor?: boolean
    inputFocusColor?: boolean
    inputBorderRadius?: boolean
    cardBackground?: boolean
    cardBorderColor?: boolean
    cardBorderRadius?: boolean
    cardShadow?: boolean
    cardPadding?: boolean
    successColor?: boolean
    warningColor?: boolean
    errorColor?: boolean
    infoColor?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    googleAnalyticsId?: boolean
    googleTagManagerId?: boolean
    facebookPixelId?: boolean
    navItems?: boolean | SiteTheme$navItemsArgs<ExtArgs>
    languages?: boolean | SiteTheme$languagesArgs<ExtArgs>
    contentSections?: boolean | SiteTheme$contentSectionsArgs<ExtArgs>
    banners?: boolean | SiteTheme$bannersArgs<ExtArgs>
    socialLinks?: boolean | SiteTheme$socialLinksArgs<ExtArgs>
    contactInfo?: boolean | SiteTheme$contactInfoArgs<ExtArgs>
    _count?: boolean | SiteThemeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["siteTheme"]>

  export type SiteThemeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    siteTitle?: boolean
    siteDescription?: boolean
    siteLogo?: boolean
    favicon?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    linkColor?: boolean
    bodyFont?: boolean
    headingFont?: boolean
    baseFontSize?: boolean
    headingFontSize?: boolean
    containerWidth?: boolean
    contentWidth?: boolean
    sidebarWidth?: boolean
    navbarBackground?: boolean
    navbarTextColor?: boolean
    navbarLogo?: boolean
    navbarHeight?: boolean
    navbarPosition?: boolean
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: boolean
    footerTextColor?: boolean
    footerLogo?: boolean
    footerCopyright?: boolean
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: boolean
    heroDesign?: boolean
    heroBackground?: boolean
    heroBackgroundImage?: boolean
    heroTextColor?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    heroButtonText?: boolean
    heroButtonLink?: boolean
    heroButtonColor?: boolean
    heroOverlayColor?: boolean
    heroOverlayOpacity?: boolean
    buttonPrimaryColor?: boolean
    buttonSecondaryColor?: boolean
    buttonTextColor?: boolean
    buttonBorderRadius?: boolean
    buttonPadding?: boolean
    inputBackground?: boolean
    inputBorderColor?: boolean
    inputTextColor?: boolean
    inputFocusColor?: boolean
    inputBorderRadius?: boolean
    cardBackground?: boolean
    cardBorderColor?: boolean
    cardBorderRadius?: boolean
    cardShadow?: boolean
    cardPadding?: boolean
    successColor?: boolean
    warningColor?: boolean
    errorColor?: boolean
    infoColor?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    googleAnalyticsId?: boolean
    googleTagManagerId?: boolean
    facebookPixelId?: boolean
  }, ExtArgs["result"]["siteTheme"]>

  export type SiteThemeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    siteTitle?: boolean
    siteDescription?: boolean
    siteLogo?: boolean
    favicon?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    linkColor?: boolean
    bodyFont?: boolean
    headingFont?: boolean
    baseFontSize?: boolean
    headingFontSize?: boolean
    containerWidth?: boolean
    contentWidth?: boolean
    sidebarWidth?: boolean
    navbarBackground?: boolean
    navbarTextColor?: boolean
    navbarLogo?: boolean
    navbarHeight?: boolean
    navbarPosition?: boolean
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: boolean
    footerTextColor?: boolean
    footerLogo?: boolean
    footerCopyright?: boolean
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: boolean
    heroDesign?: boolean
    heroBackground?: boolean
    heroBackgroundImage?: boolean
    heroTextColor?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    heroButtonText?: boolean
    heroButtonLink?: boolean
    heroButtonColor?: boolean
    heroOverlayColor?: boolean
    heroOverlayOpacity?: boolean
    buttonPrimaryColor?: boolean
    buttonSecondaryColor?: boolean
    buttonTextColor?: boolean
    buttonBorderRadius?: boolean
    buttonPadding?: boolean
    inputBackground?: boolean
    inputBorderColor?: boolean
    inputTextColor?: boolean
    inputFocusColor?: boolean
    inputBorderRadius?: boolean
    cardBackground?: boolean
    cardBorderColor?: boolean
    cardBorderRadius?: boolean
    cardShadow?: boolean
    cardPadding?: boolean
    successColor?: boolean
    warningColor?: boolean
    errorColor?: boolean
    infoColor?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    googleAnalyticsId?: boolean
    googleTagManagerId?: boolean
    facebookPixelId?: boolean
  }, ExtArgs["result"]["siteTheme"]>

  export type SiteThemeSelectScalar = {
    id?: boolean
    name?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    siteTitle?: boolean
    siteDescription?: boolean
    siteLogo?: boolean
    favicon?: boolean
    primaryColor?: boolean
    secondaryColor?: boolean
    accentColor?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    linkColor?: boolean
    bodyFont?: boolean
    headingFont?: boolean
    baseFontSize?: boolean
    headingFontSize?: boolean
    containerWidth?: boolean
    contentWidth?: boolean
    sidebarWidth?: boolean
    navbarBackground?: boolean
    navbarTextColor?: boolean
    navbarLogo?: boolean
    navbarHeight?: boolean
    navbarPosition?: boolean
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: boolean
    footerTextColor?: boolean
    footerLogo?: boolean
    footerCopyright?: boolean
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: boolean
    heroDesign?: boolean
    heroBackground?: boolean
    heroBackgroundImage?: boolean
    heroTextColor?: boolean
    heroTitle?: boolean
    heroSubtitle?: boolean
    heroButtonText?: boolean
    heroButtonLink?: boolean
    heroButtonColor?: boolean
    heroOverlayColor?: boolean
    heroOverlayOpacity?: boolean
    buttonPrimaryColor?: boolean
    buttonSecondaryColor?: boolean
    buttonTextColor?: boolean
    buttonBorderRadius?: boolean
    buttonPadding?: boolean
    inputBackground?: boolean
    inputBorderColor?: boolean
    inputTextColor?: boolean
    inputFocusColor?: boolean
    inputBorderRadius?: boolean
    cardBackground?: boolean
    cardBorderColor?: boolean
    cardBorderRadius?: boolean
    cardShadow?: boolean
    cardPadding?: boolean
    successColor?: boolean
    warningColor?: boolean
    errorColor?: boolean
    infoColor?: boolean
    metaTitle?: boolean
    metaDescription?: boolean
    metaKeywords?: boolean
    googleAnalyticsId?: boolean
    googleTagManagerId?: boolean
    facebookPixelId?: boolean
  }

  export type SiteThemeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "isActive" | "createdAt" | "updatedAt" | "siteTitle" | "siteDescription" | "siteLogo" | "favicon" | "primaryColor" | "secondaryColor" | "accentColor" | "backgroundColor" | "textColor" | "linkColor" | "bodyFont" | "headingFont" | "baseFontSize" | "headingFontSize" | "containerWidth" | "contentWidth" | "sidebarWidth" | "navbarBackground" | "navbarTextColor" | "navbarLogo" | "navbarHeight" | "navbarPosition" | "navbarShowSearch" | "navbarShowLanguage" | "navbarShowUserMenu" | "navbarShowNotifications" | "footerBackground" | "footerTextColor" | "footerLogo" | "footerCopyright" | "footerShowSocial" | "footerShowNewsletter" | "footerColumns" | "heroDesign" | "heroBackground" | "heroBackgroundImage" | "heroTextColor" | "heroTitle" | "heroSubtitle" | "heroButtonText" | "heroButtonLink" | "heroButtonColor" | "heroOverlayColor" | "heroOverlayOpacity" | "buttonPrimaryColor" | "buttonSecondaryColor" | "buttonTextColor" | "buttonBorderRadius" | "buttonPadding" | "inputBackground" | "inputBorderColor" | "inputTextColor" | "inputFocusColor" | "inputBorderRadius" | "cardBackground" | "cardBorderColor" | "cardBorderRadius" | "cardShadow" | "cardPadding" | "successColor" | "warningColor" | "errorColor" | "infoColor" | "metaTitle" | "metaDescription" | "metaKeywords" | "googleAnalyticsId" | "googleTagManagerId" | "facebookPixelId", ExtArgs["result"]["siteTheme"]>
  export type SiteThemeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    navItems?: boolean | SiteTheme$navItemsArgs<ExtArgs>
    languages?: boolean | SiteTheme$languagesArgs<ExtArgs>
    contentSections?: boolean | SiteTheme$contentSectionsArgs<ExtArgs>
    banners?: boolean | SiteTheme$bannersArgs<ExtArgs>
    socialLinks?: boolean | SiteTheme$socialLinksArgs<ExtArgs>
    contactInfo?: boolean | SiteTheme$contactInfoArgs<ExtArgs>
    _count?: boolean | SiteThemeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteThemeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SiteThemeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SiteThemePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SiteTheme"
    objects: {
      navItems: Prisma.$NavItemPayload<ExtArgs>[]
      languages: Prisma.$LanguagePayload<ExtArgs>[]
      contentSections: Prisma.$ContentSectionPayload<ExtArgs>[]
      banners: Prisma.$BannerPayload<ExtArgs>[]
      socialLinks: Prisma.$SocialLinkPayload<ExtArgs>[]
      contactInfo: Prisma.$ContactInfoPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      siteTitle: string | null
      siteDescription: string | null
      siteLogo: string | null
      favicon: string | null
      primaryColor: string | null
      secondaryColor: string | null
      accentColor: string | null
      backgroundColor: string | null
      textColor: string | null
      linkColor: string | null
      bodyFont: string | null
      headingFont: string | null
      baseFontSize: string | null
      headingFontSize: string | null
      containerWidth: string | null
      contentWidth: string | null
      sidebarWidth: string | null
      navbarBackground: string | null
      navbarTextColor: string | null
      navbarLogo: string | null
      navbarHeight: string | null
      navbarPosition: string | null
      navbarShowSearch: boolean
      navbarShowLanguage: boolean
      navbarShowUserMenu: boolean
      navbarShowNotifications: boolean
      footerBackground: string | null
      footerTextColor: string | null
      footerLogo: string | null
      footerCopyright: string | null
      footerShowSocial: boolean
      footerShowNewsletter: boolean
      footerColumns: Prisma.JsonValue | null
      heroDesign: string | null
      heroBackground: string | null
      heroBackgroundImage: string | null
      heroTextColor: string | null
      heroTitle: string | null
      heroSubtitle: string | null
      heroButtonText: string | null
      heroButtonLink: string | null
      heroButtonColor: string | null
      heroOverlayColor: string | null
      heroOverlayOpacity: number | null
      buttonPrimaryColor: string | null
      buttonSecondaryColor: string | null
      buttonTextColor: string | null
      buttonBorderRadius: string | null
      buttonPadding: string | null
      inputBackground: string | null
      inputBorderColor: string | null
      inputTextColor: string | null
      inputFocusColor: string | null
      inputBorderRadius: string | null
      cardBackground: string | null
      cardBorderColor: string | null
      cardBorderRadius: string | null
      cardShadow: string | null
      cardPadding: string | null
      successColor: string | null
      warningColor: string | null
      errorColor: string | null
      infoColor: string | null
      metaTitle: string | null
      metaDescription: string | null
      metaKeywords: string | null
      googleAnalyticsId: string | null
      googleTagManagerId: string | null
      facebookPixelId: string | null
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
    contentSections<T extends SiteTheme$contentSectionsArgs<ExtArgs> = {}>(args?: Subset<T, SiteTheme$contentSectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    banners<T extends SiteTheme$bannersArgs<ExtArgs> = {}>(args?: Subset<T, SiteTheme$bannersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    socialLinks<T extends SiteTheme$socialLinksArgs<ExtArgs> = {}>(args?: Subset<T, SiteTheme$socialLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactInfo<T extends SiteTheme$contactInfoArgs<ExtArgs> = {}>(args?: Subset<T, SiteTheme$contactInfoArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly siteTitle: FieldRef<"SiteTheme", 'String'>
    readonly siteDescription: FieldRef<"SiteTheme", 'String'>
    readonly siteLogo: FieldRef<"SiteTheme", 'String'>
    readonly favicon: FieldRef<"SiteTheme", 'String'>
    readonly primaryColor: FieldRef<"SiteTheme", 'String'>
    readonly secondaryColor: FieldRef<"SiteTheme", 'String'>
    readonly accentColor: FieldRef<"SiteTheme", 'String'>
    readonly backgroundColor: FieldRef<"SiteTheme", 'String'>
    readonly textColor: FieldRef<"SiteTheme", 'String'>
    readonly linkColor: FieldRef<"SiteTheme", 'String'>
    readonly bodyFont: FieldRef<"SiteTheme", 'String'>
    readonly headingFont: FieldRef<"SiteTheme", 'String'>
    readonly baseFontSize: FieldRef<"SiteTheme", 'String'>
    readonly headingFontSize: FieldRef<"SiteTheme", 'String'>
    readonly containerWidth: FieldRef<"SiteTheme", 'String'>
    readonly contentWidth: FieldRef<"SiteTheme", 'String'>
    readonly sidebarWidth: FieldRef<"SiteTheme", 'String'>
    readonly navbarBackground: FieldRef<"SiteTheme", 'String'>
    readonly navbarTextColor: FieldRef<"SiteTheme", 'String'>
    readonly navbarLogo: FieldRef<"SiteTheme", 'String'>
    readonly navbarHeight: FieldRef<"SiteTheme", 'String'>
    readonly navbarPosition: FieldRef<"SiteTheme", 'String'>
    readonly navbarShowSearch: FieldRef<"SiteTheme", 'Boolean'>
    readonly navbarShowLanguage: FieldRef<"SiteTheme", 'Boolean'>
    readonly navbarShowUserMenu: FieldRef<"SiteTheme", 'Boolean'>
    readonly navbarShowNotifications: FieldRef<"SiteTheme", 'Boolean'>
    readonly footerBackground: FieldRef<"SiteTheme", 'String'>
    readonly footerTextColor: FieldRef<"SiteTheme", 'String'>
    readonly footerLogo: FieldRef<"SiteTheme", 'String'>
    readonly footerCopyright: FieldRef<"SiteTheme", 'String'>
    readonly footerShowSocial: FieldRef<"SiteTheme", 'Boolean'>
    readonly footerShowNewsletter: FieldRef<"SiteTheme", 'Boolean'>
    readonly footerColumns: FieldRef<"SiteTheme", 'Json'>
    readonly heroDesign: FieldRef<"SiteTheme", 'String'>
    readonly heroBackground: FieldRef<"SiteTheme", 'String'>
    readonly heroBackgroundImage: FieldRef<"SiteTheme", 'String'>
    readonly heroTextColor: FieldRef<"SiteTheme", 'String'>
    readonly heroTitle: FieldRef<"SiteTheme", 'String'>
    readonly heroSubtitle: FieldRef<"SiteTheme", 'String'>
    readonly heroButtonText: FieldRef<"SiteTheme", 'String'>
    readonly heroButtonLink: FieldRef<"SiteTheme", 'String'>
    readonly heroButtonColor: FieldRef<"SiteTheme", 'String'>
    readonly heroOverlayColor: FieldRef<"SiteTheme", 'String'>
    readonly heroOverlayOpacity: FieldRef<"SiteTheme", 'Float'>
    readonly buttonPrimaryColor: FieldRef<"SiteTheme", 'String'>
    readonly buttonSecondaryColor: FieldRef<"SiteTheme", 'String'>
    readonly buttonTextColor: FieldRef<"SiteTheme", 'String'>
    readonly buttonBorderRadius: FieldRef<"SiteTheme", 'String'>
    readonly buttonPadding: FieldRef<"SiteTheme", 'String'>
    readonly inputBackground: FieldRef<"SiteTheme", 'String'>
    readonly inputBorderColor: FieldRef<"SiteTheme", 'String'>
    readonly inputTextColor: FieldRef<"SiteTheme", 'String'>
    readonly inputFocusColor: FieldRef<"SiteTheme", 'String'>
    readonly inputBorderRadius: FieldRef<"SiteTheme", 'String'>
    readonly cardBackground: FieldRef<"SiteTheme", 'String'>
    readonly cardBorderColor: FieldRef<"SiteTheme", 'String'>
    readonly cardBorderRadius: FieldRef<"SiteTheme", 'String'>
    readonly cardShadow: FieldRef<"SiteTheme", 'String'>
    readonly cardPadding: FieldRef<"SiteTheme", 'String'>
    readonly successColor: FieldRef<"SiteTheme", 'String'>
    readonly warningColor: FieldRef<"SiteTheme", 'String'>
    readonly errorColor: FieldRef<"SiteTheme", 'String'>
    readonly infoColor: FieldRef<"SiteTheme", 'String'>
    readonly metaTitle: FieldRef<"SiteTheme", 'String'>
    readonly metaDescription: FieldRef<"SiteTheme", 'String'>
    readonly metaKeywords: FieldRef<"SiteTheme", 'String'>
    readonly googleAnalyticsId: FieldRef<"SiteTheme", 'String'>
    readonly googleTagManagerId: FieldRef<"SiteTheme", 'String'>
    readonly facebookPixelId: FieldRef<"SiteTheme", 'String'>
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
   * SiteTheme.contentSections
   */
  export type SiteTheme$contentSectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    where?: ContentSectionWhereInput
    orderBy?: ContentSectionOrderByWithRelationInput | ContentSectionOrderByWithRelationInput[]
    cursor?: ContentSectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContentSectionScalarFieldEnum | ContentSectionScalarFieldEnum[]
  }

  /**
   * SiteTheme.banners
   */
  export type SiteTheme$bannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    cursor?: BannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * SiteTheme.socialLinks
   */
  export type SiteTheme$socialLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    cursor?: SocialLinkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SiteTheme.contactInfo
   */
  export type SiteTheme$contactInfoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    where?: ContactInfoWhereInput
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
   * Model ContentSection
   */

  export type AggregateContentSection = {
    _count: ContentSectionCountAggregateOutputType | null
    _avg: ContentSectionAvgAggregateOutputType | null
    _sum: ContentSectionSumAggregateOutputType | null
    _min: ContentSectionMinAggregateOutputType | null
    _max: ContentSectionMaxAggregateOutputType | null
  }

  export type ContentSectionAvgAggregateOutputType = {
    id: number | null
    order: number | null
    themeId: number | null
  }

  export type ContentSectionSumAggregateOutputType = {
    id: number | null
    order: number | null
    themeId: number | null
  }

  export type ContentSectionMinAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    title: string | null
    subtitle: string | null
    isActive: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    themeId: number | null
  }

  export type ContentSectionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    type: string | null
    title: string | null
    subtitle: string | null
    isActive: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
    themeId: number | null
  }

  export type ContentSectionCountAggregateOutputType = {
    id: number
    name: number
    type: number
    title: number
    subtitle: number
    content: number
    isActive: number
    order: number
    createdAt: number
    updatedAt: number
    themeId: number
    _all: number
  }


  export type ContentSectionAvgAggregateInputType = {
    id?: true
    order?: true
    themeId?: true
  }

  export type ContentSectionSumAggregateInputType = {
    id?: true
    order?: true
    themeId?: true
  }

  export type ContentSectionMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    title?: true
    subtitle?: true
    isActive?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
  }

  export type ContentSectionMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    title?: true
    subtitle?: true
    isActive?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
  }

  export type ContentSectionCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    title?: true
    subtitle?: true
    content?: true
    isActive?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
    _all?: true
  }

  export type ContentSectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentSection to aggregate.
     */
    where?: ContentSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSections to fetch.
     */
    orderBy?: ContentSectionOrderByWithRelationInput | ContentSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContentSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContentSections
    **/
    _count?: true | ContentSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContentSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContentSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContentSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContentSectionMaxAggregateInputType
  }

  export type GetContentSectionAggregateType<T extends ContentSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateContentSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContentSection[P]>
      : GetScalarType<T[P], AggregateContentSection[P]>
  }




  export type ContentSectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContentSectionWhereInput
    orderBy?: ContentSectionOrderByWithAggregationInput | ContentSectionOrderByWithAggregationInput[]
    by: ContentSectionScalarFieldEnum[] | ContentSectionScalarFieldEnum
    having?: ContentSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContentSectionCountAggregateInputType | true
    _avg?: ContentSectionAvgAggregateInputType
    _sum?: ContentSectionSumAggregateInputType
    _min?: ContentSectionMinAggregateInputType
    _max?: ContentSectionMaxAggregateInputType
  }

  export type ContentSectionGroupByOutputType = {
    id: number
    name: string
    type: string
    title: string
    subtitle: string | null
    content: JsonValue
    isActive: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    themeId: number
    _count: ContentSectionCountAggregateOutputType | null
    _avg: ContentSectionAvgAggregateOutputType | null
    _sum: ContentSectionSumAggregateOutputType | null
    _min: ContentSectionMinAggregateOutputType | null
    _max: ContentSectionMaxAggregateOutputType | null
  }

  type GetContentSectionGroupByPayload<T extends ContentSectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContentSectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContentSectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContentSectionGroupByOutputType[P]>
            : GetScalarType<T[P], ContentSectionGroupByOutputType[P]>
        }
      >
    >


  export type ContentSectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    title?: boolean
    subtitle?: boolean
    content?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentSection"]>

  export type ContentSectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    title?: boolean
    subtitle?: boolean
    content?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentSection"]>

  export type ContentSectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    title?: boolean
    subtitle?: boolean
    content?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contentSection"]>

  export type ContentSectionSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    title?: boolean
    subtitle?: boolean
    content?: boolean
    isActive?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
  }

  export type ContentSectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "title" | "subtitle" | "content" | "isActive" | "order" | "createdAt" | "updatedAt" | "themeId", ExtArgs["result"]["contentSection"]>
  export type ContentSectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }
  export type ContentSectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }
  export type ContentSectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }

  export type $ContentSectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContentSection"
    objects: {
      theme: Prisma.$SiteThemePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      type: string
      title: string
      subtitle: string | null
      content: Prisma.JsonValue
      isActive: boolean
      order: number
      createdAt: Date
      updatedAt: Date
      themeId: number
    }, ExtArgs["result"]["contentSection"]>
    composites: {}
  }

  type ContentSectionGetPayload<S extends boolean | null | undefined | ContentSectionDefaultArgs> = $Result.GetResult<Prisma.$ContentSectionPayload, S>

  type ContentSectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContentSectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContentSectionCountAggregateInputType | true
    }

  export interface ContentSectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContentSection'], meta: { name: 'ContentSection' } }
    /**
     * Find zero or one ContentSection that matches the filter.
     * @param {ContentSectionFindUniqueArgs} args - Arguments to find a ContentSection
     * @example
     * // Get one ContentSection
     * const contentSection = await prisma.contentSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContentSectionFindUniqueArgs>(args: SelectSubset<T, ContentSectionFindUniqueArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContentSection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContentSectionFindUniqueOrThrowArgs} args - Arguments to find a ContentSection
     * @example
     * // Get one ContentSection
     * const contentSection = await prisma.contentSection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContentSectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ContentSectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionFindFirstArgs} args - Arguments to find a ContentSection
     * @example
     * // Get one ContentSection
     * const contentSection = await prisma.contentSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContentSectionFindFirstArgs>(args?: SelectSubset<T, ContentSectionFindFirstArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContentSection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionFindFirstOrThrowArgs} args - Arguments to find a ContentSection
     * @example
     * // Get one ContentSection
     * const contentSection = await prisma.contentSection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContentSectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ContentSectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContentSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContentSections
     * const contentSections = await prisma.contentSection.findMany()
     * 
     * // Get first 10 ContentSections
     * const contentSections = await prisma.contentSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contentSectionWithIdOnly = await prisma.contentSection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContentSectionFindManyArgs>(args?: SelectSubset<T, ContentSectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContentSection.
     * @param {ContentSectionCreateArgs} args - Arguments to create a ContentSection.
     * @example
     * // Create one ContentSection
     * const ContentSection = await prisma.contentSection.create({
     *   data: {
     *     // ... data to create a ContentSection
     *   }
     * })
     * 
     */
    create<T extends ContentSectionCreateArgs>(args: SelectSubset<T, ContentSectionCreateArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContentSections.
     * @param {ContentSectionCreateManyArgs} args - Arguments to create many ContentSections.
     * @example
     * // Create many ContentSections
     * const contentSection = await prisma.contentSection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContentSectionCreateManyArgs>(args?: SelectSubset<T, ContentSectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContentSections and returns the data saved in the database.
     * @param {ContentSectionCreateManyAndReturnArgs} args - Arguments to create many ContentSections.
     * @example
     * // Create many ContentSections
     * const contentSection = await prisma.contentSection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContentSections and only return the `id`
     * const contentSectionWithIdOnly = await prisma.contentSection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContentSectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ContentSectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContentSection.
     * @param {ContentSectionDeleteArgs} args - Arguments to delete one ContentSection.
     * @example
     * // Delete one ContentSection
     * const ContentSection = await prisma.contentSection.delete({
     *   where: {
     *     // ... filter to delete one ContentSection
     *   }
     * })
     * 
     */
    delete<T extends ContentSectionDeleteArgs>(args: SelectSubset<T, ContentSectionDeleteArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContentSection.
     * @param {ContentSectionUpdateArgs} args - Arguments to update one ContentSection.
     * @example
     * // Update one ContentSection
     * const contentSection = await prisma.contentSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContentSectionUpdateArgs>(args: SelectSubset<T, ContentSectionUpdateArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContentSections.
     * @param {ContentSectionDeleteManyArgs} args - Arguments to filter ContentSections to delete.
     * @example
     * // Delete a few ContentSections
     * const { count } = await prisma.contentSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContentSectionDeleteManyArgs>(args?: SelectSubset<T, ContentSectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContentSections
     * const contentSection = await prisma.contentSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContentSectionUpdateManyArgs>(args: SelectSubset<T, ContentSectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContentSections and returns the data updated in the database.
     * @param {ContentSectionUpdateManyAndReturnArgs} args - Arguments to update many ContentSections.
     * @example
     * // Update many ContentSections
     * const contentSection = await prisma.contentSection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContentSections and only return the `id`
     * const contentSectionWithIdOnly = await prisma.contentSection.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContentSectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ContentSectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContentSection.
     * @param {ContentSectionUpsertArgs} args - Arguments to update or create a ContentSection.
     * @example
     * // Update or create a ContentSection
     * const contentSection = await prisma.contentSection.upsert({
     *   create: {
     *     // ... data to create a ContentSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContentSection we want to update
     *   }
     * })
     */
    upsert<T extends ContentSectionUpsertArgs>(args: SelectSubset<T, ContentSectionUpsertArgs<ExtArgs>>): Prisma__ContentSectionClient<$Result.GetResult<Prisma.$ContentSectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContentSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionCountArgs} args - Arguments to filter ContentSections to count.
     * @example
     * // Count the number of ContentSections
     * const count = await prisma.contentSection.count({
     *   where: {
     *     // ... the filter for the ContentSections we want to count
     *   }
     * })
    **/
    count<T extends ContentSectionCountArgs>(
      args?: Subset<T, ContentSectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContentSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContentSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContentSectionAggregateArgs>(args: Subset<T, ContentSectionAggregateArgs>): Prisma.PrismaPromise<GetContentSectionAggregateType<T>>

    /**
     * Group by ContentSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContentSectionGroupByArgs} args - Group by arguments.
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
      T extends ContentSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContentSectionGroupByArgs['orderBy'] }
        : { orderBy?: ContentSectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContentSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContentSectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContentSection model
   */
  readonly fields: ContentSectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContentSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContentSectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContentSection model
   */
  interface ContentSectionFieldRefs {
    readonly id: FieldRef<"ContentSection", 'Int'>
    readonly name: FieldRef<"ContentSection", 'String'>
    readonly type: FieldRef<"ContentSection", 'String'>
    readonly title: FieldRef<"ContentSection", 'String'>
    readonly subtitle: FieldRef<"ContentSection", 'String'>
    readonly content: FieldRef<"ContentSection", 'Json'>
    readonly isActive: FieldRef<"ContentSection", 'Boolean'>
    readonly order: FieldRef<"ContentSection", 'Int'>
    readonly createdAt: FieldRef<"ContentSection", 'DateTime'>
    readonly updatedAt: FieldRef<"ContentSection", 'DateTime'>
    readonly themeId: FieldRef<"ContentSection", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ContentSection findUnique
   */
  export type ContentSectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * Filter, which ContentSection to fetch.
     */
    where: ContentSectionWhereUniqueInput
  }

  /**
   * ContentSection findUniqueOrThrow
   */
  export type ContentSectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * Filter, which ContentSection to fetch.
     */
    where: ContentSectionWhereUniqueInput
  }

  /**
   * ContentSection findFirst
   */
  export type ContentSectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * Filter, which ContentSection to fetch.
     */
    where?: ContentSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSections to fetch.
     */
    orderBy?: ContentSectionOrderByWithRelationInput | ContentSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentSections.
     */
    cursor?: ContentSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentSections.
     */
    distinct?: ContentSectionScalarFieldEnum | ContentSectionScalarFieldEnum[]
  }

  /**
   * ContentSection findFirstOrThrow
   */
  export type ContentSectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * Filter, which ContentSection to fetch.
     */
    where?: ContentSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSections to fetch.
     */
    orderBy?: ContentSectionOrderByWithRelationInput | ContentSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContentSections.
     */
    cursor?: ContentSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContentSections.
     */
    distinct?: ContentSectionScalarFieldEnum | ContentSectionScalarFieldEnum[]
  }

  /**
   * ContentSection findMany
   */
  export type ContentSectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * Filter, which ContentSections to fetch.
     */
    where?: ContentSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContentSections to fetch.
     */
    orderBy?: ContentSectionOrderByWithRelationInput | ContentSectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContentSections.
     */
    cursor?: ContentSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContentSections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContentSections.
     */
    skip?: number
    distinct?: ContentSectionScalarFieldEnum | ContentSectionScalarFieldEnum[]
  }

  /**
   * ContentSection create
   */
  export type ContentSectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * The data needed to create a ContentSection.
     */
    data: XOR<ContentSectionCreateInput, ContentSectionUncheckedCreateInput>
  }

  /**
   * ContentSection createMany
   */
  export type ContentSectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContentSections.
     */
    data: ContentSectionCreateManyInput | ContentSectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContentSection createManyAndReturn
   */
  export type ContentSectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * The data used to create many ContentSections.
     */
    data: ContentSectionCreateManyInput | ContentSectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentSection update
   */
  export type ContentSectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * The data needed to update a ContentSection.
     */
    data: XOR<ContentSectionUpdateInput, ContentSectionUncheckedUpdateInput>
    /**
     * Choose, which ContentSection to update.
     */
    where: ContentSectionWhereUniqueInput
  }

  /**
   * ContentSection updateMany
   */
  export type ContentSectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContentSections.
     */
    data: XOR<ContentSectionUpdateManyMutationInput, ContentSectionUncheckedUpdateManyInput>
    /**
     * Filter which ContentSections to update
     */
    where?: ContentSectionWhereInput
    /**
     * Limit how many ContentSections to update.
     */
    limit?: number
  }

  /**
   * ContentSection updateManyAndReturn
   */
  export type ContentSectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * The data used to update ContentSections.
     */
    data: XOR<ContentSectionUpdateManyMutationInput, ContentSectionUncheckedUpdateManyInput>
    /**
     * Filter which ContentSections to update
     */
    where?: ContentSectionWhereInput
    /**
     * Limit how many ContentSections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContentSection upsert
   */
  export type ContentSectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * The filter to search for the ContentSection to update in case it exists.
     */
    where: ContentSectionWhereUniqueInput
    /**
     * In case the ContentSection found by the `where` argument doesn't exist, create a new ContentSection with this data.
     */
    create: XOR<ContentSectionCreateInput, ContentSectionUncheckedCreateInput>
    /**
     * In case the ContentSection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContentSectionUpdateInput, ContentSectionUncheckedUpdateInput>
  }

  /**
   * ContentSection delete
   */
  export type ContentSectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
    /**
     * Filter which ContentSection to delete.
     */
    where: ContentSectionWhereUniqueInput
  }

  /**
   * ContentSection deleteMany
   */
  export type ContentSectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContentSections to delete
     */
    where?: ContentSectionWhereInput
    /**
     * Limit how many ContentSections to delete.
     */
    limit?: number
  }

  /**
   * ContentSection without action
   */
  export type ContentSectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContentSection
     */
    select?: ContentSectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContentSection
     */
    omit?: ContentSectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContentSectionInclude<ExtArgs> | null
  }


  /**
   * Model Banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    id: number | null
    themeId: number | null
  }

  export type BannerSumAggregateOutputType = {
    id: number | null
    themeId: number | null
  }

  export type BannerMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    type: string | null
    backgroundColor: string | null
    textColor: string | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    link: string | null
    linkText: string | null
    position: string | null
    createdAt: Date | null
    updatedAt: Date | null
    themeId: number | null
  }

  export type BannerMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    type: string | null
    backgroundColor: string | null
    textColor: string | null
    isActive: boolean | null
    startDate: Date | null
    endDate: Date | null
    link: string | null
    linkText: string | null
    position: string | null
    createdAt: Date | null
    updatedAt: Date | null
    themeId: number | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    title: number
    content: number
    type: number
    backgroundColor: number
    textColor: number
    isActive: number
    startDate: number
    endDate: number
    link: number
    linkText: number
    position: number
    createdAt: number
    updatedAt: number
    themeId: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    id?: true
    themeId?: true
  }

  export type BannerSumAggregateInputType = {
    id?: true
    themeId?: true
  }

  export type BannerMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    type?: true
    backgroundColor?: true
    textColor?: true
    isActive?: true
    startDate?: true
    endDate?: true
    link?: true
    linkText?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    type?: true
    backgroundColor?: true
    textColor?: true
    isActive?: true
    startDate?: true
    endDate?: true
    link?: true
    linkText?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    type?: true
    backgroundColor?: true
    textColor?: true
    isActive?: true
    startDate?: true
    endDate?: true
    link?: true
    linkText?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banner to aggregate.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type BannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannerWhereInput
    orderBy?: BannerOrderByWithAggregationInput | BannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: BannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: number
    title: string
    content: string
    type: string
    backgroundColor: string
    textColor: string
    isActive: boolean
    startDate: Date | null
    endDate: Date | null
    link: string | null
    linkText: string | null
    position: string
    createdAt: Date
    updatedAt: Date
    themeId: number
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends BannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type BannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    link?: boolean
    linkText?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    link?: boolean
    linkText?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    link?: boolean
    linkText?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["banner"]>

  export type BannerSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    type?: boolean
    backgroundColor?: boolean
    textColor?: boolean
    isActive?: boolean
    startDate?: boolean
    endDate?: boolean
    link?: boolean
    linkText?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
  }

  export type BannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "type" | "backgroundColor" | "textColor" | "isActive" | "startDate" | "endDate" | "link" | "linkText" | "position" | "createdAt" | "updatedAt" | "themeId", ExtArgs["result"]["banner"]>
  export type BannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }
  export type BannerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }
  export type BannerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }

  export type $BannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banner"
    objects: {
      theme: Prisma.$SiteThemePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      type: string
      backgroundColor: string
      textColor: string
      isActive: boolean
      startDate: Date | null
      endDate: Date | null
      link: string | null
      linkText: string | null
      position: string
      createdAt: Date
      updatedAt: Date
      themeId: number
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type BannerGetPayload<S extends boolean | null | undefined | BannerDefaultArgs> = $Result.GetResult<Prisma.$BannerPayload, S>

  type BannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface BannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banner'], meta: { name: 'Banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {BannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannerFindUniqueArgs>(args: SelectSubset<T, BannerFindUniqueArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannerFindUniqueOrThrowArgs>(args: SelectSubset<T, BannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannerFindFirstArgs>(args?: SelectSubset<T, BannerFindFirstArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannerFindFirstOrThrowArgs>(args?: SelectSubset<T, BannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannerFindManyArgs>(args?: SelectSubset<T, BannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {BannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends BannerCreateArgs>(args: SelectSubset<T, BannerCreateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {BannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannerCreateManyArgs>(args?: SelectSubset<T, BannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannerCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannerCreateManyAndReturnArgs>(args?: SelectSubset<T, BannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banner.
     * @param {BannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends BannerDeleteArgs>(args: SelectSubset<T, BannerDeleteArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {BannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannerUpdateArgs>(args: SelectSubset<T, BannerUpdateArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {BannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannerDeleteManyArgs>(args?: SelectSubset<T, BannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannerUpdateManyArgs>(args: SelectSubset<T, BannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners and returns the data updated in the database.
     * @param {BannerUpdateManyAndReturnArgs} args - Arguments to update many Banners.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banners and only return the `id`
     * const bannerWithIdOnly = await prisma.banner.updateManyAndReturn({
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
    updateManyAndReturn<T extends BannerUpdateManyAndReturnArgs>(args: SelectSubset<T, BannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banner.
     * @param {BannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends BannerUpsertArgs>(args: SelectSubset<T, BannerUpsertArgs<ExtArgs>>): Prisma__BannerClient<$Result.GetResult<Prisma.$BannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannerCountArgs>(
      args?: Subset<T, BannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerGroupByArgs} args - Group by arguments.
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
      T extends BannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannerGroupByArgs['orderBy'] }
        : { orderBy?: BannerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banner model
   */
  readonly fields: BannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Banner model
   */
  interface BannerFieldRefs {
    readonly id: FieldRef<"Banner", 'Int'>
    readonly title: FieldRef<"Banner", 'String'>
    readonly content: FieldRef<"Banner", 'String'>
    readonly type: FieldRef<"Banner", 'String'>
    readonly backgroundColor: FieldRef<"Banner", 'String'>
    readonly textColor: FieldRef<"Banner", 'String'>
    readonly isActive: FieldRef<"Banner", 'Boolean'>
    readonly startDate: FieldRef<"Banner", 'DateTime'>
    readonly endDate: FieldRef<"Banner", 'DateTime'>
    readonly link: FieldRef<"Banner", 'String'>
    readonly linkText: FieldRef<"Banner", 'String'>
    readonly position: FieldRef<"Banner", 'String'>
    readonly createdAt: FieldRef<"Banner", 'DateTime'>
    readonly updatedAt: FieldRef<"Banner", 'DateTime'>
    readonly themeId: FieldRef<"Banner", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Banner findUnique
   */
  export type BannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findUniqueOrThrow
   */
  export type BannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner findFirst
   */
  export type BannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findFirstOrThrow
   */
  export type BannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banner to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner findMany
   */
  export type BannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannerOrderByWithRelationInput | BannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * Banner create
   */
  export type BannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to create a Banner.
     */
    data: XOR<BannerCreateInput, BannerUncheckedCreateInput>
  }

  /**
   * Banner createMany
   */
  export type BannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banner createManyAndReturn
   */
  export type BannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannerCreateManyInput | BannerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Banner update
   */
  export type BannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The data needed to update a Banner.
     */
    data: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
    /**
     * Choose, which Banner to update.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner updateMany
   */
  export type BannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banner updateManyAndReturn
   */
  export type BannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * The data used to update Banners.
     */
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Banner upsert
   */
  export type BannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * The filter to search for the Banner to update in case it exists.
     */
    where: BannerWhereUniqueInput
    /**
     * In case the Banner found by the `where` argument doesn't exist, create a new Banner with this data.
     */
    create: XOR<BannerCreateInput, BannerUncheckedCreateInput>
    /**
     * In case the Banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannerUpdateInput, BannerUncheckedUpdateInput>
  }

  /**
   * Banner delete
   */
  export type BannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
    /**
     * Filter which Banner to delete.
     */
    where: BannerWhereUniqueInput
  }

  /**
   * Banner deleteMany
   */
  export type BannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannerWhereInput
    /**
     * Limit how many Banners to delete.
     */
    limit?: number
  }

  /**
   * Banner without action
   */
  export type BannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banner
     */
    select?: BannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banner
     */
    omit?: BannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannerInclude<ExtArgs> | null
  }


  /**
   * Model SocialLink
   */

  export type AggregateSocialLink = {
    _count: SocialLinkCountAggregateOutputType | null
    _avg: SocialLinkAvgAggregateOutputType | null
    _sum: SocialLinkSumAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  export type SocialLinkAvgAggregateOutputType = {
    id: number | null
    themeId: number | null
  }

  export type SocialLinkSumAggregateOutputType = {
    id: number | null
    themeId: number | null
  }

  export type SocialLinkMinAggregateOutputType = {
    id: number | null
    platform: string | null
    url: string | null
    icon: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    themeId: number | null
  }

  export type SocialLinkMaxAggregateOutputType = {
    id: number | null
    platform: string | null
    url: string | null
    icon: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    themeId: number | null
  }

  export type SocialLinkCountAggregateOutputType = {
    id: number
    platform: number
    url: number
    icon: number
    isActive: number
    createdAt: number
    updatedAt: number
    themeId: number
    _all: number
  }


  export type SocialLinkAvgAggregateInputType = {
    id?: true
    themeId?: true
  }

  export type SocialLinkSumAggregateInputType = {
    id?: true
    themeId?: true
  }

  export type SocialLinkMinAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    icon?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
  }

  export type SocialLinkMaxAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    icon?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
  }

  export type SocialLinkCountAggregateInputType = {
    id?: true
    platform?: true
    url?: true
    icon?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
    _all?: true
  }

  export type SocialLinkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLink to aggregate.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SocialLinks
    **/
    _count?: true | SocialLinkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialLinkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialLinkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialLinkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialLinkMaxAggregateInputType
  }

  export type GetSocialLinkAggregateType<T extends SocialLinkAggregateArgs> = {
        [P in keyof T & keyof AggregateSocialLink]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocialLink[P]>
      : GetScalarType<T[P], AggregateSocialLink[P]>
  }




  export type SocialLinkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialLinkWhereInput
    orderBy?: SocialLinkOrderByWithAggregationInput | SocialLinkOrderByWithAggregationInput[]
    by: SocialLinkScalarFieldEnum[] | SocialLinkScalarFieldEnum
    having?: SocialLinkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialLinkCountAggregateInputType | true
    _avg?: SocialLinkAvgAggregateInputType
    _sum?: SocialLinkSumAggregateInputType
    _min?: SocialLinkMinAggregateInputType
    _max?: SocialLinkMaxAggregateInputType
  }

  export type SocialLinkGroupByOutputType = {
    id: number
    platform: string
    url: string
    icon: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    themeId: number
    _count: SocialLinkCountAggregateOutputType | null
    _avg: SocialLinkAvgAggregateOutputType | null
    _sum: SocialLinkSumAggregateOutputType | null
    _min: SocialLinkMinAggregateOutputType | null
    _max: SocialLinkMaxAggregateOutputType | null
  }

  type GetSocialLinkGroupByPayload<T extends SocialLinkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialLinkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialLinkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
            : GetScalarType<T[P], SocialLinkGroupByOutputType[P]>
        }
      >
    >


  export type SocialLinkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    icon?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    icon?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    platform?: boolean
    url?: boolean
    icon?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["socialLink"]>

  export type SocialLinkSelectScalar = {
    id?: boolean
    platform?: boolean
    url?: boolean
    icon?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
  }

  export type SocialLinkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "platform" | "url" | "icon" | "isActive" | "createdAt" | "updatedAt" | "themeId", ExtArgs["result"]["socialLink"]>
  export type SocialLinkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }
  export type SocialLinkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }
  export type SocialLinkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }

  export type $SocialLinkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SocialLink"
    objects: {
      theme: Prisma.$SiteThemePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      platform: string
      url: string
      icon: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      themeId: number
    }, ExtArgs["result"]["socialLink"]>
    composites: {}
  }

  type SocialLinkGetPayload<S extends boolean | null | undefined | SocialLinkDefaultArgs> = $Result.GetResult<Prisma.$SocialLinkPayload, S>

  type SocialLinkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialLinkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialLinkCountAggregateInputType | true
    }

  export interface SocialLinkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SocialLink'], meta: { name: 'SocialLink' } }
    /**
     * Find zero or one SocialLink that matches the filter.
     * @param {SocialLinkFindUniqueArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialLinkFindUniqueArgs>(args: SelectSubset<T, SocialLinkFindUniqueArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SocialLink that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialLinkFindUniqueOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialLinkFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialLinkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialLinkFindFirstArgs>(args?: SelectSubset<T, SocialLinkFindFirstArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SocialLink that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindFirstOrThrowArgs} args - Arguments to find a SocialLink
     * @example
     * // Get one SocialLink
     * const socialLink = await prisma.socialLink.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialLinkFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialLinkFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SocialLinks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SocialLinks
     * const socialLinks = await prisma.socialLink.findMany()
     * 
     * // Get first 10 SocialLinks
     * const socialLinks = await prisma.socialLink.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialLinkFindManyArgs>(args?: SelectSubset<T, SocialLinkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SocialLink.
     * @param {SocialLinkCreateArgs} args - Arguments to create a SocialLink.
     * @example
     * // Create one SocialLink
     * const SocialLink = await prisma.socialLink.create({
     *   data: {
     *     // ... data to create a SocialLink
     *   }
     * })
     * 
     */
    create<T extends SocialLinkCreateArgs>(args: SelectSubset<T, SocialLinkCreateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SocialLinks.
     * @param {SocialLinkCreateManyArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialLinkCreateManyArgs>(args?: SelectSubset<T, SocialLinkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SocialLinks and returns the data saved in the database.
     * @param {SocialLinkCreateManyAndReturnArgs} args - Arguments to create many SocialLinks.
     * @example
     * // Create many SocialLinks
     * const socialLink = await prisma.socialLink.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialLinkCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialLinkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SocialLink.
     * @param {SocialLinkDeleteArgs} args - Arguments to delete one SocialLink.
     * @example
     * // Delete one SocialLink
     * const SocialLink = await prisma.socialLink.delete({
     *   where: {
     *     // ... filter to delete one SocialLink
     *   }
     * })
     * 
     */
    delete<T extends SocialLinkDeleteArgs>(args: SelectSubset<T, SocialLinkDeleteArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SocialLink.
     * @param {SocialLinkUpdateArgs} args - Arguments to update one SocialLink.
     * @example
     * // Update one SocialLink
     * const socialLink = await prisma.socialLink.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialLinkUpdateArgs>(args: SelectSubset<T, SocialLinkUpdateArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SocialLinks.
     * @param {SocialLinkDeleteManyArgs} args - Arguments to filter SocialLinks to delete.
     * @example
     * // Delete a few SocialLinks
     * const { count } = await prisma.socialLink.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialLinkDeleteManyArgs>(args?: SelectSubset<T, SocialLinkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialLinkUpdateManyArgs>(args: SelectSubset<T, SocialLinkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SocialLinks and returns the data updated in the database.
     * @param {SocialLinkUpdateManyAndReturnArgs} args - Arguments to update many SocialLinks.
     * @example
     * // Update many SocialLinks
     * const socialLink = await prisma.socialLink.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SocialLinks and only return the `id`
     * const socialLinkWithIdOnly = await prisma.socialLink.updateManyAndReturn({
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
    updateManyAndReturn<T extends SocialLinkUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialLinkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SocialLink.
     * @param {SocialLinkUpsertArgs} args - Arguments to update or create a SocialLink.
     * @example
     * // Update or create a SocialLink
     * const socialLink = await prisma.socialLink.upsert({
     *   create: {
     *     // ... data to create a SocialLink
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SocialLink we want to update
     *   }
     * })
     */
    upsert<T extends SocialLinkUpsertArgs>(args: SelectSubset<T, SocialLinkUpsertArgs<ExtArgs>>): Prisma__SocialLinkClient<$Result.GetResult<Prisma.$SocialLinkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SocialLinks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkCountArgs} args - Arguments to filter SocialLinks to count.
     * @example
     * // Count the number of SocialLinks
     * const count = await prisma.socialLink.count({
     *   where: {
     *     // ... the filter for the SocialLinks we want to count
     *   }
     * })
    **/
    count<T extends SocialLinkCountArgs>(
      args?: Subset<T, SocialLinkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialLinkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialLinkAggregateArgs>(args: Subset<T, SocialLinkAggregateArgs>): Prisma.PrismaPromise<GetSocialLinkAggregateType<T>>

    /**
     * Group by SocialLink.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialLinkGroupByArgs} args - Group by arguments.
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
      T extends SocialLinkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialLinkGroupByArgs['orderBy'] }
        : { orderBy?: SocialLinkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialLinkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialLinkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SocialLink model
   */
  readonly fields: SocialLinkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SocialLink.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialLinkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SocialLink model
   */
  interface SocialLinkFieldRefs {
    readonly id: FieldRef<"SocialLink", 'Int'>
    readonly platform: FieldRef<"SocialLink", 'String'>
    readonly url: FieldRef<"SocialLink", 'String'>
    readonly icon: FieldRef<"SocialLink", 'String'>
    readonly isActive: FieldRef<"SocialLink", 'Boolean'>
    readonly createdAt: FieldRef<"SocialLink", 'DateTime'>
    readonly updatedAt: FieldRef<"SocialLink", 'DateTime'>
    readonly themeId: FieldRef<"SocialLink", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SocialLink findUnique
   */
  export type SocialLinkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findUniqueOrThrow
   */
  export type SocialLinkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink findFirst
   */
  export type SocialLinkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findFirstOrThrow
   */
  export type SocialLinkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLink to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SocialLinks.
     */
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink findMany
   */
  export type SocialLinkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter, which SocialLinks to fetch.
     */
    where?: SocialLinkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SocialLinks to fetch.
     */
    orderBy?: SocialLinkOrderByWithRelationInput | SocialLinkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SocialLinks.
     */
    cursor?: SocialLinkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SocialLinks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SocialLinks.
     */
    skip?: number
    distinct?: SocialLinkScalarFieldEnum | SocialLinkScalarFieldEnum[]
  }

  /**
   * SocialLink create
   */
  export type SocialLinkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to create a SocialLink.
     */
    data: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
  }

  /**
   * SocialLink createMany
   */
  export type SocialLinkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SocialLink createManyAndReturn
   */
  export type SocialLinkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to create many SocialLinks.
     */
    data: SocialLinkCreateManyInput | SocialLinkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLink update
   */
  export type SocialLinkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The data needed to update a SocialLink.
     */
    data: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
    /**
     * Choose, which SocialLink to update.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink updateMany
   */
  export type SocialLinkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
  }

  /**
   * SocialLink updateManyAndReturn
   */
  export type SocialLinkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * The data used to update SocialLinks.
     */
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyInput>
    /**
     * Filter which SocialLinks to update
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SocialLink upsert
   */
  export type SocialLinkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * The filter to search for the SocialLink to update in case it exists.
     */
    where: SocialLinkWhereUniqueInput
    /**
     * In case the SocialLink found by the `where` argument doesn't exist, create a new SocialLink with this data.
     */
    create: XOR<SocialLinkCreateInput, SocialLinkUncheckedCreateInput>
    /**
     * In case the SocialLink was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialLinkUpdateInput, SocialLinkUncheckedUpdateInput>
  }

  /**
   * SocialLink delete
   */
  export type SocialLinkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
    /**
     * Filter which SocialLink to delete.
     */
    where: SocialLinkWhereUniqueInput
  }

  /**
   * SocialLink deleteMany
   */
  export type SocialLinkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SocialLinks to delete
     */
    where?: SocialLinkWhereInput
    /**
     * Limit how many SocialLinks to delete.
     */
    limit?: number
  }

  /**
   * SocialLink without action
   */
  export type SocialLinkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SocialLink
     */
    select?: SocialLinkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SocialLink
     */
    omit?: SocialLinkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SocialLinkInclude<ExtArgs> | null
  }


  /**
   * Model ContactInfo
   */

  export type AggregateContactInfo = {
    _count: ContactInfoCountAggregateOutputType | null
    _avg: ContactInfoAvgAggregateOutputType | null
    _sum: ContactInfoSumAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  export type ContactInfoAvgAggregateOutputType = {
    id: number | null
    themeId: number | null
  }

  export type ContactInfoSumAggregateOutputType = {
    id: number | null
    themeId: number | null
  }

  export type ContactInfoMinAggregateOutputType = {
    id: number | null
    email: string | null
    phone: string | null
    address: string | null
    workingHours: string | null
    createdAt: Date | null
    updatedAt: Date | null
    themeId: number | null
  }

  export type ContactInfoMaxAggregateOutputType = {
    id: number | null
    email: string | null
    phone: string | null
    address: string | null
    workingHours: string | null
    createdAt: Date | null
    updatedAt: Date | null
    themeId: number | null
  }

  export type ContactInfoCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    address: number
    workingHours: number
    createdAt: number
    updatedAt: number
    themeId: number
    _all: number
  }


  export type ContactInfoAvgAggregateInputType = {
    id?: true
    themeId?: true
  }

  export type ContactInfoSumAggregateInputType = {
    id?: true
    themeId?: true
  }

  export type ContactInfoMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    address?: true
    workingHours?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
  }

  export type ContactInfoMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    address?: true
    workingHours?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
  }

  export type ContactInfoCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    address?: true
    workingHours?: true
    createdAt?: true
    updatedAt?: true
    themeId?: true
    _all?: true
  }

  export type ContactInfoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfo to aggregate.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactInfos
    **/
    _count?: true | ContactInfoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactInfoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactInfoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactInfoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactInfoMaxAggregateInputType
  }

  export type GetContactInfoAggregateType<T extends ContactInfoAggregateArgs> = {
        [P in keyof T & keyof AggregateContactInfo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactInfo[P]>
      : GetScalarType<T[P], AggregateContactInfo[P]>
  }




  export type ContactInfoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactInfoWhereInput
    orderBy?: ContactInfoOrderByWithAggregationInput | ContactInfoOrderByWithAggregationInput[]
    by: ContactInfoScalarFieldEnum[] | ContactInfoScalarFieldEnum
    having?: ContactInfoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactInfoCountAggregateInputType | true
    _avg?: ContactInfoAvgAggregateInputType
    _sum?: ContactInfoSumAggregateInputType
    _min?: ContactInfoMinAggregateInputType
    _max?: ContactInfoMaxAggregateInputType
  }

  export type ContactInfoGroupByOutputType = {
    id: number
    email: string
    phone: string | null
    address: string | null
    workingHours: string | null
    createdAt: Date
    updatedAt: Date
    themeId: number
    _count: ContactInfoCountAggregateOutputType | null
    _avg: ContactInfoAvgAggregateOutputType | null
    _sum: ContactInfoSumAggregateOutputType | null
    _min: ContactInfoMinAggregateOutputType | null
    _max: ContactInfoMaxAggregateOutputType | null
  }

  type GetContactInfoGroupByPayload<T extends ContactInfoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactInfoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactInfoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
            : GetScalarType<T[P], ContactInfoGroupByOutputType[P]>
        }
      >
    >


  export type ContactInfoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    workingHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    workingHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    workingHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactInfo"]>

  export type ContactInfoSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    workingHours?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    themeId?: boolean
  }

  export type ContactInfoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "address" | "workingHours" | "createdAt" | "updatedAt" | "themeId", ExtArgs["result"]["contactInfo"]>
  export type ContactInfoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }
  export type ContactInfoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }
  export type ContactInfoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    theme?: boolean | SiteThemeDefaultArgs<ExtArgs>
  }

  export type $ContactInfoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactInfo"
    objects: {
      theme: Prisma.$SiteThemePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      phone: string | null
      address: string | null
      workingHours: string | null
      createdAt: Date
      updatedAt: Date
      themeId: number
    }, ExtArgs["result"]["contactInfo"]>
    composites: {}
  }

  type ContactInfoGetPayload<S extends boolean | null | undefined | ContactInfoDefaultArgs> = $Result.GetResult<Prisma.$ContactInfoPayload, S>

  type ContactInfoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactInfoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactInfoCountAggregateInputType | true
    }

  export interface ContactInfoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactInfo'], meta: { name: 'ContactInfo' } }
    /**
     * Find zero or one ContactInfo that matches the filter.
     * @param {ContactInfoFindUniqueArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactInfoFindUniqueArgs>(args: SelectSubset<T, ContactInfoFindUniqueArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactInfo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactInfoFindUniqueOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactInfoFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactInfoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactInfoFindFirstArgs>(args?: SelectSubset<T, ContactInfoFindFirstArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactInfo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindFirstOrThrowArgs} args - Arguments to find a ContactInfo
     * @example
     * // Get one ContactInfo
     * const contactInfo = await prisma.contactInfo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactInfoFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactInfoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactInfos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany()
     * 
     * // Get first 10 ContactInfos
     * const contactInfos = await prisma.contactInfo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactInfoFindManyArgs>(args?: SelectSubset<T, ContactInfoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactInfo.
     * @param {ContactInfoCreateArgs} args - Arguments to create a ContactInfo.
     * @example
     * // Create one ContactInfo
     * const ContactInfo = await prisma.contactInfo.create({
     *   data: {
     *     // ... data to create a ContactInfo
     *   }
     * })
     * 
     */
    create<T extends ContactInfoCreateArgs>(args: SelectSubset<T, ContactInfoCreateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactInfos.
     * @param {ContactInfoCreateManyArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactInfoCreateManyArgs>(args?: SelectSubset<T, ContactInfoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactInfos and returns the data saved in the database.
     * @param {ContactInfoCreateManyAndReturnArgs} args - Arguments to create many ContactInfos.
     * @example
     * // Create many ContactInfos
     * const contactInfo = await prisma.contactInfo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactInfoCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactInfoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactInfo.
     * @param {ContactInfoDeleteArgs} args - Arguments to delete one ContactInfo.
     * @example
     * // Delete one ContactInfo
     * const ContactInfo = await prisma.contactInfo.delete({
     *   where: {
     *     // ... filter to delete one ContactInfo
     *   }
     * })
     * 
     */
    delete<T extends ContactInfoDeleteArgs>(args: SelectSubset<T, ContactInfoDeleteArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactInfo.
     * @param {ContactInfoUpdateArgs} args - Arguments to update one ContactInfo.
     * @example
     * // Update one ContactInfo
     * const contactInfo = await prisma.contactInfo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactInfoUpdateArgs>(args: SelectSubset<T, ContactInfoUpdateArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactInfos.
     * @param {ContactInfoDeleteManyArgs} args - Arguments to filter ContactInfos to delete.
     * @example
     * // Delete a few ContactInfos
     * const { count } = await prisma.contactInfo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactInfoDeleteManyArgs>(args?: SelectSubset<T, ContactInfoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactInfoUpdateManyArgs>(args: SelectSubset<T, ContactInfoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactInfos and returns the data updated in the database.
     * @param {ContactInfoUpdateManyAndReturnArgs} args - Arguments to update many ContactInfos.
     * @example
     * // Update many ContactInfos
     * const contactInfo = await prisma.contactInfo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactInfos and only return the `id`
     * const contactInfoWithIdOnly = await prisma.contactInfo.updateManyAndReturn({
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
    updateManyAndReturn<T extends ContactInfoUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactInfoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactInfo.
     * @param {ContactInfoUpsertArgs} args - Arguments to update or create a ContactInfo.
     * @example
     * // Update or create a ContactInfo
     * const contactInfo = await prisma.contactInfo.upsert({
     *   create: {
     *     // ... data to create a ContactInfo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactInfo we want to update
     *   }
     * })
     */
    upsert<T extends ContactInfoUpsertArgs>(args: SelectSubset<T, ContactInfoUpsertArgs<ExtArgs>>): Prisma__ContactInfoClient<$Result.GetResult<Prisma.$ContactInfoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactInfos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoCountArgs} args - Arguments to filter ContactInfos to count.
     * @example
     * // Count the number of ContactInfos
     * const count = await prisma.contactInfo.count({
     *   where: {
     *     // ... the filter for the ContactInfos we want to count
     *   }
     * })
    **/
    count<T extends ContactInfoCountArgs>(
      args?: Subset<T, ContactInfoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactInfoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactInfoAggregateArgs>(args: Subset<T, ContactInfoAggregateArgs>): Prisma.PrismaPromise<GetContactInfoAggregateType<T>>

    /**
     * Group by ContactInfo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactInfoGroupByArgs} args - Group by arguments.
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
      T extends ContactInfoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactInfoGroupByArgs['orderBy'] }
        : { orderBy?: ContactInfoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactInfoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactInfoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactInfo model
   */
  readonly fields: ContactInfoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactInfo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactInfoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ContactInfo model
   */
  interface ContactInfoFieldRefs {
    readonly id: FieldRef<"ContactInfo", 'Int'>
    readonly email: FieldRef<"ContactInfo", 'String'>
    readonly phone: FieldRef<"ContactInfo", 'String'>
    readonly address: FieldRef<"ContactInfo", 'String'>
    readonly workingHours: FieldRef<"ContactInfo", 'String'>
    readonly createdAt: FieldRef<"ContactInfo", 'DateTime'>
    readonly updatedAt: FieldRef<"ContactInfo", 'DateTime'>
    readonly themeId: FieldRef<"ContactInfo", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ContactInfo findUnique
   */
  export type ContactInfoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findUniqueOrThrow
   */
  export type ContactInfoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo findFirst
   */
  export type ContactInfoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findFirstOrThrow
   */
  export type ContactInfoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfo to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactInfos.
     */
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo findMany
   */
  export type ContactInfoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter, which ContactInfos to fetch.
     */
    where?: ContactInfoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactInfos to fetch.
     */
    orderBy?: ContactInfoOrderByWithRelationInput | ContactInfoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactInfos.
     */
    cursor?: ContactInfoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactInfos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactInfos.
     */
    skip?: number
    distinct?: ContactInfoScalarFieldEnum | ContactInfoScalarFieldEnum[]
  }

  /**
   * ContactInfo create
   */
  export type ContactInfoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactInfo.
     */
    data: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
  }

  /**
   * ContactInfo createMany
   */
  export type ContactInfoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ContactInfo createManyAndReturn
   */
  export type ContactInfoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to create many ContactInfos.
     */
    data: ContactInfoCreateManyInput | ContactInfoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactInfo update
   */
  export type ContactInfoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactInfo.
     */
    data: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
    /**
     * Choose, which ContactInfo to update.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo updateMany
   */
  export type ContactInfoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
  }

  /**
   * ContactInfo updateManyAndReturn
   */
  export type ContactInfoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * The data used to update ContactInfos.
     */
    data: XOR<ContactInfoUpdateManyMutationInput, ContactInfoUncheckedUpdateManyInput>
    /**
     * Filter which ContactInfos to update
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactInfo upsert
   */
  export type ContactInfoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactInfo to update in case it exists.
     */
    where: ContactInfoWhereUniqueInput
    /**
     * In case the ContactInfo found by the `where` argument doesn't exist, create a new ContactInfo with this data.
     */
    create: XOR<ContactInfoCreateInput, ContactInfoUncheckedCreateInput>
    /**
     * In case the ContactInfo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactInfoUpdateInput, ContactInfoUncheckedUpdateInput>
  }

  /**
   * ContactInfo delete
   */
  export type ContactInfoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
    /**
     * Filter which ContactInfo to delete.
     */
    where: ContactInfoWhereUniqueInput
  }

  /**
   * ContactInfo deleteMany
   */
  export type ContactInfoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactInfos to delete
     */
    where?: ContactInfoWhereInput
    /**
     * Limit how many ContactInfos to delete.
     */
    limit?: number
  }

  /**
   * ContactInfo without action
   */
  export type ContactInfoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactInfo
     */
    select?: ContactInfoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactInfo
     */
    omit?: ContactInfoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactInfoInclude<ExtArgs> | null
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
    siteTitle: 'siteTitle',
    siteDescription: 'siteDescription',
    siteLogo: 'siteLogo',
    favicon: 'favicon',
    primaryColor: 'primaryColor',
    secondaryColor: 'secondaryColor',
    accentColor: 'accentColor',
    backgroundColor: 'backgroundColor',
    textColor: 'textColor',
    linkColor: 'linkColor',
    bodyFont: 'bodyFont',
    headingFont: 'headingFont',
    baseFontSize: 'baseFontSize',
    headingFontSize: 'headingFontSize',
    containerWidth: 'containerWidth',
    contentWidth: 'contentWidth',
    sidebarWidth: 'sidebarWidth',
    navbarBackground: 'navbarBackground',
    navbarTextColor: 'navbarTextColor',
    navbarLogo: 'navbarLogo',
    navbarHeight: 'navbarHeight',
    navbarPosition: 'navbarPosition',
    navbarShowSearch: 'navbarShowSearch',
    navbarShowLanguage: 'navbarShowLanguage',
    navbarShowUserMenu: 'navbarShowUserMenu',
    navbarShowNotifications: 'navbarShowNotifications',
    footerBackground: 'footerBackground',
    footerTextColor: 'footerTextColor',
    footerLogo: 'footerLogo',
    footerCopyright: 'footerCopyright',
    footerShowSocial: 'footerShowSocial',
    footerShowNewsletter: 'footerShowNewsletter',
    footerColumns: 'footerColumns',
    heroDesign: 'heroDesign',
    heroBackground: 'heroBackground',
    heroBackgroundImage: 'heroBackgroundImage',
    heroTextColor: 'heroTextColor',
    heroTitle: 'heroTitle',
    heroSubtitle: 'heroSubtitle',
    heroButtonText: 'heroButtonText',
    heroButtonLink: 'heroButtonLink',
    heroButtonColor: 'heroButtonColor',
    heroOverlayColor: 'heroOverlayColor',
    heroOverlayOpacity: 'heroOverlayOpacity',
    buttonPrimaryColor: 'buttonPrimaryColor',
    buttonSecondaryColor: 'buttonSecondaryColor',
    buttonTextColor: 'buttonTextColor',
    buttonBorderRadius: 'buttonBorderRadius',
    buttonPadding: 'buttonPadding',
    inputBackground: 'inputBackground',
    inputBorderColor: 'inputBorderColor',
    inputTextColor: 'inputTextColor',
    inputFocusColor: 'inputFocusColor',
    inputBorderRadius: 'inputBorderRadius',
    cardBackground: 'cardBackground',
    cardBorderColor: 'cardBorderColor',
    cardBorderRadius: 'cardBorderRadius',
    cardShadow: 'cardShadow',
    cardPadding: 'cardPadding',
    successColor: 'successColor',
    warningColor: 'warningColor',
    errorColor: 'errorColor',
    infoColor: 'infoColor',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    metaKeywords: 'metaKeywords',
    googleAnalyticsId: 'googleAnalyticsId',
    googleTagManagerId: 'googleTagManagerId',
    facebookPixelId: 'facebookPixelId'
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


  export const ContentSectionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    title: 'title',
    subtitle: 'subtitle',
    content: 'content',
    isActive: 'isActive',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    themeId: 'themeId'
  };

  export type ContentSectionScalarFieldEnum = (typeof ContentSectionScalarFieldEnum)[keyof typeof ContentSectionScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    type: 'type',
    backgroundColor: 'backgroundColor',
    textColor: 'textColor',
    isActive: 'isActive',
    startDate: 'startDate',
    endDate: 'endDate',
    link: 'link',
    linkText: 'linkText',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    themeId: 'themeId'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const SocialLinkScalarFieldEnum: {
    id: 'id',
    platform: 'platform',
    url: 'url',
    icon: 'icon',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    themeId: 'themeId'
  };

  export type SocialLinkScalarFieldEnum = (typeof SocialLinkScalarFieldEnum)[keyof typeof SocialLinkScalarFieldEnum]


  export const ContactInfoScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    address: 'address',
    workingHours: 'workingHours',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    themeId: 'themeId'
  };

  export type ContactInfoScalarFieldEnum = (typeof ContactInfoScalarFieldEnum)[keyof typeof ContactInfoScalarFieldEnum]


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


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    
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
    siteTitle?: StringNullableFilter<"SiteTheme"> | string | null
    siteDescription?: StringNullableFilter<"SiteTheme"> | string | null
    siteLogo?: StringNullableFilter<"SiteTheme"> | string | null
    favicon?: StringNullableFilter<"SiteTheme"> | string | null
    primaryColor?: StringNullableFilter<"SiteTheme"> | string | null
    secondaryColor?: StringNullableFilter<"SiteTheme"> | string | null
    accentColor?: StringNullableFilter<"SiteTheme"> | string | null
    backgroundColor?: StringNullableFilter<"SiteTheme"> | string | null
    textColor?: StringNullableFilter<"SiteTheme"> | string | null
    linkColor?: StringNullableFilter<"SiteTheme"> | string | null
    bodyFont?: StringNullableFilter<"SiteTheme"> | string | null
    headingFont?: StringNullableFilter<"SiteTheme"> | string | null
    baseFontSize?: StringNullableFilter<"SiteTheme"> | string | null
    headingFontSize?: StringNullableFilter<"SiteTheme"> | string | null
    containerWidth?: StringNullableFilter<"SiteTheme"> | string | null
    contentWidth?: StringNullableFilter<"SiteTheme"> | string | null
    sidebarWidth?: StringNullableFilter<"SiteTheme"> | string | null
    navbarBackground?: StringNullableFilter<"SiteTheme"> | string | null
    navbarTextColor?: StringNullableFilter<"SiteTheme"> | string | null
    navbarLogo?: StringNullableFilter<"SiteTheme"> | string | null
    navbarHeight?: StringNullableFilter<"SiteTheme"> | string | null
    navbarPosition?: StringNullableFilter<"SiteTheme"> | string | null
    navbarShowSearch?: BoolFilter<"SiteTheme"> | boolean
    navbarShowLanguage?: BoolFilter<"SiteTheme"> | boolean
    navbarShowUserMenu?: BoolFilter<"SiteTheme"> | boolean
    navbarShowNotifications?: BoolFilter<"SiteTheme"> | boolean
    footerBackground?: StringNullableFilter<"SiteTheme"> | string | null
    footerTextColor?: StringNullableFilter<"SiteTheme"> | string | null
    footerLogo?: StringNullableFilter<"SiteTheme"> | string | null
    footerCopyright?: StringNullableFilter<"SiteTheme"> | string | null
    footerShowSocial?: BoolFilter<"SiteTheme"> | boolean
    footerShowNewsletter?: BoolFilter<"SiteTheme"> | boolean
    footerColumns?: JsonNullableFilter<"SiteTheme">
    heroDesign?: StringNullableFilter<"SiteTheme"> | string | null
    heroBackground?: StringNullableFilter<"SiteTheme"> | string | null
    heroBackgroundImage?: StringNullableFilter<"SiteTheme"> | string | null
    heroTextColor?: StringNullableFilter<"SiteTheme"> | string | null
    heroTitle?: StringNullableFilter<"SiteTheme"> | string | null
    heroSubtitle?: StringNullableFilter<"SiteTheme"> | string | null
    heroButtonText?: StringNullableFilter<"SiteTheme"> | string | null
    heroButtonLink?: StringNullableFilter<"SiteTheme"> | string | null
    heroButtonColor?: StringNullableFilter<"SiteTheme"> | string | null
    heroOverlayColor?: StringNullableFilter<"SiteTheme"> | string | null
    heroOverlayOpacity?: FloatNullableFilter<"SiteTheme"> | number | null
    buttonPrimaryColor?: StringNullableFilter<"SiteTheme"> | string | null
    buttonSecondaryColor?: StringNullableFilter<"SiteTheme"> | string | null
    buttonTextColor?: StringNullableFilter<"SiteTheme"> | string | null
    buttonBorderRadius?: StringNullableFilter<"SiteTheme"> | string | null
    buttonPadding?: StringNullableFilter<"SiteTheme"> | string | null
    inputBackground?: StringNullableFilter<"SiteTheme"> | string | null
    inputBorderColor?: StringNullableFilter<"SiteTheme"> | string | null
    inputTextColor?: StringNullableFilter<"SiteTheme"> | string | null
    inputFocusColor?: StringNullableFilter<"SiteTheme"> | string | null
    inputBorderRadius?: StringNullableFilter<"SiteTheme"> | string | null
    cardBackground?: StringNullableFilter<"SiteTheme"> | string | null
    cardBorderColor?: StringNullableFilter<"SiteTheme"> | string | null
    cardBorderRadius?: StringNullableFilter<"SiteTheme"> | string | null
    cardShadow?: StringNullableFilter<"SiteTheme"> | string | null
    cardPadding?: StringNullableFilter<"SiteTheme"> | string | null
    successColor?: StringNullableFilter<"SiteTheme"> | string | null
    warningColor?: StringNullableFilter<"SiteTheme"> | string | null
    errorColor?: StringNullableFilter<"SiteTheme"> | string | null
    infoColor?: StringNullableFilter<"SiteTheme"> | string | null
    metaTitle?: StringNullableFilter<"SiteTheme"> | string | null
    metaDescription?: StringNullableFilter<"SiteTheme"> | string | null
    metaKeywords?: StringNullableFilter<"SiteTheme"> | string | null
    googleAnalyticsId?: StringNullableFilter<"SiteTheme"> | string | null
    googleTagManagerId?: StringNullableFilter<"SiteTheme"> | string | null
    facebookPixelId?: StringNullableFilter<"SiteTheme"> | string | null
    navItems?: NavItemListRelationFilter
    languages?: LanguageListRelationFilter
    contentSections?: ContentSectionListRelationFilter
    banners?: BannerListRelationFilter
    socialLinks?: SocialLinkListRelationFilter
    contactInfo?: XOR<ContactInfoNullableScalarRelationFilter, ContactInfoWhereInput> | null
  }

  export type SiteThemeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siteTitle?: SortOrderInput | SortOrder
    siteDescription?: SortOrderInput | SortOrder
    siteLogo?: SortOrderInput | SortOrder
    favicon?: SortOrderInput | SortOrder
    primaryColor?: SortOrderInput | SortOrder
    secondaryColor?: SortOrderInput | SortOrder
    accentColor?: SortOrderInput | SortOrder
    backgroundColor?: SortOrderInput | SortOrder
    textColor?: SortOrderInput | SortOrder
    linkColor?: SortOrderInput | SortOrder
    bodyFont?: SortOrderInput | SortOrder
    headingFont?: SortOrderInput | SortOrder
    baseFontSize?: SortOrderInput | SortOrder
    headingFontSize?: SortOrderInput | SortOrder
    containerWidth?: SortOrderInput | SortOrder
    contentWidth?: SortOrderInput | SortOrder
    sidebarWidth?: SortOrderInput | SortOrder
    navbarBackground?: SortOrderInput | SortOrder
    navbarTextColor?: SortOrderInput | SortOrder
    navbarLogo?: SortOrderInput | SortOrder
    navbarHeight?: SortOrderInput | SortOrder
    navbarPosition?: SortOrderInput | SortOrder
    navbarShowSearch?: SortOrder
    navbarShowLanguage?: SortOrder
    navbarShowUserMenu?: SortOrder
    navbarShowNotifications?: SortOrder
    footerBackground?: SortOrderInput | SortOrder
    footerTextColor?: SortOrderInput | SortOrder
    footerLogo?: SortOrderInput | SortOrder
    footerCopyright?: SortOrderInput | SortOrder
    footerShowSocial?: SortOrder
    footerShowNewsletter?: SortOrder
    footerColumns?: SortOrderInput | SortOrder
    heroDesign?: SortOrderInput | SortOrder
    heroBackground?: SortOrderInput | SortOrder
    heroBackgroundImage?: SortOrderInput | SortOrder
    heroTextColor?: SortOrderInput | SortOrder
    heroTitle?: SortOrderInput | SortOrder
    heroSubtitle?: SortOrderInput | SortOrder
    heroButtonText?: SortOrderInput | SortOrder
    heroButtonLink?: SortOrderInput | SortOrder
    heroButtonColor?: SortOrderInput | SortOrder
    heroOverlayColor?: SortOrderInput | SortOrder
    heroOverlayOpacity?: SortOrderInput | SortOrder
    buttonPrimaryColor?: SortOrderInput | SortOrder
    buttonSecondaryColor?: SortOrderInput | SortOrder
    buttonTextColor?: SortOrderInput | SortOrder
    buttonBorderRadius?: SortOrderInput | SortOrder
    buttonPadding?: SortOrderInput | SortOrder
    inputBackground?: SortOrderInput | SortOrder
    inputBorderColor?: SortOrderInput | SortOrder
    inputTextColor?: SortOrderInput | SortOrder
    inputFocusColor?: SortOrderInput | SortOrder
    inputBorderRadius?: SortOrderInput | SortOrder
    cardBackground?: SortOrderInput | SortOrder
    cardBorderColor?: SortOrderInput | SortOrder
    cardBorderRadius?: SortOrderInput | SortOrder
    cardShadow?: SortOrderInput | SortOrder
    cardPadding?: SortOrderInput | SortOrder
    successColor?: SortOrderInput | SortOrder
    warningColor?: SortOrderInput | SortOrder
    errorColor?: SortOrderInput | SortOrder
    infoColor?: SortOrderInput | SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    metaKeywords?: SortOrderInput | SortOrder
    googleAnalyticsId?: SortOrderInput | SortOrder
    googleTagManagerId?: SortOrderInput | SortOrder
    facebookPixelId?: SortOrderInput | SortOrder
    navItems?: NavItemOrderByRelationAggregateInput
    languages?: LanguageOrderByRelationAggregateInput
    contentSections?: ContentSectionOrderByRelationAggregateInput
    banners?: BannerOrderByRelationAggregateInput
    socialLinks?: SocialLinkOrderByRelationAggregateInput
    contactInfo?: ContactInfoOrderByWithRelationInput
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
    siteTitle?: StringNullableFilter<"SiteTheme"> | string | null
    siteDescription?: StringNullableFilter<"SiteTheme"> | string | null
    siteLogo?: StringNullableFilter<"SiteTheme"> | string | null
    favicon?: StringNullableFilter<"SiteTheme"> | string | null
    primaryColor?: StringNullableFilter<"SiteTheme"> | string | null
    secondaryColor?: StringNullableFilter<"SiteTheme"> | string | null
    accentColor?: StringNullableFilter<"SiteTheme"> | string | null
    backgroundColor?: StringNullableFilter<"SiteTheme"> | string | null
    textColor?: StringNullableFilter<"SiteTheme"> | string | null
    linkColor?: StringNullableFilter<"SiteTheme"> | string | null
    bodyFont?: StringNullableFilter<"SiteTheme"> | string | null
    headingFont?: StringNullableFilter<"SiteTheme"> | string | null
    baseFontSize?: StringNullableFilter<"SiteTheme"> | string | null
    headingFontSize?: StringNullableFilter<"SiteTheme"> | string | null
    containerWidth?: StringNullableFilter<"SiteTheme"> | string | null
    contentWidth?: StringNullableFilter<"SiteTheme"> | string | null
    sidebarWidth?: StringNullableFilter<"SiteTheme"> | string | null
    navbarBackground?: StringNullableFilter<"SiteTheme"> | string | null
    navbarTextColor?: StringNullableFilter<"SiteTheme"> | string | null
    navbarLogo?: StringNullableFilter<"SiteTheme"> | string | null
    navbarHeight?: StringNullableFilter<"SiteTheme"> | string | null
    navbarPosition?: StringNullableFilter<"SiteTheme"> | string | null
    navbarShowSearch?: BoolFilter<"SiteTheme"> | boolean
    navbarShowLanguage?: BoolFilter<"SiteTheme"> | boolean
    navbarShowUserMenu?: BoolFilter<"SiteTheme"> | boolean
    navbarShowNotifications?: BoolFilter<"SiteTheme"> | boolean
    footerBackground?: StringNullableFilter<"SiteTheme"> | string | null
    footerTextColor?: StringNullableFilter<"SiteTheme"> | string | null
    footerLogo?: StringNullableFilter<"SiteTheme"> | string | null
    footerCopyright?: StringNullableFilter<"SiteTheme"> | string | null
    footerShowSocial?: BoolFilter<"SiteTheme"> | boolean
    footerShowNewsletter?: BoolFilter<"SiteTheme"> | boolean
    footerColumns?: JsonNullableFilter<"SiteTheme">
    heroDesign?: StringNullableFilter<"SiteTheme"> | string | null
    heroBackground?: StringNullableFilter<"SiteTheme"> | string | null
    heroBackgroundImage?: StringNullableFilter<"SiteTheme"> | string | null
    heroTextColor?: StringNullableFilter<"SiteTheme"> | string | null
    heroTitle?: StringNullableFilter<"SiteTheme"> | string | null
    heroSubtitle?: StringNullableFilter<"SiteTheme"> | string | null
    heroButtonText?: StringNullableFilter<"SiteTheme"> | string | null
    heroButtonLink?: StringNullableFilter<"SiteTheme"> | string | null
    heroButtonColor?: StringNullableFilter<"SiteTheme"> | string | null
    heroOverlayColor?: StringNullableFilter<"SiteTheme"> | string | null
    heroOverlayOpacity?: FloatNullableFilter<"SiteTheme"> | number | null
    buttonPrimaryColor?: StringNullableFilter<"SiteTheme"> | string | null
    buttonSecondaryColor?: StringNullableFilter<"SiteTheme"> | string | null
    buttonTextColor?: StringNullableFilter<"SiteTheme"> | string | null
    buttonBorderRadius?: StringNullableFilter<"SiteTheme"> | string | null
    buttonPadding?: StringNullableFilter<"SiteTheme"> | string | null
    inputBackground?: StringNullableFilter<"SiteTheme"> | string | null
    inputBorderColor?: StringNullableFilter<"SiteTheme"> | string | null
    inputTextColor?: StringNullableFilter<"SiteTheme"> | string | null
    inputFocusColor?: StringNullableFilter<"SiteTheme"> | string | null
    inputBorderRadius?: StringNullableFilter<"SiteTheme"> | string | null
    cardBackground?: StringNullableFilter<"SiteTheme"> | string | null
    cardBorderColor?: StringNullableFilter<"SiteTheme"> | string | null
    cardBorderRadius?: StringNullableFilter<"SiteTheme"> | string | null
    cardShadow?: StringNullableFilter<"SiteTheme"> | string | null
    cardPadding?: StringNullableFilter<"SiteTheme"> | string | null
    successColor?: StringNullableFilter<"SiteTheme"> | string | null
    warningColor?: StringNullableFilter<"SiteTheme"> | string | null
    errorColor?: StringNullableFilter<"SiteTheme"> | string | null
    infoColor?: StringNullableFilter<"SiteTheme"> | string | null
    metaTitle?: StringNullableFilter<"SiteTheme"> | string | null
    metaDescription?: StringNullableFilter<"SiteTheme"> | string | null
    metaKeywords?: StringNullableFilter<"SiteTheme"> | string | null
    googleAnalyticsId?: StringNullableFilter<"SiteTheme"> | string | null
    googleTagManagerId?: StringNullableFilter<"SiteTheme"> | string | null
    facebookPixelId?: StringNullableFilter<"SiteTheme"> | string | null
    navItems?: NavItemListRelationFilter
    languages?: LanguageListRelationFilter
    contentSections?: ContentSectionListRelationFilter
    banners?: BannerListRelationFilter
    socialLinks?: SocialLinkListRelationFilter
    contactInfo?: XOR<ContactInfoNullableScalarRelationFilter, ContactInfoWhereInput> | null
  }, "id" | "name">

  export type SiteThemeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siteTitle?: SortOrderInput | SortOrder
    siteDescription?: SortOrderInput | SortOrder
    siteLogo?: SortOrderInput | SortOrder
    favicon?: SortOrderInput | SortOrder
    primaryColor?: SortOrderInput | SortOrder
    secondaryColor?: SortOrderInput | SortOrder
    accentColor?: SortOrderInput | SortOrder
    backgroundColor?: SortOrderInput | SortOrder
    textColor?: SortOrderInput | SortOrder
    linkColor?: SortOrderInput | SortOrder
    bodyFont?: SortOrderInput | SortOrder
    headingFont?: SortOrderInput | SortOrder
    baseFontSize?: SortOrderInput | SortOrder
    headingFontSize?: SortOrderInput | SortOrder
    containerWidth?: SortOrderInput | SortOrder
    contentWidth?: SortOrderInput | SortOrder
    sidebarWidth?: SortOrderInput | SortOrder
    navbarBackground?: SortOrderInput | SortOrder
    navbarTextColor?: SortOrderInput | SortOrder
    navbarLogo?: SortOrderInput | SortOrder
    navbarHeight?: SortOrderInput | SortOrder
    navbarPosition?: SortOrderInput | SortOrder
    navbarShowSearch?: SortOrder
    navbarShowLanguage?: SortOrder
    navbarShowUserMenu?: SortOrder
    navbarShowNotifications?: SortOrder
    footerBackground?: SortOrderInput | SortOrder
    footerTextColor?: SortOrderInput | SortOrder
    footerLogo?: SortOrderInput | SortOrder
    footerCopyright?: SortOrderInput | SortOrder
    footerShowSocial?: SortOrder
    footerShowNewsletter?: SortOrder
    footerColumns?: SortOrderInput | SortOrder
    heroDesign?: SortOrderInput | SortOrder
    heroBackground?: SortOrderInput | SortOrder
    heroBackgroundImage?: SortOrderInput | SortOrder
    heroTextColor?: SortOrderInput | SortOrder
    heroTitle?: SortOrderInput | SortOrder
    heroSubtitle?: SortOrderInput | SortOrder
    heroButtonText?: SortOrderInput | SortOrder
    heroButtonLink?: SortOrderInput | SortOrder
    heroButtonColor?: SortOrderInput | SortOrder
    heroOverlayColor?: SortOrderInput | SortOrder
    heroOverlayOpacity?: SortOrderInput | SortOrder
    buttonPrimaryColor?: SortOrderInput | SortOrder
    buttonSecondaryColor?: SortOrderInput | SortOrder
    buttonTextColor?: SortOrderInput | SortOrder
    buttonBorderRadius?: SortOrderInput | SortOrder
    buttonPadding?: SortOrderInput | SortOrder
    inputBackground?: SortOrderInput | SortOrder
    inputBorderColor?: SortOrderInput | SortOrder
    inputTextColor?: SortOrderInput | SortOrder
    inputFocusColor?: SortOrderInput | SortOrder
    inputBorderRadius?: SortOrderInput | SortOrder
    cardBackground?: SortOrderInput | SortOrder
    cardBorderColor?: SortOrderInput | SortOrder
    cardBorderRadius?: SortOrderInput | SortOrder
    cardShadow?: SortOrderInput | SortOrder
    cardPadding?: SortOrderInput | SortOrder
    successColor?: SortOrderInput | SortOrder
    warningColor?: SortOrderInput | SortOrder
    errorColor?: SortOrderInput | SortOrder
    infoColor?: SortOrderInput | SortOrder
    metaTitle?: SortOrderInput | SortOrder
    metaDescription?: SortOrderInput | SortOrder
    metaKeywords?: SortOrderInput | SortOrder
    googleAnalyticsId?: SortOrderInput | SortOrder
    googleTagManagerId?: SortOrderInput | SortOrder
    facebookPixelId?: SortOrderInput | SortOrder
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
    siteTitle?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    siteDescription?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    siteLogo?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    favicon?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    primaryColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    secondaryColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    accentColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    backgroundColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    textColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    linkColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    bodyFont?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    headingFont?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    baseFontSize?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    headingFontSize?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    containerWidth?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    contentWidth?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    sidebarWidth?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    navbarBackground?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    navbarTextColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    navbarLogo?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    navbarHeight?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    navbarPosition?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    navbarShowSearch?: BoolWithAggregatesFilter<"SiteTheme"> | boolean
    navbarShowLanguage?: BoolWithAggregatesFilter<"SiteTheme"> | boolean
    navbarShowUserMenu?: BoolWithAggregatesFilter<"SiteTheme"> | boolean
    navbarShowNotifications?: BoolWithAggregatesFilter<"SiteTheme"> | boolean
    footerBackground?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    footerTextColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    footerLogo?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    footerCopyright?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    footerShowSocial?: BoolWithAggregatesFilter<"SiteTheme"> | boolean
    footerShowNewsletter?: BoolWithAggregatesFilter<"SiteTheme"> | boolean
    footerColumns?: JsonNullableWithAggregatesFilter<"SiteTheme">
    heroDesign?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    heroBackground?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    heroBackgroundImage?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    heroTextColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    heroTitle?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    heroSubtitle?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    heroButtonText?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    heroButtonLink?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    heroButtonColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    heroOverlayColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    heroOverlayOpacity?: FloatNullableWithAggregatesFilter<"SiteTheme"> | number | null
    buttonPrimaryColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    buttonSecondaryColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    buttonTextColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    buttonBorderRadius?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    buttonPadding?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    inputBackground?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    inputBorderColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    inputTextColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    inputFocusColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    inputBorderRadius?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    cardBackground?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    cardBorderColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    cardBorderRadius?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    cardShadow?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    cardPadding?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    successColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    warningColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    errorColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    infoColor?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    metaTitle?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    metaDescription?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    metaKeywords?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    googleAnalyticsId?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    googleTagManagerId?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
    facebookPixelId?: StringNullableWithAggregatesFilter<"SiteTheme"> | string | null
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

  export type ContentSectionWhereInput = {
    AND?: ContentSectionWhereInput | ContentSectionWhereInput[]
    OR?: ContentSectionWhereInput[]
    NOT?: ContentSectionWhereInput | ContentSectionWhereInput[]
    id?: IntFilter<"ContentSection"> | number
    name?: StringFilter<"ContentSection"> | string
    type?: StringFilter<"ContentSection"> | string
    title?: StringFilter<"ContentSection"> | string
    subtitle?: StringNullableFilter<"ContentSection"> | string | null
    content?: JsonFilter<"ContentSection">
    isActive?: BoolFilter<"ContentSection"> | boolean
    order?: IntFilter<"ContentSection"> | number
    createdAt?: DateTimeFilter<"ContentSection"> | Date | string
    updatedAt?: DateTimeFilter<"ContentSection"> | Date | string
    themeId?: IntFilter<"ContentSection"> | number
    theme?: XOR<SiteThemeScalarRelationFilter, SiteThemeWhereInput>
  }

  export type ContentSectionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    content?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
    theme?: SiteThemeOrderByWithRelationInput
  }

  export type ContentSectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ContentSectionWhereInput | ContentSectionWhereInput[]
    OR?: ContentSectionWhereInput[]
    NOT?: ContentSectionWhereInput | ContentSectionWhereInput[]
    name?: StringFilter<"ContentSection"> | string
    type?: StringFilter<"ContentSection"> | string
    title?: StringFilter<"ContentSection"> | string
    subtitle?: StringNullableFilter<"ContentSection"> | string | null
    content?: JsonFilter<"ContentSection">
    isActive?: BoolFilter<"ContentSection"> | boolean
    order?: IntFilter<"ContentSection"> | number
    createdAt?: DateTimeFilter<"ContentSection"> | Date | string
    updatedAt?: DateTimeFilter<"ContentSection"> | Date | string
    themeId?: IntFilter<"ContentSection"> | number
    theme?: XOR<SiteThemeScalarRelationFilter, SiteThemeWhereInput>
  }, "id">

  export type ContentSectionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    title?: SortOrder
    subtitle?: SortOrderInput | SortOrder
    content?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
    _count?: ContentSectionCountOrderByAggregateInput
    _avg?: ContentSectionAvgOrderByAggregateInput
    _max?: ContentSectionMaxOrderByAggregateInput
    _min?: ContentSectionMinOrderByAggregateInput
    _sum?: ContentSectionSumOrderByAggregateInput
  }

  export type ContentSectionScalarWhereWithAggregatesInput = {
    AND?: ContentSectionScalarWhereWithAggregatesInput | ContentSectionScalarWhereWithAggregatesInput[]
    OR?: ContentSectionScalarWhereWithAggregatesInput[]
    NOT?: ContentSectionScalarWhereWithAggregatesInput | ContentSectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContentSection"> | number
    name?: StringWithAggregatesFilter<"ContentSection"> | string
    type?: StringWithAggregatesFilter<"ContentSection"> | string
    title?: StringWithAggregatesFilter<"ContentSection"> | string
    subtitle?: StringNullableWithAggregatesFilter<"ContentSection"> | string | null
    content?: JsonWithAggregatesFilter<"ContentSection">
    isActive?: BoolWithAggregatesFilter<"ContentSection"> | boolean
    order?: IntWithAggregatesFilter<"ContentSection"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ContentSection"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContentSection"> | Date | string
    themeId?: IntWithAggregatesFilter<"ContentSection"> | number
  }

  export type BannerWhereInput = {
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    id?: IntFilter<"Banner"> | number
    title?: StringFilter<"Banner"> | string
    content?: StringFilter<"Banner"> | string
    type?: StringFilter<"Banner"> | string
    backgroundColor?: StringFilter<"Banner"> | string
    textColor?: StringFilter<"Banner"> | string
    isActive?: BoolFilter<"Banner"> | boolean
    startDate?: DateTimeNullableFilter<"Banner"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Banner"> | Date | string | null
    link?: StringNullableFilter<"Banner"> | string | null
    linkText?: StringNullableFilter<"Banner"> | string | null
    position?: StringFilter<"Banner"> | string
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
    themeId?: IntFilter<"Banner"> | number
    theme?: XOR<SiteThemeScalarRelationFilter, SiteThemeWhereInput>
  }

  export type BannerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    linkText?: SortOrderInput | SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
    theme?: SiteThemeOrderByWithRelationInput
  }

  export type BannerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BannerWhereInput | BannerWhereInput[]
    OR?: BannerWhereInput[]
    NOT?: BannerWhereInput | BannerWhereInput[]
    title?: StringFilter<"Banner"> | string
    content?: StringFilter<"Banner"> | string
    type?: StringFilter<"Banner"> | string
    backgroundColor?: StringFilter<"Banner"> | string
    textColor?: StringFilter<"Banner"> | string
    isActive?: BoolFilter<"Banner"> | boolean
    startDate?: DateTimeNullableFilter<"Banner"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Banner"> | Date | string | null
    link?: StringNullableFilter<"Banner"> | string | null
    linkText?: StringNullableFilter<"Banner"> | string | null
    position?: StringFilter<"Banner"> | string
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
    themeId?: IntFilter<"Banner"> | number
    theme?: XOR<SiteThemeScalarRelationFilter, SiteThemeWhereInput>
  }, "id">

  export type BannerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    linkText?: SortOrderInput | SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
    _count?: BannerCountOrderByAggregateInput
    _avg?: BannerAvgOrderByAggregateInput
    _max?: BannerMaxOrderByAggregateInput
    _min?: BannerMinOrderByAggregateInput
    _sum?: BannerSumOrderByAggregateInput
  }

  export type BannerScalarWhereWithAggregatesInput = {
    AND?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    OR?: BannerScalarWhereWithAggregatesInput[]
    NOT?: BannerScalarWhereWithAggregatesInput | BannerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Banner"> | number
    title?: StringWithAggregatesFilter<"Banner"> | string
    content?: StringWithAggregatesFilter<"Banner"> | string
    type?: StringWithAggregatesFilter<"Banner"> | string
    backgroundColor?: StringWithAggregatesFilter<"Banner"> | string
    textColor?: StringWithAggregatesFilter<"Banner"> | string
    isActive?: BoolWithAggregatesFilter<"Banner"> | boolean
    startDate?: DateTimeNullableWithAggregatesFilter<"Banner"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Banner"> | Date | string | null
    link?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    linkText?: StringNullableWithAggregatesFilter<"Banner"> | string | null
    position?: StringWithAggregatesFilter<"Banner"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Banner"> | Date | string
    themeId?: IntWithAggregatesFilter<"Banner"> | number
  }

  export type SocialLinkWhereInput = {
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    id?: IntFilter<"SocialLink"> | number
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    icon?: StringFilter<"SocialLink"> | string
    isActive?: BoolFilter<"SocialLink"> | boolean
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeFilter<"SocialLink"> | Date | string
    themeId?: IntFilter<"SocialLink"> | number
    theme?: XOR<SiteThemeScalarRelationFilter, SiteThemeWhereInput>
  }

  export type SocialLinkOrderByWithRelationInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
    theme?: SiteThemeOrderByWithRelationInput
  }

  export type SocialLinkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SocialLinkWhereInput | SocialLinkWhereInput[]
    OR?: SocialLinkWhereInput[]
    NOT?: SocialLinkWhereInput | SocialLinkWhereInput[]
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    icon?: StringFilter<"SocialLink"> | string
    isActive?: BoolFilter<"SocialLink"> | boolean
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeFilter<"SocialLink"> | Date | string
    themeId?: IntFilter<"SocialLink"> | number
    theme?: XOR<SiteThemeScalarRelationFilter, SiteThemeWhereInput>
  }, "id">

  export type SocialLinkOrderByWithAggregationInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
    _count?: SocialLinkCountOrderByAggregateInput
    _avg?: SocialLinkAvgOrderByAggregateInput
    _max?: SocialLinkMaxOrderByAggregateInput
    _min?: SocialLinkMinOrderByAggregateInput
    _sum?: SocialLinkSumOrderByAggregateInput
  }

  export type SocialLinkScalarWhereWithAggregatesInput = {
    AND?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    OR?: SocialLinkScalarWhereWithAggregatesInput[]
    NOT?: SocialLinkScalarWhereWithAggregatesInput | SocialLinkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SocialLink"> | number
    platform?: StringWithAggregatesFilter<"SocialLink"> | string
    url?: StringWithAggregatesFilter<"SocialLink"> | string
    icon?: StringWithAggregatesFilter<"SocialLink"> | string
    isActive?: BoolWithAggregatesFilter<"SocialLink"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SocialLink"> | Date | string
    themeId?: IntWithAggregatesFilter<"SocialLink"> | number
  }

  export type ContactInfoWhereInput = {
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    id?: IntFilter<"ContactInfo"> | number
    email?: StringFilter<"ContactInfo"> | string
    phone?: StringNullableFilter<"ContactInfo"> | string | null
    address?: StringNullableFilter<"ContactInfo"> | string | null
    workingHours?: StringNullableFilter<"ContactInfo"> | string | null
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
    themeId?: IntFilter<"ContactInfo"> | number
    theme?: XOR<SiteThemeScalarRelationFilter, SiteThemeWhereInput>
  }

  export type ContactInfoOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    workingHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
    theme?: SiteThemeOrderByWithRelationInput
  }

  export type ContactInfoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    themeId?: number
    AND?: ContactInfoWhereInput | ContactInfoWhereInput[]
    OR?: ContactInfoWhereInput[]
    NOT?: ContactInfoWhereInput | ContactInfoWhereInput[]
    email?: StringFilter<"ContactInfo"> | string
    phone?: StringNullableFilter<"ContactInfo"> | string | null
    address?: StringNullableFilter<"ContactInfo"> | string | null
    workingHours?: StringNullableFilter<"ContactInfo"> | string | null
    createdAt?: DateTimeFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeFilter<"ContactInfo"> | Date | string
    theme?: XOR<SiteThemeScalarRelationFilter, SiteThemeWhereInput>
  }, "id" | "themeId">

  export type ContactInfoOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    workingHours?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
    _count?: ContactInfoCountOrderByAggregateInput
    _avg?: ContactInfoAvgOrderByAggregateInput
    _max?: ContactInfoMaxOrderByAggregateInput
    _min?: ContactInfoMinOrderByAggregateInput
    _sum?: ContactInfoSumOrderByAggregateInput
  }

  export type ContactInfoScalarWhereWithAggregatesInput = {
    AND?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    OR?: ContactInfoScalarWhereWithAggregatesInput[]
    NOT?: ContactInfoScalarWhereWithAggregatesInput | ContactInfoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ContactInfo"> | number
    email?: StringWithAggregatesFilter<"ContactInfo"> | string
    phone?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    address?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    workingHours?: StringNullableWithAggregatesFilter<"ContactInfo"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ContactInfo"> | Date | string
    themeId?: IntWithAggregatesFilter<"ContactInfo"> | number
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
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    navItems?: NavItemCreateNestedManyWithoutThemeInput
    languages?: LanguageCreateNestedManyWithoutThemeInput
    contentSections?: ContentSectionCreateNestedManyWithoutThemeInput
    banners?: BannerCreateNestedManyWithoutThemeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutThemeInput
    contactInfo?: ContactInfoCreateNestedOneWithoutThemeInput
  }

  export type SiteThemeUncheckedCreateInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    navItems?: NavItemUncheckedCreateNestedManyWithoutThemeInput
    languages?: LanguageUncheckedCreateNestedManyWithoutThemeInput
    contentSections?: ContentSectionUncheckedCreateNestedManyWithoutThemeInput
    banners?: BannerUncheckedCreateNestedManyWithoutThemeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutThemeInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutThemeInput
  }

  export type SiteThemeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUpdateManyWithoutThemeNestedInput
    languages?: LanguageUpdateManyWithoutThemeNestedInput
    contentSections?: ContentSectionUpdateManyWithoutThemeNestedInput
    banners?: BannerUpdateManyWithoutThemeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutThemeNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutThemeNestedInput
  }

  export type SiteThemeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUncheckedUpdateManyWithoutThemeNestedInput
    languages?: LanguageUncheckedUpdateManyWithoutThemeNestedInput
    contentSections?: ContentSectionUncheckedUpdateManyWithoutThemeNestedInput
    banners?: BannerUncheckedUpdateManyWithoutThemeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutThemeNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutThemeNestedInput
  }

  export type SiteThemeCreateManyInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
  }

  export type SiteThemeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SiteThemeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type ContentSectionCreateInput = {
    name: string
    type: string
    title: string
    subtitle?: string | null
    content: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    theme: SiteThemeCreateNestedOneWithoutContentSectionsInput
  }

  export type ContentSectionUncheckedCreateInput = {
    id?: number
    name: string
    type: string
    title: string
    subtitle?: string | null
    content: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    themeId: number
  }

  export type ContentSectionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: SiteThemeUpdateOneRequiredWithoutContentSectionsNestedInput
  }

  export type ContentSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: IntFieldUpdateOperationsInput | number
  }

  export type ContentSectionCreateManyInput = {
    id?: number
    name: string
    type: string
    title: string
    subtitle?: string | null
    content: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    themeId: number
  }

  export type ContentSectionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: IntFieldUpdateOperationsInput | number
  }

  export type BannerCreateInput = {
    title: string
    content: string
    type?: string
    backgroundColor: string
    textColor: string
    isActive?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    link?: string | null
    linkText?: string | null
    position?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    theme: SiteThemeCreateNestedOneWithoutBannersInput
  }

  export type BannerUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    type?: string
    backgroundColor: string
    textColor: string
    isActive?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    link?: string | null
    linkText?: string | null
    position?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeId: number
  }

  export type BannerUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkText?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: SiteThemeUpdateOneRequiredWithoutBannersNestedInput
  }

  export type BannerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkText?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: IntFieldUpdateOperationsInput | number
  }

  export type BannerCreateManyInput = {
    id?: number
    title: string
    content: string
    type?: string
    backgroundColor: string
    textColor: string
    isActive?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    link?: string | null
    linkText?: string | null
    position?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    themeId: number
  }

  export type BannerUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkText?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkText?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: IntFieldUpdateOperationsInput | number
  }

  export type SocialLinkCreateInput = {
    platform: string
    url: string
    icon: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    theme: SiteThemeCreateNestedOneWithoutSocialLinksInput
  }

  export type SocialLinkUncheckedCreateInput = {
    id?: number
    platform: string
    url: string
    icon: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    themeId: number
  }

  export type SocialLinkUpdateInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: SiteThemeUpdateOneRequiredWithoutSocialLinksNestedInput
  }

  export type SocialLinkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: IntFieldUpdateOperationsInput | number
  }

  export type SocialLinkCreateManyInput = {
    id?: number
    platform: string
    url: string
    icon: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    themeId: number
  }

  export type SocialLinkUpdateManyMutationInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: IntFieldUpdateOperationsInput | number
  }

  export type ContactInfoCreateInput = {
    email: string
    phone?: string | null
    address?: string | null
    workingHours?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    theme: SiteThemeCreateNestedOneWithoutContactInfoInput
  }

  export type ContactInfoUncheckedCreateInput = {
    id?: number
    email: string
    phone?: string | null
    address?: string | null
    workingHours?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    themeId: number
  }

  export type ContactInfoUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    workingHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    theme?: SiteThemeUpdateOneRequiredWithoutContactInfoNestedInput
  }

  export type ContactInfoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    workingHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    themeId?: IntFieldUpdateOperationsInput | number
  }

  export type ContactInfoCreateManyInput = {
    id?: number
    email: string
    phone?: string | null
    address?: string | null
    workingHours?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    themeId: number
  }

  export type ContactInfoUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    workingHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    workingHours?: NullableStringFieldUpdateOperationsInput | string | null
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type ContentSectionListRelationFilter = {
    every?: ContentSectionWhereInput
    some?: ContentSectionWhereInput
    none?: ContentSectionWhereInput
  }

  export type BannerListRelationFilter = {
    every?: BannerWhereInput
    some?: BannerWhereInput
    none?: BannerWhereInput
  }

  export type SocialLinkListRelationFilter = {
    every?: SocialLinkWhereInput
    some?: SocialLinkWhereInput
    none?: SocialLinkWhereInput
  }

  export type ContactInfoNullableScalarRelationFilter = {
    is?: ContactInfoWhereInput | null
    isNot?: ContactInfoWhereInput | null
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

  export type ContentSectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BannerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SocialLinkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteThemeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siteTitle?: SortOrder
    siteDescription?: SortOrder
    siteLogo?: SortOrder
    favicon?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    linkColor?: SortOrder
    bodyFont?: SortOrder
    headingFont?: SortOrder
    baseFontSize?: SortOrder
    headingFontSize?: SortOrder
    containerWidth?: SortOrder
    contentWidth?: SortOrder
    sidebarWidth?: SortOrder
    navbarBackground?: SortOrder
    navbarTextColor?: SortOrder
    navbarLogo?: SortOrder
    navbarHeight?: SortOrder
    navbarPosition?: SortOrder
    navbarShowSearch?: SortOrder
    navbarShowLanguage?: SortOrder
    navbarShowUserMenu?: SortOrder
    navbarShowNotifications?: SortOrder
    footerBackground?: SortOrder
    footerTextColor?: SortOrder
    footerLogo?: SortOrder
    footerCopyright?: SortOrder
    footerShowSocial?: SortOrder
    footerShowNewsletter?: SortOrder
    footerColumns?: SortOrder
    heroDesign?: SortOrder
    heroBackground?: SortOrder
    heroBackgroundImage?: SortOrder
    heroTextColor?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroButtonText?: SortOrder
    heroButtonLink?: SortOrder
    heroButtonColor?: SortOrder
    heroOverlayColor?: SortOrder
    heroOverlayOpacity?: SortOrder
    buttonPrimaryColor?: SortOrder
    buttonSecondaryColor?: SortOrder
    buttonTextColor?: SortOrder
    buttonBorderRadius?: SortOrder
    buttonPadding?: SortOrder
    inputBackground?: SortOrder
    inputBorderColor?: SortOrder
    inputTextColor?: SortOrder
    inputFocusColor?: SortOrder
    inputBorderRadius?: SortOrder
    cardBackground?: SortOrder
    cardBorderColor?: SortOrder
    cardBorderRadius?: SortOrder
    cardShadow?: SortOrder
    cardPadding?: SortOrder
    successColor?: SortOrder
    warningColor?: SortOrder
    errorColor?: SortOrder
    infoColor?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    googleAnalyticsId?: SortOrder
    googleTagManagerId?: SortOrder
    facebookPixelId?: SortOrder
  }

  export type SiteThemeAvgOrderByAggregateInput = {
    id?: SortOrder
    heroOverlayOpacity?: SortOrder
  }

  export type SiteThemeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siteTitle?: SortOrder
    siteDescription?: SortOrder
    siteLogo?: SortOrder
    favicon?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    linkColor?: SortOrder
    bodyFont?: SortOrder
    headingFont?: SortOrder
    baseFontSize?: SortOrder
    headingFontSize?: SortOrder
    containerWidth?: SortOrder
    contentWidth?: SortOrder
    sidebarWidth?: SortOrder
    navbarBackground?: SortOrder
    navbarTextColor?: SortOrder
    navbarLogo?: SortOrder
    navbarHeight?: SortOrder
    navbarPosition?: SortOrder
    navbarShowSearch?: SortOrder
    navbarShowLanguage?: SortOrder
    navbarShowUserMenu?: SortOrder
    navbarShowNotifications?: SortOrder
    footerBackground?: SortOrder
    footerTextColor?: SortOrder
    footerLogo?: SortOrder
    footerCopyright?: SortOrder
    footerShowSocial?: SortOrder
    footerShowNewsletter?: SortOrder
    heroDesign?: SortOrder
    heroBackground?: SortOrder
    heroBackgroundImage?: SortOrder
    heroTextColor?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroButtonText?: SortOrder
    heroButtonLink?: SortOrder
    heroButtonColor?: SortOrder
    heroOverlayColor?: SortOrder
    heroOverlayOpacity?: SortOrder
    buttonPrimaryColor?: SortOrder
    buttonSecondaryColor?: SortOrder
    buttonTextColor?: SortOrder
    buttonBorderRadius?: SortOrder
    buttonPadding?: SortOrder
    inputBackground?: SortOrder
    inputBorderColor?: SortOrder
    inputTextColor?: SortOrder
    inputFocusColor?: SortOrder
    inputBorderRadius?: SortOrder
    cardBackground?: SortOrder
    cardBorderColor?: SortOrder
    cardBorderRadius?: SortOrder
    cardShadow?: SortOrder
    cardPadding?: SortOrder
    successColor?: SortOrder
    warningColor?: SortOrder
    errorColor?: SortOrder
    infoColor?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    googleAnalyticsId?: SortOrder
    googleTagManagerId?: SortOrder
    facebookPixelId?: SortOrder
  }

  export type SiteThemeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    siteTitle?: SortOrder
    siteDescription?: SortOrder
    siteLogo?: SortOrder
    favicon?: SortOrder
    primaryColor?: SortOrder
    secondaryColor?: SortOrder
    accentColor?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    linkColor?: SortOrder
    bodyFont?: SortOrder
    headingFont?: SortOrder
    baseFontSize?: SortOrder
    headingFontSize?: SortOrder
    containerWidth?: SortOrder
    contentWidth?: SortOrder
    sidebarWidth?: SortOrder
    navbarBackground?: SortOrder
    navbarTextColor?: SortOrder
    navbarLogo?: SortOrder
    navbarHeight?: SortOrder
    navbarPosition?: SortOrder
    navbarShowSearch?: SortOrder
    navbarShowLanguage?: SortOrder
    navbarShowUserMenu?: SortOrder
    navbarShowNotifications?: SortOrder
    footerBackground?: SortOrder
    footerTextColor?: SortOrder
    footerLogo?: SortOrder
    footerCopyright?: SortOrder
    footerShowSocial?: SortOrder
    footerShowNewsletter?: SortOrder
    heroDesign?: SortOrder
    heroBackground?: SortOrder
    heroBackgroundImage?: SortOrder
    heroTextColor?: SortOrder
    heroTitle?: SortOrder
    heroSubtitle?: SortOrder
    heroButtonText?: SortOrder
    heroButtonLink?: SortOrder
    heroButtonColor?: SortOrder
    heroOverlayColor?: SortOrder
    heroOverlayOpacity?: SortOrder
    buttonPrimaryColor?: SortOrder
    buttonSecondaryColor?: SortOrder
    buttonTextColor?: SortOrder
    buttonBorderRadius?: SortOrder
    buttonPadding?: SortOrder
    inputBackground?: SortOrder
    inputBorderColor?: SortOrder
    inputTextColor?: SortOrder
    inputFocusColor?: SortOrder
    inputBorderRadius?: SortOrder
    cardBackground?: SortOrder
    cardBorderColor?: SortOrder
    cardBorderRadius?: SortOrder
    cardShadow?: SortOrder
    cardPadding?: SortOrder
    successColor?: SortOrder
    warningColor?: SortOrder
    errorColor?: SortOrder
    infoColor?: SortOrder
    metaTitle?: SortOrder
    metaDescription?: SortOrder
    metaKeywords?: SortOrder
    googleAnalyticsId?: SortOrder
    googleTagManagerId?: SortOrder
    facebookPixelId?: SortOrder
  }

  export type SiteThemeSumOrderByAggregateInput = {
    id?: SortOrder
    heroOverlayOpacity?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ContentSectionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    content?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type ContentSectionAvgOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    themeId?: SortOrder
  }

  export type ContentSectionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type ContentSectionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    title?: SortOrder
    subtitle?: SortOrder
    isActive?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type ContentSectionSumOrderByAggregateInput = {
    id?: SortOrder
    order?: SortOrder
    themeId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BannerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    link?: SortOrder
    linkText?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type BannerAvgOrderByAggregateInput = {
    id?: SortOrder
    themeId?: SortOrder
  }

  export type BannerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    link?: SortOrder
    linkText?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type BannerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    type?: SortOrder
    backgroundColor?: SortOrder
    textColor?: SortOrder
    isActive?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    link?: SortOrder
    linkText?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type BannerSumOrderByAggregateInput = {
    id?: SortOrder
    themeId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SocialLinkCountOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type SocialLinkAvgOrderByAggregateInput = {
    id?: SortOrder
    themeId?: SortOrder
  }

  export type SocialLinkMaxOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type SocialLinkMinOrderByAggregateInput = {
    id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    icon?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type SocialLinkSumOrderByAggregateInput = {
    id?: SortOrder
    themeId?: SortOrder
  }

  export type ContactInfoCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    workingHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type ContactInfoAvgOrderByAggregateInput = {
    id?: SortOrder
    themeId?: SortOrder
  }

  export type ContactInfoMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    workingHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type ContactInfoMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    workingHours?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    themeId?: SortOrder
  }

  export type ContactInfoSumOrderByAggregateInput = {
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

  export type ContentSectionCreateNestedManyWithoutThemeInput = {
    create?: XOR<ContentSectionCreateWithoutThemeInput, ContentSectionUncheckedCreateWithoutThemeInput> | ContentSectionCreateWithoutThemeInput[] | ContentSectionUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: ContentSectionCreateOrConnectWithoutThemeInput | ContentSectionCreateOrConnectWithoutThemeInput[]
    createMany?: ContentSectionCreateManyThemeInputEnvelope
    connect?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
  }

  export type BannerCreateNestedManyWithoutThemeInput = {
    create?: XOR<BannerCreateWithoutThemeInput, BannerUncheckedCreateWithoutThemeInput> | BannerCreateWithoutThemeInput[] | BannerUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutThemeInput | BannerCreateOrConnectWithoutThemeInput[]
    createMany?: BannerCreateManyThemeInputEnvelope
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
  }

  export type SocialLinkCreateNestedManyWithoutThemeInput = {
    create?: XOR<SocialLinkCreateWithoutThemeInput, SocialLinkUncheckedCreateWithoutThemeInput> | SocialLinkCreateWithoutThemeInput[] | SocialLinkUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutThemeInput | SocialLinkCreateOrConnectWithoutThemeInput[]
    createMany?: SocialLinkCreateManyThemeInputEnvelope
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
  }

  export type ContactInfoCreateNestedOneWithoutThemeInput = {
    create?: XOR<ContactInfoCreateWithoutThemeInput, ContactInfoUncheckedCreateWithoutThemeInput>
    connectOrCreate?: ContactInfoCreateOrConnectWithoutThemeInput
    connect?: ContactInfoWhereUniqueInput
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

  export type ContentSectionUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<ContentSectionCreateWithoutThemeInput, ContentSectionUncheckedCreateWithoutThemeInput> | ContentSectionCreateWithoutThemeInput[] | ContentSectionUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: ContentSectionCreateOrConnectWithoutThemeInput | ContentSectionCreateOrConnectWithoutThemeInput[]
    createMany?: ContentSectionCreateManyThemeInputEnvelope
    connect?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
  }

  export type BannerUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<BannerCreateWithoutThemeInput, BannerUncheckedCreateWithoutThemeInput> | BannerCreateWithoutThemeInput[] | BannerUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutThemeInput | BannerCreateOrConnectWithoutThemeInput[]
    createMany?: BannerCreateManyThemeInputEnvelope
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
  }

  export type SocialLinkUncheckedCreateNestedManyWithoutThemeInput = {
    create?: XOR<SocialLinkCreateWithoutThemeInput, SocialLinkUncheckedCreateWithoutThemeInput> | SocialLinkCreateWithoutThemeInput[] | SocialLinkUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutThemeInput | SocialLinkCreateOrConnectWithoutThemeInput[]
    createMany?: SocialLinkCreateManyThemeInputEnvelope
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
  }

  export type ContactInfoUncheckedCreateNestedOneWithoutThemeInput = {
    create?: XOR<ContactInfoCreateWithoutThemeInput, ContactInfoUncheckedCreateWithoutThemeInput>
    connectOrCreate?: ContactInfoCreateOrConnectWithoutThemeInput
    connect?: ContactInfoWhereUniqueInput
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

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type ContentSectionUpdateManyWithoutThemeNestedInput = {
    create?: XOR<ContentSectionCreateWithoutThemeInput, ContentSectionUncheckedCreateWithoutThemeInput> | ContentSectionCreateWithoutThemeInput[] | ContentSectionUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: ContentSectionCreateOrConnectWithoutThemeInput | ContentSectionCreateOrConnectWithoutThemeInput[]
    upsert?: ContentSectionUpsertWithWhereUniqueWithoutThemeInput | ContentSectionUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: ContentSectionCreateManyThemeInputEnvelope
    set?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    disconnect?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    delete?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    connect?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    update?: ContentSectionUpdateWithWhereUniqueWithoutThemeInput | ContentSectionUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: ContentSectionUpdateManyWithWhereWithoutThemeInput | ContentSectionUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: ContentSectionScalarWhereInput | ContentSectionScalarWhereInput[]
  }

  export type BannerUpdateManyWithoutThemeNestedInput = {
    create?: XOR<BannerCreateWithoutThemeInput, BannerUncheckedCreateWithoutThemeInput> | BannerCreateWithoutThemeInput[] | BannerUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutThemeInput | BannerCreateOrConnectWithoutThemeInput[]
    upsert?: BannerUpsertWithWhereUniqueWithoutThemeInput | BannerUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: BannerCreateManyThemeInputEnvelope
    set?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    disconnect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    delete?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    update?: BannerUpdateWithWhereUniqueWithoutThemeInput | BannerUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: BannerUpdateManyWithWhereWithoutThemeInput | BannerUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: BannerScalarWhereInput | BannerScalarWhereInput[]
  }

  export type SocialLinkUpdateManyWithoutThemeNestedInput = {
    create?: XOR<SocialLinkCreateWithoutThemeInput, SocialLinkUncheckedCreateWithoutThemeInput> | SocialLinkCreateWithoutThemeInput[] | SocialLinkUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutThemeInput | SocialLinkCreateOrConnectWithoutThemeInput[]
    upsert?: SocialLinkUpsertWithWhereUniqueWithoutThemeInput | SocialLinkUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: SocialLinkCreateManyThemeInputEnvelope
    set?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    disconnect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    delete?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    update?: SocialLinkUpdateWithWhereUniqueWithoutThemeInput | SocialLinkUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: SocialLinkUpdateManyWithWhereWithoutThemeInput | SocialLinkUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
  }

  export type ContactInfoUpdateOneWithoutThemeNestedInput = {
    create?: XOR<ContactInfoCreateWithoutThemeInput, ContactInfoUncheckedCreateWithoutThemeInput>
    connectOrCreate?: ContactInfoCreateOrConnectWithoutThemeInput
    upsert?: ContactInfoUpsertWithoutThemeInput
    disconnect?: ContactInfoWhereInput | boolean
    delete?: ContactInfoWhereInput | boolean
    connect?: ContactInfoWhereUniqueInput
    update?: XOR<XOR<ContactInfoUpdateToOneWithWhereWithoutThemeInput, ContactInfoUpdateWithoutThemeInput>, ContactInfoUncheckedUpdateWithoutThemeInput>
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

  export type ContentSectionUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<ContentSectionCreateWithoutThemeInput, ContentSectionUncheckedCreateWithoutThemeInput> | ContentSectionCreateWithoutThemeInput[] | ContentSectionUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: ContentSectionCreateOrConnectWithoutThemeInput | ContentSectionCreateOrConnectWithoutThemeInput[]
    upsert?: ContentSectionUpsertWithWhereUniqueWithoutThemeInput | ContentSectionUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: ContentSectionCreateManyThemeInputEnvelope
    set?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    disconnect?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    delete?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    connect?: ContentSectionWhereUniqueInput | ContentSectionWhereUniqueInput[]
    update?: ContentSectionUpdateWithWhereUniqueWithoutThemeInput | ContentSectionUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: ContentSectionUpdateManyWithWhereWithoutThemeInput | ContentSectionUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: ContentSectionScalarWhereInput | ContentSectionScalarWhereInput[]
  }

  export type BannerUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<BannerCreateWithoutThemeInput, BannerUncheckedCreateWithoutThemeInput> | BannerCreateWithoutThemeInput[] | BannerUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: BannerCreateOrConnectWithoutThemeInput | BannerCreateOrConnectWithoutThemeInput[]
    upsert?: BannerUpsertWithWhereUniqueWithoutThemeInput | BannerUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: BannerCreateManyThemeInputEnvelope
    set?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    disconnect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    delete?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    connect?: BannerWhereUniqueInput | BannerWhereUniqueInput[]
    update?: BannerUpdateWithWhereUniqueWithoutThemeInput | BannerUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: BannerUpdateManyWithWhereWithoutThemeInput | BannerUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: BannerScalarWhereInput | BannerScalarWhereInput[]
  }

  export type SocialLinkUncheckedUpdateManyWithoutThemeNestedInput = {
    create?: XOR<SocialLinkCreateWithoutThemeInput, SocialLinkUncheckedCreateWithoutThemeInput> | SocialLinkCreateWithoutThemeInput[] | SocialLinkUncheckedCreateWithoutThemeInput[]
    connectOrCreate?: SocialLinkCreateOrConnectWithoutThemeInput | SocialLinkCreateOrConnectWithoutThemeInput[]
    upsert?: SocialLinkUpsertWithWhereUniqueWithoutThemeInput | SocialLinkUpsertWithWhereUniqueWithoutThemeInput[]
    createMany?: SocialLinkCreateManyThemeInputEnvelope
    set?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    disconnect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    delete?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    connect?: SocialLinkWhereUniqueInput | SocialLinkWhereUniqueInput[]
    update?: SocialLinkUpdateWithWhereUniqueWithoutThemeInput | SocialLinkUpdateWithWhereUniqueWithoutThemeInput[]
    updateMany?: SocialLinkUpdateManyWithWhereWithoutThemeInput | SocialLinkUpdateManyWithWhereWithoutThemeInput[]
    deleteMany?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
  }

  export type ContactInfoUncheckedUpdateOneWithoutThemeNestedInput = {
    create?: XOR<ContactInfoCreateWithoutThemeInput, ContactInfoUncheckedCreateWithoutThemeInput>
    connectOrCreate?: ContactInfoCreateOrConnectWithoutThemeInput
    upsert?: ContactInfoUpsertWithoutThemeInput
    disconnect?: ContactInfoWhereInput | boolean
    delete?: ContactInfoWhereInput | boolean
    connect?: ContactInfoWhereUniqueInput
    update?: XOR<XOR<ContactInfoUpdateToOneWithWhereWithoutThemeInput, ContactInfoUpdateWithoutThemeInput>, ContactInfoUncheckedUpdateWithoutThemeInput>
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

  export type SiteThemeCreateNestedOneWithoutContentSectionsInput = {
    create?: XOR<SiteThemeCreateWithoutContentSectionsInput, SiteThemeUncheckedCreateWithoutContentSectionsInput>
    connectOrCreate?: SiteThemeCreateOrConnectWithoutContentSectionsInput
    connect?: SiteThemeWhereUniqueInput
  }

  export type SiteThemeUpdateOneRequiredWithoutContentSectionsNestedInput = {
    create?: XOR<SiteThemeCreateWithoutContentSectionsInput, SiteThemeUncheckedCreateWithoutContentSectionsInput>
    connectOrCreate?: SiteThemeCreateOrConnectWithoutContentSectionsInput
    upsert?: SiteThemeUpsertWithoutContentSectionsInput
    connect?: SiteThemeWhereUniqueInput
    update?: XOR<XOR<SiteThemeUpdateToOneWithWhereWithoutContentSectionsInput, SiteThemeUpdateWithoutContentSectionsInput>, SiteThemeUncheckedUpdateWithoutContentSectionsInput>
  }

  export type SiteThemeCreateNestedOneWithoutBannersInput = {
    create?: XOR<SiteThemeCreateWithoutBannersInput, SiteThemeUncheckedCreateWithoutBannersInput>
    connectOrCreate?: SiteThemeCreateOrConnectWithoutBannersInput
    connect?: SiteThemeWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SiteThemeUpdateOneRequiredWithoutBannersNestedInput = {
    create?: XOR<SiteThemeCreateWithoutBannersInput, SiteThemeUncheckedCreateWithoutBannersInput>
    connectOrCreate?: SiteThemeCreateOrConnectWithoutBannersInput
    upsert?: SiteThemeUpsertWithoutBannersInput
    connect?: SiteThemeWhereUniqueInput
    update?: XOR<XOR<SiteThemeUpdateToOneWithWhereWithoutBannersInput, SiteThemeUpdateWithoutBannersInput>, SiteThemeUncheckedUpdateWithoutBannersInput>
  }

  export type SiteThemeCreateNestedOneWithoutSocialLinksInput = {
    create?: XOR<SiteThemeCreateWithoutSocialLinksInput, SiteThemeUncheckedCreateWithoutSocialLinksInput>
    connectOrCreate?: SiteThemeCreateOrConnectWithoutSocialLinksInput
    connect?: SiteThemeWhereUniqueInput
  }

  export type SiteThemeUpdateOneRequiredWithoutSocialLinksNestedInput = {
    create?: XOR<SiteThemeCreateWithoutSocialLinksInput, SiteThemeUncheckedCreateWithoutSocialLinksInput>
    connectOrCreate?: SiteThemeCreateOrConnectWithoutSocialLinksInput
    upsert?: SiteThemeUpsertWithoutSocialLinksInput
    connect?: SiteThemeWhereUniqueInput
    update?: XOR<XOR<SiteThemeUpdateToOneWithWhereWithoutSocialLinksInput, SiteThemeUpdateWithoutSocialLinksInput>, SiteThemeUncheckedUpdateWithoutSocialLinksInput>
  }

  export type SiteThemeCreateNestedOneWithoutContactInfoInput = {
    create?: XOR<SiteThemeCreateWithoutContactInfoInput, SiteThemeUncheckedCreateWithoutContactInfoInput>
    connectOrCreate?: SiteThemeCreateOrConnectWithoutContactInfoInput
    connect?: SiteThemeWhereUniqueInput
  }

  export type SiteThemeUpdateOneRequiredWithoutContactInfoNestedInput = {
    create?: XOR<SiteThemeCreateWithoutContactInfoInput, SiteThemeUncheckedCreateWithoutContactInfoInput>
    connectOrCreate?: SiteThemeCreateOrConnectWithoutContactInfoInput
    upsert?: SiteThemeUpsertWithoutContactInfoInput
    connect?: SiteThemeWhereUniqueInput
    update?: XOR<XOR<SiteThemeUpdateToOneWithWhereWithoutContactInfoInput, SiteThemeUpdateWithoutContactInfoInput>, SiteThemeUncheckedUpdateWithoutContactInfoInput>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type ContentSectionCreateWithoutThemeInput = {
    name: string
    type: string
    title: string
    subtitle?: string | null
    content: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentSectionUncheckedCreateWithoutThemeInput = {
    id?: number
    name: string
    type: string
    title: string
    subtitle?: string | null
    content: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContentSectionCreateOrConnectWithoutThemeInput = {
    where: ContentSectionWhereUniqueInput
    create: XOR<ContentSectionCreateWithoutThemeInput, ContentSectionUncheckedCreateWithoutThemeInput>
  }

  export type ContentSectionCreateManyThemeInputEnvelope = {
    data: ContentSectionCreateManyThemeInput | ContentSectionCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type BannerCreateWithoutThemeInput = {
    title: string
    content: string
    type?: string
    backgroundColor: string
    textColor: string
    isActive?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    link?: string | null
    linkText?: string | null
    position?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerUncheckedCreateWithoutThemeInput = {
    id?: number
    title: string
    content: string
    type?: string
    backgroundColor: string
    textColor: string
    isActive?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    link?: string | null
    linkText?: string | null
    position?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerCreateOrConnectWithoutThemeInput = {
    where: BannerWhereUniqueInput
    create: XOR<BannerCreateWithoutThemeInput, BannerUncheckedCreateWithoutThemeInput>
  }

  export type BannerCreateManyThemeInputEnvelope = {
    data: BannerCreateManyThemeInput | BannerCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type SocialLinkCreateWithoutThemeInput = {
    platform: string
    url: string
    icon: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkUncheckedCreateWithoutThemeInput = {
    id?: number
    platform: string
    url: string
    icon: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkCreateOrConnectWithoutThemeInput = {
    where: SocialLinkWhereUniqueInput
    create: XOR<SocialLinkCreateWithoutThemeInput, SocialLinkUncheckedCreateWithoutThemeInput>
  }

  export type SocialLinkCreateManyThemeInputEnvelope = {
    data: SocialLinkCreateManyThemeInput | SocialLinkCreateManyThemeInput[]
    skipDuplicates?: boolean
  }

  export type ContactInfoCreateWithoutThemeInput = {
    email: string
    phone?: string | null
    address?: string | null
    workingHours?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoUncheckedCreateWithoutThemeInput = {
    id?: number
    email: string
    phone?: string | null
    address?: string | null
    workingHours?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactInfoCreateOrConnectWithoutThemeInput = {
    where: ContactInfoWhereUniqueInput
    create: XOR<ContactInfoCreateWithoutThemeInput, ContactInfoUncheckedCreateWithoutThemeInput>
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

  export type ContentSectionUpsertWithWhereUniqueWithoutThemeInput = {
    where: ContentSectionWhereUniqueInput
    update: XOR<ContentSectionUpdateWithoutThemeInput, ContentSectionUncheckedUpdateWithoutThemeInput>
    create: XOR<ContentSectionCreateWithoutThemeInput, ContentSectionUncheckedCreateWithoutThemeInput>
  }

  export type ContentSectionUpdateWithWhereUniqueWithoutThemeInput = {
    where: ContentSectionWhereUniqueInput
    data: XOR<ContentSectionUpdateWithoutThemeInput, ContentSectionUncheckedUpdateWithoutThemeInput>
  }

  export type ContentSectionUpdateManyWithWhereWithoutThemeInput = {
    where: ContentSectionScalarWhereInput
    data: XOR<ContentSectionUpdateManyMutationInput, ContentSectionUncheckedUpdateManyWithoutThemeInput>
  }

  export type ContentSectionScalarWhereInput = {
    AND?: ContentSectionScalarWhereInput | ContentSectionScalarWhereInput[]
    OR?: ContentSectionScalarWhereInput[]
    NOT?: ContentSectionScalarWhereInput | ContentSectionScalarWhereInput[]
    id?: IntFilter<"ContentSection"> | number
    name?: StringFilter<"ContentSection"> | string
    type?: StringFilter<"ContentSection"> | string
    title?: StringFilter<"ContentSection"> | string
    subtitle?: StringNullableFilter<"ContentSection"> | string | null
    content?: JsonFilter<"ContentSection">
    isActive?: BoolFilter<"ContentSection"> | boolean
    order?: IntFilter<"ContentSection"> | number
    createdAt?: DateTimeFilter<"ContentSection"> | Date | string
    updatedAt?: DateTimeFilter<"ContentSection"> | Date | string
    themeId?: IntFilter<"ContentSection"> | number
  }

  export type BannerUpsertWithWhereUniqueWithoutThemeInput = {
    where: BannerWhereUniqueInput
    update: XOR<BannerUpdateWithoutThemeInput, BannerUncheckedUpdateWithoutThemeInput>
    create: XOR<BannerCreateWithoutThemeInput, BannerUncheckedCreateWithoutThemeInput>
  }

  export type BannerUpdateWithWhereUniqueWithoutThemeInput = {
    where: BannerWhereUniqueInput
    data: XOR<BannerUpdateWithoutThemeInput, BannerUncheckedUpdateWithoutThemeInput>
  }

  export type BannerUpdateManyWithWhereWithoutThemeInput = {
    where: BannerScalarWhereInput
    data: XOR<BannerUpdateManyMutationInput, BannerUncheckedUpdateManyWithoutThemeInput>
  }

  export type BannerScalarWhereInput = {
    AND?: BannerScalarWhereInput | BannerScalarWhereInput[]
    OR?: BannerScalarWhereInput[]
    NOT?: BannerScalarWhereInput | BannerScalarWhereInput[]
    id?: IntFilter<"Banner"> | number
    title?: StringFilter<"Banner"> | string
    content?: StringFilter<"Banner"> | string
    type?: StringFilter<"Banner"> | string
    backgroundColor?: StringFilter<"Banner"> | string
    textColor?: StringFilter<"Banner"> | string
    isActive?: BoolFilter<"Banner"> | boolean
    startDate?: DateTimeNullableFilter<"Banner"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Banner"> | Date | string | null
    link?: StringNullableFilter<"Banner"> | string | null
    linkText?: StringNullableFilter<"Banner"> | string | null
    position?: StringFilter<"Banner"> | string
    createdAt?: DateTimeFilter<"Banner"> | Date | string
    updatedAt?: DateTimeFilter<"Banner"> | Date | string
    themeId?: IntFilter<"Banner"> | number
  }

  export type SocialLinkUpsertWithWhereUniqueWithoutThemeInput = {
    where: SocialLinkWhereUniqueInput
    update: XOR<SocialLinkUpdateWithoutThemeInput, SocialLinkUncheckedUpdateWithoutThemeInput>
    create: XOR<SocialLinkCreateWithoutThemeInput, SocialLinkUncheckedCreateWithoutThemeInput>
  }

  export type SocialLinkUpdateWithWhereUniqueWithoutThemeInput = {
    where: SocialLinkWhereUniqueInput
    data: XOR<SocialLinkUpdateWithoutThemeInput, SocialLinkUncheckedUpdateWithoutThemeInput>
  }

  export type SocialLinkUpdateManyWithWhereWithoutThemeInput = {
    where: SocialLinkScalarWhereInput
    data: XOR<SocialLinkUpdateManyMutationInput, SocialLinkUncheckedUpdateManyWithoutThemeInput>
  }

  export type SocialLinkScalarWhereInput = {
    AND?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
    OR?: SocialLinkScalarWhereInput[]
    NOT?: SocialLinkScalarWhereInput | SocialLinkScalarWhereInput[]
    id?: IntFilter<"SocialLink"> | number
    platform?: StringFilter<"SocialLink"> | string
    url?: StringFilter<"SocialLink"> | string
    icon?: StringFilter<"SocialLink"> | string
    isActive?: BoolFilter<"SocialLink"> | boolean
    createdAt?: DateTimeFilter<"SocialLink"> | Date | string
    updatedAt?: DateTimeFilter<"SocialLink"> | Date | string
    themeId?: IntFilter<"SocialLink"> | number
  }

  export type ContactInfoUpsertWithoutThemeInput = {
    update: XOR<ContactInfoUpdateWithoutThemeInput, ContactInfoUncheckedUpdateWithoutThemeInput>
    create: XOR<ContactInfoCreateWithoutThemeInput, ContactInfoUncheckedCreateWithoutThemeInput>
    where?: ContactInfoWhereInput
  }

  export type ContactInfoUpdateToOneWithWhereWithoutThemeInput = {
    where?: ContactInfoWhereInput
    data: XOR<ContactInfoUpdateWithoutThemeInput, ContactInfoUncheckedUpdateWithoutThemeInput>
  }

  export type ContactInfoUpdateWithoutThemeInput = {
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    workingHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactInfoUncheckedUpdateWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    workingHours?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SiteThemeCreateWithoutNavItemsInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    languages?: LanguageCreateNestedManyWithoutThemeInput
    contentSections?: ContentSectionCreateNestedManyWithoutThemeInput
    banners?: BannerCreateNestedManyWithoutThemeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutThemeInput
    contactInfo?: ContactInfoCreateNestedOneWithoutThemeInput
  }

  export type SiteThemeUncheckedCreateWithoutNavItemsInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    languages?: LanguageUncheckedCreateNestedManyWithoutThemeInput
    contentSections?: ContentSectionUncheckedCreateNestedManyWithoutThemeInput
    banners?: BannerUncheckedCreateNestedManyWithoutThemeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutThemeInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutThemeInput
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
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: LanguageUpdateManyWithoutThemeNestedInput
    contentSections?: ContentSectionUpdateManyWithoutThemeNestedInput
    banners?: BannerUpdateManyWithoutThemeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutThemeNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutThemeNestedInput
  }

  export type SiteThemeUncheckedUpdateWithoutNavItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: LanguageUncheckedUpdateManyWithoutThemeNestedInput
    contentSections?: ContentSectionUncheckedUpdateManyWithoutThemeNestedInput
    banners?: BannerUncheckedUpdateManyWithoutThemeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutThemeNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutThemeNestedInput
  }

  export type SiteThemeCreateWithoutLanguagesInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    navItems?: NavItemCreateNestedManyWithoutThemeInput
    contentSections?: ContentSectionCreateNestedManyWithoutThemeInput
    banners?: BannerCreateNestedManyWithoutThemeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutThemeInput
    contactInfo?: ContactInfoCreateNestedOneWithoutThemeInput
  }

  export type SiteThemeUncheckedCreateWithoutLanguagesInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    navItems?: NavItemUncheckedCreateNestedManyWithoutThemeInput
    contentSections?: ContentSectionUncheckedCreateNestedManyWithoutThemeInput
    banners?: BannerUncheckedCreateNestedManyWithoutThemeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutThemeInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutThemeInput
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
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUpdateManyWithoutThemeNestedInput
    contentSections?: ContentSectionUpdateManyWithoutThemeNestedInput
    banners?: BannerUpdateManyWithoutThemeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutThemeNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutThemeNestedInput
  }

  export type SiteThemeUncheckedUpdateWithoutLanguagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUncheckedUpdateManyWithoutThemeNestedInput
    contentSections?: ContentSectionUncheckedUpdateManyWithoutThemeNestedInput
    banners?: BannerUncheckedUpdateManyWithoutThemeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutThemeNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutThemeNestedInput
  }

  export type SiteThemeCreateWithoutContentSectionsInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    navItems?: NavItemCreateNestedManyWithoutThemeInput
    languages?: LanguageCreateNestedManyWithoutThemeInput
    banners?: BannerCreateNestedManyWithoutThemeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutThemeInput
    contactInfo?: ContactInfoCreateNestedOneWithoutThemeInput
  }

  export type SiteThemeUncheckedCreateWithoutContentSectionsInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    navItems?: NavItemUncheckedCreateNestedManyWithoutThemeInput
    languages?: LanguageUncheckedCreateNestedManyWithoutThemeInput
    banners?: BannerUncheckedCreateNestedManyWithoutThemeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutThemeInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutThemeInput
  }

  export type SiteThemeCreateOrConnectWithoutContentSectionsInput = {
    where: SiteThemeWhereUniqueInput
    create: XOR<SiteThemeCreateWithoutContentSectionsInput, SiteThemeUncheckedCreateWithoutContentSectionsInput>
  }

  export type SiteThemeUpsertWithoutContentSectionsInput = {
    update: XOR<SiteThemeUpdateWithoutContentSectionsInput, SiteThemeUncheckedUpdateWithoutContentSectionsInput>
    create: XOR<SiteThemeCreateWithoutContentSectionsInput, SiteThemeUncheckedCreateWithoutContentSectionsInput>
    where?: SiteThemeWhereInput
  }

  export type SiteThemeUpdateToOneWithWhereWithoutContentSectionsInput = {
    where?: SiteThemeWhereInput
    data: XOR<SiteThemeUpdateWithoutContentSectionsInput, SiteThemeUncheckedUpdateWithoutContentSectionsInput>
  }

  export type SiteThemeUpdateWithoutContentSectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUpdateManyWithoutThemeNestedInput
    languages?: LanguageUpdateManyWithoutThemeNestedInput
    banners?: BannerUpdateManyWithoutThemeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutThemeNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutThemeNestedInput
  }

  export type SiteThemeUncheckedUpdateWithoutContentSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUncheckedUpdateManyWithoutThemeNestedInput
    languages?: LanguageUncheckedUpdateManyWithoutThemeNestedInput
    banners?: BannerUncheckedUpdateManyWithoutThemeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutThemeNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutThemeNestedInput
  }

  export type SiteThemeCreateWithoutBannersInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    navItems?: NavItemCreateNestedManyWithoutThemeInput
    languages?: LanguageCreateNestedManyWithoutThemeInput
    contentSections?: ContentSectionCreateNestedManyWithoutThemeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutThemeInput
    contactInfo?: ContactInfoCreateNestedOneWithoutThemeInput
  }

  export type SiteThemeUncheckedCreateWithoutBannersInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    navItems?: NavItemUncheckedCreateNestedManyWithoutThemeInput
    languages?: LanguageUncheckedCreateNestedManyWithoutThemeInput
    contentSections?: ContentSectionUncheckedCreateNestedManyWithoutThemeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutThemeInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutThemeInput
  }

  export type SiteThemeCreateOrConnectWithoutBannersInput = {
    where: SiteThemeWhereUniqueInput
    create: XOR<SiteThemeCreateWithoutBannersInput, SiteThemeUncheckedCreateWithoutBannersInput>
  }

  export type SiteThemeUpsertWithoutBannersInput = {
    update: XOR<SiteThemeUpdateWithoutBannersInput, SiteThemeUncheckedUpdateWithoutBannersInput>
    create: XOR<SiteThemeCreateWithoutBannersInput, SiteThemeUncheckedCreateWithoutBannersInput>
    where?: SiteThemeWhereInput
  }

  export type SiteThemeUpdateToOneWithWhereWithoutBannersInput = {
    where?: SiteThemeWhereInput
    data: XOR<SiteThemeUpdateWithoutBannersInput, SiteThemeUncheckedUpdateWithoutBannersInput>
  }

  export type SiteThemeUpdateWithoutBannersInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUpdateManyWithoutThemeNestedInput
    languages?: LanguageUpdateManyWithoutThemeNestedInput
    contentSections?: ContentSectionUpdateManyWithoutThemeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutThemeNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutThemeNestedInput
  }

  export type SiteThemeUncheckedUpdateWithoutBannersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUncheckedUpdateManyWithoutThemeNestedInput
    languages?: LanguageUncheckedUpdateManyWithoutThemeNestedInput
    contentSections?: ContentSectionUncheckedUpdateManyWithoutThemeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutThemeNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutThemeNestedInput
  }

  export type SiteThemeCreateWithoutSocialLinksInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    navItems?: NavItemCreateNestedManyWithoutThemeInput
    languages?: LanguageCreateNestedManyWithoutThemeInput
    contentSections?: ContentSectionCreateNestedManyWithoutThemeInput
    banners?: BannerCreateNestedManyWithoutThemeInput
    contactInfo?: ContactInfoCreateNestedOneWithoutThemeInput
  }

  export type SiteThemeUncheckedCreateWithoutSocialLinksInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    navItems?: NavItemUncheckedCreateNestedManyWithoutThemeInput
    languages?: LanguageUncheckedCreateNestedManyWithoutThemeInput
    contentSections?: ContentSectionUncheckedCreateNestedManyWithoutThemeInput
    banners?: BannerUncheckedCreateNestedManyWithoutThemeInput
    contactInfo?: ContactInfoUncheckedCreateNestedOneWithoutThemeInput
  }

  export type SiteThemeCreateOrConnectWithoutSocialLinksInput = {
    where: SiteThemeWhereUniqueInput
    create: XOR<SiteThemeCreateWithoutSocialLinksInput, SiteThemeUncheckedCreateWithoutSocialLinksInput>
  }

  export type SiteThemeUpsertWithoutSocialLinksInput = {
    update: XOR<SiteThemeUpdateWithoutSocialLinksInput, SiteThemeUncheckedUpdateWithoutSocialLinksInput>
    create: XOR<SiteThemeCreateWithoutSocialLinksInput, SiteThemeUncheckedCreateWithoutSocialLinksInput>
    where?: SiteThemeWhereInput
  }

  export type SiteThemeUpdateToOneWithWhereWithoutSocialLinksInput = {
    where?: SiteThemeWhereInput
    data: XOR<SiteThemeUpdateWithoutSocialLinksInput, SiteThemeUncheckedUpdateWithoutSocialLinksInput>
  }

  export type SiteThemeUpdateWithoutSocialLinksInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUpdateManyWithoutThemeNestedInput
    languages?: LanguageUpdateManyWithoutThemeNestedInput
    contentSections?: ContentSectionUpdateManyWithoutThemeNestedInput
    banners?: BannerUpdateManyWithoutThemeNestedInput
    contactInfo?: ContactInfoUpdateOneWithoutThemeNestedInput
  }

  export type SiteThemeUncheckedUpdateWithoutSocialLinksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUncheckedUpdateManyWithoutThemeNestedInput
    languages?: LanguageUncheckedUpdateManyWithoutThemeNestedInput
    contentSections?: ContentSectionUncheckedUpdateManyWithoutThemeNestedInput
    banners?: BannerUncheckedUpdateManyWithoutThemeNestedInput
    contactInfo?: ContactInfoUncheckedUpdateOneWithoutThemeNestedInput
  }

  export type SiteThemeCreateWithoutContactInfoInput = {
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    navItems?: NavItemCreateNestedManyWithoutThemeInput
    languages?: LanguageCreateNestedManyWithoutThemeInput
    contentSections?: ContentSectionCreateNestedManyWithoutThemeInput
    banners?: BannerCreateNestedManyWithoutThemeInput
    socialLinks?: SocialLinkCreateNestedManyWithoutThemeInput
  }

  export type SiteThemeUncheckedCreateWithoutContactInfoInput = {
    id?: number
    name: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    siteTitle?: string | null
    siteDescription?: string | null
    siteLogo?: string | null
    favicon?: string | null
    primaryColor?: string | null
    secondaryColor?: string | null
    accentColor?: string | null
    backgroundColor?: string | null
    textColor?: string | null
    linkColor?: string | null
    bodyFont?: string | null
    headingFont?: string | null
    baseFontSize?: string | null
    headingFontSize?: string | null
    containerWidth?: string | null
    contentWidth?: string | null
    sidebarWidth?: string | null
    navbarBackground?: string | null
    navbarTextColor?: string | null
    navbarLogo?: string | null
    navbarHeight?: string | null
    navbarPosition?: string | null
    navbarShowSearch?: boolean
    navbarShowLanguage?: boolean
    navbarShowUserMenu?: boolean
    navbarShowNotifications?: boolean
    footerBackground?: string | null
    footerTextColor?: string | null
    footerLogo?: string | null
    footerCopyright?: string | null
    footerShowSocial?: boolean
    footerShowNewsletter?: boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: string | null
    heroBackground?: string | null
    heroBackgroundImage?: string | null
    heroTextColor?: string | null
    heroTitle?: string | null
    heroSubtitle?: string | null
    heroButtonText?: string | null
    heroButtonLink?: string | null
    heroButtonColor?: string | null
    heroOverlayColor?: string | null
    heroOverlayOpacity?: number | null
    buttonPrimaryColor?: string | null
    buttonSecondaryColor?: string | null
    buttonTextColor?: string | null
    buttonBorderRadius?: string | null
    buttonPadding?: string | null
    inputBackground?: string | null
    inputBorderColor?: string | null
    inputTextColor?: string | null
    inputFocusColor?: string | null
    inputBorderRadius?: string | null
    cardBackground?: string | null
    cardBorderColor?: string | null
    cardBorderRadius?: string | null
    cardShadow?: string | null
    cardPadding?: string | null
    successColor?: string | null
    warningColor?: string | null
    errorColor?: string | null
    infoColor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    metaKeywords?: string | null
    googleAnalyticsId?: string | null
    googleTagManagerId?: string | null
    facebookPixelId?: string | null
    navItems?: NavItemUncheckedCreateNestedManyWithoutThemeInput
    languages?: LanguageUncheckedCreateNestedManyWithoutThemeInput
    contentSections?: ContentSectionUncheckedCreateNestedManyWithoutThemeInput
    banners?: BannerUncheckedCreateNestedManyWithoutThemeInput
    socialLinks?: SocialLinkUncheckedCreateNestedManyWithoutThemeInput
  }

  export type SiteThemeCreateOrConnectWithoutContactInfoInput = {
    where: SiteThemeWhereUniqueInput
    create: XOR<SiteThemeCreateWithoutContactInfoInput, SiteThemeUncheckedCreateWithoutContactInfoInput>
  }

  export type SiteThemeUpsertWithoutContactInfoInput = {
    update: XOR<SiteThemeUpdateWithoutContactInfoInput, SiteThemeUncheckedUpdateWithoutContactInfoInput>
    create: XOR<SiteThemeCreateWithoutContactInfoInput, SiteThemeUncheckedCreateWithoutContactInfoInput>
    where?: SiteThemeWhereInput
  }

  export type SiteThemeUpdateToOneWithWhereWithoutContactInfoInput = {
    where?: SiteThemeWhereInput
    data: XOR<SiteThemeUpdateWithoutContactInfoInput, SiteThemeUncheckedUpdateWithoutContactInfoInput>
  }

  export type SiteThemeUpdateWithoutContactInfoInput = {
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUpdateManyWithoutThemeNestedInput
    languages?: LanguageUpdateManyWithoutThemeNestedInput
    contentSections?: ContentSectionUpdateManyWithoutThemeNestedInput
    banners?: BannerUpdateManyWithoutThemeNestedInput
    socialLinks?: SocialLinkUpdateManyWithoutThemeNestedInput
  }

  export type SiteThemeUncheckedUpdateWithoutContactInfoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    siteTitle?: NullableStringFieldUpdateOperationsInput | string | null
    siteDescription?: NullableStringFieldUpdateOperationsInput | string | null
    siteLogo?: NullableStringFieldUpdateOperationsInput | string | null
    favicon?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    secondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    accentColor?: NullableStringFieldUpdateOperationsInput | string | null
    backgroundColor?: NullableStringFieldUpdateOperationsInput | string | null
    textColor?: NullableStringFieldUpdateOperationsInput | string | null
    linkColor?: NullableStringFieldUpdateOperationsInput | string | null
    bodyFont?: NullableStringFieldUpdateOperationsInput | string | null
    headingFont?: NullableStringFieldUpdateOperationsInput | string | null
    baseFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    headingFontSize?: NullableStringFieldUpdateOperationsInput | string | null
    containerWidth?: NullableStringFieldUpdateOperationsInput | string | null
    contentWidth?: NullableStringFieldUpdateOperationsInput | string | null
    sidebarWidth?: NullableStringFieldUpdateOperationsInput | string | null
    navbarBackground?: NullableStringFieldUpdateOperationsInput | string | null
    navbarTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    navbarLogo?: NullableStringFieldUpdateOperationsInput | string | null
    navbarHeight?: NullableStringFieldUpdateOperationsInput | string | null
    navbarPosition?: NullableStringFieldUpdateOperationsInput | string | null
    navbarShowSearch?: BoolFieldUpdateOperationsInput | boolean
    navbarShowLanguage?: BoolFieldUpdateOperationsInput | boolean
    navbarShowUserMenu?: BoolFieldUpdateOperationsInput | boolean
    navbarShowNotifications?: BoolFieldUpdateOperationsInput | boolean
    footerBackground?: NullableStringFieldUpdateOperationsInput | string | null
    footerTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    footerLogo?: NullableStringFieldUpdateOperationsInput | string | null
    footerCopyright?: NullableStringFieldUpdateOperationsInput | string | null
    footerShowSocial?: BoolFieldUpdateOperationsInput | boolean
    footerShowNewsletter?: BoolFieldUpdateOperationsInput | boolean
    footerColumns?: NullableJsonNullValueInput | InputJsonValue
    heroDesign?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackground?: NullableStringFieldUpdateOperationsInput | string | null
    heroBackgroundImage?: NullableStringFieldUpdateOperationsInput | string | null
    heroTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroTitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroSubtitle?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonText?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonLink?: NullableStringFieldUpdateOperationsInput | string | null
    heroButtonColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayColor?: NullableStringFieldUpdateOperationsInput | string | null
    heroOverlayOpacity?: NullableFloatFieldUpdateOperationsInput | number | null
    buttonPrimaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonSecondaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    buttonBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    buttonPadding?: NullableStringFieldUpdateOperationsInput | string | null
    inputBackground?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputTextColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputFocusColor?: NullableStringFieldUpdateOperationsInput | string | null
    inputBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardBackground?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderColor?: NullableStringFieldUpdateOperationsInput | string | null
    cardBorderRadius?: NullableStringFieldUpdateOperationsInput | string | null
    cardShadow?: NullableStringFieldUpdateOperationsInput | string | null
    cardPadding?: NullableStringFieldUpdateOperationsInput | string | null
    successColor?: NullableStringFieldUpdateOperationsInput | string | null
    warningColor?: NullableStringFieldUpdateOperationsInput | string | null
    errorColor?: NullableStringFieldUpdateOperationsInput | string | null
    infoColor?: NullableStringFieldUpdateOperationsInput | string | null
    metaTitle?: NullableStringFieldUpdateOperationsInput | string | null
    metaDescription?: NullableStringFieldUpdateOperationsInput | string | null
    metaKeywords?: NullableStringFieldUpdateOperationsInput | string | null
    googleAnalyticsId?: NullableStringFieldUpdateOperationsInput | string | null
    googleTagManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    facebookPixelId?: NullableStringFieldUpdateOperationsInput | string | null
    navItems?: NavItemUncheckedUpdateManyWithoutThemeNestedInput
    languages?: LanguageUncheckedUpdateManyWithoutThemeNestedInput
    contentSections?: ContentSectionUncheckedUpdateManyWithoutThemeNestedInput
    banners?: BannerUncheckedUpdateManyWithoutThemeNestedInput
    socialLinks?: SocialLinkUncheckedUpdateManyWithoutThemeNestedInput
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

  export type ContentSectionCreateManyThemeInput = {
    id?: number
    name: string
    type: string
    title: string
    subtitle?: string | null
    content: JsonNullValueInput | InputJsonValue
    isActive?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BannerCreateManyThemeInput = {
    id?: number
    title: string
    content: string
    type?: string
    backgroundColor: string
    textColor: string
    isActive?: boolean
    startDate?: Date | string | null
    endDate?: Date | string | null
    link?: string | null
    linkText?: string | null
    position?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialLinkCreateManyThemeInput = {
    id?: number
    platform: string
    url: string
    icon: string
    isActive?: boolean
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

  export type ContentSectionUpdateWithoutThemeInput = {
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentSectionUncheckedUpdateWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContentSectionUncheckedUpdateManyWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    subtitle?: NullableStringFieldUpdateOperationsInput | string | null
    content?: JsonNullValueInput | InputJsonValue
    isActive?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUpdateWithoutThemeInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkText?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkText?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BannerUncheckedUpdateManyWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    textColor?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    linkText?: NullableStringFieldUpdateOperationsInput | string | null
    position?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUpdateWithoutThemeInput = {
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialLinkUncheckedUpdateManyWithoutThemeInput = {
    id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
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