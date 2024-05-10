"use strict";(self.webpackChunknew_website=self.webpackChunknew_website||[]).push([[6136],{26136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const i={title:"Announcing Disjoint Unions","short-title":"Disjoint Unions",author:"Avik Chaudhuri",hide_table_of_contents:!0},s=void 0,r={permalink:"/blog/2015/07/03/Disjoint-Unions",source:"@site/blog/2015-07-03-Disjoint-Unions.md",title:"Announcing Disjoint Unions",description:"Sometimes programs need to deal with different kinds of data all at once, where the shape of the data can be different based on what kind of data the code is looking at. This kind of programming is so common in functional programming languages that almost all such languages come with a way of:",date:"2015-07-03T00:00:00.000Z",formattedDate:"July 3, 2015",tags:[],hasTruncateMarker:!0,authors:[{name:"Avik Chaudhuri"}],frontMatter:{title:"Announcing Disjoint Unions","short-title":"Disjoint Unions",author:"Avik Chaudhuri",hide_table_of_contents:!0},prevItem:{title:"Version-0.14.0",permalink:"/blog/2015/07/29/Version-0.14.0"},nextItem:{title:"Announcing Bounded Polymorphism",permalink:"/blog/2015/03/12/Bounded-Polymorphism"}},l={authorsImageUrls:[void 0]},d=[],m={toc:d};function c(e){let{components:n,...t}=e;return(0,o.mdx)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Sometimes programs need to deal with different kinds of data all at once, where the shape of the data can be different based on what kind of data the code is looking at. This kind of programming is so common in functional programming languages that almost all such languages come with a way of:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Specifying such data by a set of disjoint cases, distinguished by \u201ctags\u201d, where each tag is associated with a different \u201crecord\u201d of properties. (These descriptions are called \u201cdisjoint union\u201d or \u201cvariant\u201d types.)"),(0,o.mdx)("li",{parentName:"ul"},"Doing case analysis on such data, by checking tags and then directly accessing the associated record of properties. (The common way to do such case analysis is by pattern matching.)")),(0,o.mdx)("p",null,"Examples of programs that analyze or transform such data range from compilers working with abstract syntax trees, to operations that may return exceptional values,  with much more in between!"),(0,o.mdx)("p",null,'As of Flow 0.13.1 it is now possible to program in this style in JavaScript in a type-safe manner. You can define a disjoint union of object types and do case analysis on objects of that type by switching on the value of some common property (called a "sentinel") in those object types.'),(0,o.mdx)("p",null,"Flow's syntax for disjoint unions looks like:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},'type BinaryTree =\n  { kind: "leaf", value: number } |\n  { kind: "branch", left: BinaryTree, right: BinaryTree }\n\nfunction sumLeaves(tree: BinaryTree): number {\n  if (tree.kind === "leaf") {\n    return tree.value;\n  } else {\n    return sumLeaves(tree.left) + sumLeaves(tree.right);\n  }\n}\n')))}c.isMDXComponent=!0}}]);