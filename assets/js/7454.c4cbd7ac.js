"use strict";(self.webpackChunknew_website=self.webpackChunknew_website||[]).push([[7454],{87454:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var t=o(87462),a=(o(67294),o(3905));const r={title:"Announcing Bounded Polymorphism","short-title":"Bounded Polymorphism",author:"Avik Chaudhuri",hide_table_of_contents:!0},s=void 0,i={permalink:"/blog/2015/03/12/Bounded-Polymorphism",source:"@site/blog/2015-03-12-Bounded-Polymorphism.md",title:"Announcing Bounded Polymorphism",description:"As of Flow 0.5.0, you can define polymorphic functions and classes with bounds on their type parameters. This is extremely useful for writing functions and classes that need some constraints on their type parameters. Flow's bounded polymorphism syntax looks like",date:"2015-03-12T00:00:00.000Z",formattedDate:"March 12, 2015",tags:[],hasTruncateMarker:!0,authors:[{name:"Avik Chaudhuri"}],frontMatter:{title:"Announcing Bounded Polymorphism","short-title":"Bounded Polymorphism",author:"Avik Chaudhuri",hide_table_of_contents:!0},prevItem:{title:"Announcing Disjoint Unions",permalink:"/blog/2015/07/03/Disjoint-Unions"},nextItem:{title:"Announcing Flow Comments",permalink:"/blog/2015/02/20/Flow-Comments"}},l={authorsImageUrls:[void 0]},p=[{value:"The problem",id:"the-problem",level:2},{value:"The solution",id:"the-solution",level:2},{value:"Why we built this",id:"why-we-built-this",level:2},{value:"Transformations",id:"transformations",level:2}],m={toc:p};function d(e){let{components:n,...o}=e;return(0,a.mdx)("wrapper",(0,t.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"As of Flow 0.5.0, you can define polymorphic functions and classes with bounds on their type parameters. This is extremely useful for writing functions and classes that need some constraints on their type parameters. Flow's bounded polymorphism syntax looks like"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},"class BagOfBones<T: Bone> { ... }\nfunction eat<T: Food>(meal: T): Indigestion<T> { ... }\n")),(0,a.mdx)("h2",{id:"the-problem"},"The problem"),(0,a.mdx)("p",null,"Consider the following code that defines a polymorphic function in Flow:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},"function fooBad<T>(obj: T): T {\n  console.log(Math.abs(obj.x));\n  return obj;\n}\n")),(0,a.mdx)("p",null,"This code does not (and should not!) type check. Not all values ",(0,a.mdx)("inlineCode",{parentName:"p"},"obj: T")," have a property ",(0,a.mdx)("inlineCode",{parentName:"p"},"x"),", let alone a property ",(0,a.mdx)("inlineCode",{parentName:"p"},"x")," that is a ",(0,a.mdx)("inlineCode",{parentName:"p"},"number"),", given the additional requirement imposed by ",(0,a.mdx)("inlineCode",{parentName:"p"},"Math.abs()"),"."),(0,a.mdx)("p",null,"But what if you wanted ",(0,a.mdx)("inlineCode",{parentName:"p"},"T")," to not range over all types, but instead over only the types of objects with an ",(0,a.mdx)("inlineCode",{parentName:"p"},"x")," property that has the type ",(0,a.mdx)("inlineCode",{parentName:"p"},"number"),"? Intuitively, given that condition, the body should type check. Unfortunately, the only way you could enforce this condition prior to Flow 0.5.0 was by giving up on polymorphism entirely! For example you could write:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},"// Old lame workaround\nfunction fooStillBad(obj: { x: number }): {x: number } {\n  console.log(Math.abs(obj.x));\n  return obj;\n}\n")),(0,a.mdx)("p",null,"But while this change would make the body type check, it would cause Flow to lose information across call sites. For example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},'// The return type of fooStillBad() is {x: number}\n// so Flow thinks result has the type {x: number}\nvar result = fooStillBad({x: 42, y: "oops"});\n\n// This will be an error since result\'s type\n// doesn\'t have a property "y"\nvar test: {x: number; y: string} = result;\n')),(0,a.mdx)("h2",{id:"the-solution"},"The solution"),(0,a.mdx)("p",null,"As of version 0.5.0, such typing problems can be solved elegantly using bounded polymorphism. Type parameters such as ",(0,a.mdx)("inlineCode",{parentName:"p"},"T")," can specify bounds that constrain the types that the type parameters range over. For example, we can write:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},"function fooGood<T: { x: number }>(obj: T): T {\n  console.log(Math.abs(obj.x));\n  return obj;\n}\n")),(0,a.mdx)("p",null,"Now the body type checks under the assumption that ",(0,a.mdx)("inlineCode",{parentName:"p"},"T")," is a subtype of ",(0,a.mdx)("inlineCode",{parentName:"p"},"{ x: number }"),". Furthermore, no information is lost across call sites. Using the example from above:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},'// With bounded polymorphism, Flow knows the return\n// type is {x: number; y: string}\nvar result = fooGood({x: 42, y: "yay"});\n\n// This works!\nvar test: {x: number; y: string} = result;\n')),(0,a.mdx)("p",null,"Of course, polymorphic classes may also specify bounds. For example, the following code type checks:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},"class Store<T: { x: number }> {\n  obj: T;\n  constructor(obj: T) { this.obj = obj; }\n  foo() { console.log(Math.abs(this.obj.x)); }\n}\n")),(0,a.mdx)("p",null,"Instantiations of the class are appropriately constrained. If you write"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},'var store = new Store({x: 42, y: "hi"});\n')),(0,a.mdx)("p",null,"Then ",(0,a.mdx)("inlineCode",{parentName:"p"},"store.obj")," has type ",(0,a.mdx)("inlineCode",{parentName:"p"},"{x: number; y: string}"),"."),(0,a.mdx)("p",null,"Any type may be used as a type parameter's bound. The type does not need to be an object type (as in the examples above). It may even be another type parameter that is in scope. For example, consider adding the following method to the above ",(0,a.mdx)("inlineCode",{parentName:"p"},"Store")," class:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},"class Store<T: { x: number }> {\n  ...\n  bar<U: T>(obj: U): U {\n    this.obj = obj;\n    console.log(Math.abs(obj.x));\n    return obj;\n  }\n}\n")),(0,a.mdx)("p",null,"Since ",(0,a.mdx)("inlineCode",{parentName:"p"},"U")," is a subtype of ",(0,a.mdx)("inlineCode",{parentName:"p"},"T"),", the method body type checks (as you may expect, ",(0,a.mdx)("inlineCode",{parentName:"p"},"U")," must also satisfy ",(0,a.mdx)("inlineCode",{parentName:"p"},"T"),"'s bound, by transitivity of subtyping). Now the following code type checks:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},'  // store is a Store<{x: number; y: string}>\n  var store = new Store({x: 42, y: "yay"});\n\n  var result = store.bar({x: 0, y: "hello", z: "world"});\n\n  // This works!\n  var test: {x: number; y: string; z: string } = result;\n')),(0,a.mdx)("p",null,"Also, in a polymorphic definition with multiple type parameters, any type parameter may appear in the bound of any following type parameter. This is useful for type checking examples like the following:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-JavaScript"},"function copyArray<T, S: T>(from: Array<S>, to: Array<T>) {\n  from.forEach(elem => to.push(elem));\n}\n")),(0,a.mdx)("h2",{id:"why-we-built-this"},"Why we built this"),(0,a.mdx)("p",null,"The addition of bounded polymorphism significantly increases the expressiveness of Flow's type system, by enabling signatures and definitions to specify relationships between their type parameters, without having to sacrifice the benefits of generics. We expect that the increased expressiveness will be particularly useful to library writers, and will also allow us to write better declarations for framework APIs such as those provided by React."),(0,a.mdx)("h2",{id:"transformations"},"Transformations"),(0,a.mdx)("p",null,"Like type annotations and other Flow features, polymorphic function and class definitions need to be transformed before the code can be run. The transforms are available in react-tools ",(0,a.mdx)("inlineCode",{parentName:"p"},"0.13.0"),", which was recently released"))}d.isMDXComponent=!0}}]);