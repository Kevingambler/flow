"use strict";(self.webpackChunknew_website=self.webpackChunknew_website||[]).push([[4991],{94991:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=t(87462),a=(t(67294),t(3905));t(45475);const o={title:".flowconfig [declarations]",slug:"/config/declarations"},r=void 0,l={unversionedId:"config/declarations",id:"config/declarations",title:".flowconfig [declarations]",description:"Often third-party libraries have broken type definitions or have type",source:"@site/docs/config/declarations.md",sourceDirName:"config",slug:"/config/declarations",permalink:"/en/docs/config/declarations",draft:!1,editUrl:"https://github.com/facebook/flow/edit/main/website/docs/config/declarations.md",tags:[],version:"current",frontMatter:{title:".flowconfig [declarations]",slug:"/config/declarations"},sidebar:"docsSidebar",previous:{title:".flowconfig [untyped]",permalink:"/en/docs/config/untyped"},next:{title:".flowconfig [libs]",permalink:"/en/docs/config/libs"}},d={},s=[],c={toc:s};function p(e){let{components:n,...t}=e;return(0,a.mdx)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Often third-party libraries have broken type definitions or have type\ndefinitions only compatible with a certain version of Flow. In those cases it\nmay be useful to use type information from the third-party libraries without\ntypechecking their contents."),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"[declarations]")," section in a ",(0,a.mdx)("inlineCode",{parentName:"p"},".flowconfig")," file tells Flow to parse files\nmatching the specified regular expressions in ",(0,a.mdx)("em",{parentName:"p"},"declaration mode"),". In declaration\nmode the code is not typechecked. However, the signatures of functions, classes,\netc are extracted and used by the typechecker when checking other code."),(0,a.mdx)("p",null,"Conceptually one can think of declaration mode as if Flow still typechecks the\nfiles but acts as if there is a ",(0,a.mdx)("inlineCode",{parentName:"p"},"$FlowFixMe")," comment on every line."),(0,a.mdx)("p",null,"See also ",(0,a.mdx)("a",{parentName:"p",href:"../untyped"},(0,a.mdx)("inlineCode",{parentName:"a"},"[untyped]"))," for not typechecking files, and instead using ",(0,a.mdx)("inlineCode",{parentName:"p"},"any")," for all contents."),(0,a.mdx)("p",null,"Things to keep in mind:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Declaration mode should only be used for existing third-party code. You\nshould never use this for code under your control."),(0,a.mdx)("li",{parentName:"ol"},"These are ",(0,a.mdx)("a",{parentName:"li",href:"http://caml.inria.fr/pub/docs/manual-ocaml/libref/Str.html#TYPEregexp"},"OCaml regular expressions"),"."),(0,a.mdx)("li",{parentName:"ol"},"These regular expressions match against absolute paths. They probably should\nstart with ",(0,a.mdx)("inlineCode",{parentName:"li"},".*"))),(0,a.mdx)("p",null,"An example ",(0,a.mdx)("inlineCode",{parentName:"p"},"[declarations]")," section might look like:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"[declarations]\n.*/third_party/.*\n.*/src/\\(foo\\|bar\\)/.*\n.*\\.decl\\.js\n")),(0,a.mdx)("p",null,"This ",(0,a.mdx)("inlineCode",{parentName:"p"},"[declarations]")," section will parse in declaration mode:"),(0,a.mdx)("ol",null,(0,a.mdx)("li",{parentName:"ol"},"Any file or directory under a directory named ",(0,a.mdx)("inlineCode",{parentName:"li"},"third_party")),(0,a.mdx)("li",{parentName:"ol"},"Any file or directory under ",(0,a.mdx)("inlineCode",{parentName:"li"},".*/src/foo")," or under ",(0,a.mdx)("inlineCode",{parentName:"li"},".*/src/bar")),(0,a.mdx)("li",{parentName:"ol"},"Any file that ends with the extension ",(0,a.mdx)("inlineCode",{parentName:"li"},".decl.js"))),(0,a.mdx)("p",null,"You may use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"<PROJECT_ROOT>")," placeholder in your regular expressions.\nAt runtime, Flow will treat the placeholder as if it were the absolute\npath to the project's root directory. This is useful for writing regular\nexpressions that are relative rather than absolute."),(0,a.mdx)("p",null,"For example, you can write:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"[declarations]\n<PROJECT_ROOT>/third_party/.*\n")),(0,a.mdx)("p",null,"Which would parse in declaration mode any file or directory under the directory\nnamed ",(0,a.mdx)("inlineCode",{parentName:"p"},"third_party/")," within the project root. However, unlike the previous\nexample's ",(0,a.mdx)("inlineCode",{parentName:"p"},".*/third_party/.*"),", it would NOT parse files or directories under\ndirectories named ",(0,a.mdx)("inlineCode",{parentName:"p"},"third_party/"),", like ",(0,a.mdx)("inlineCode",{parentName:"p"},"src/third_party/"),"."))}p.isMDXComponent=!0}}]);