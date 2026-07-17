/* ========================================
   Academic Personal Homepage - Main JS
   Bilingual data + dynamic rendering
   ======================================== */

const DATA = {
  zh: {
    nav: {
      about: "个人简介",
      research: "研究方向",
      publications: "论文发表",
      patents: "专利",
      grants: "项目"
    },
    hero: {
      name: "秦锦成",
      title: "博士后",
      affiliation: "中国科学院上海硅酸盐研究所"
    },
    about: {
      heading: "个人简介",
      full: "秦锦成，中国科学院上海硅酸盐研究所博士后。2018年于中南大学粉末冶金研究院获工学学士学位，2023年于中国科学院大学获工学博士学位。主要研究方向为无机功能材料智能化研究，聚焦机器学习与大语言模型辅助材料性能预测和结构设计。以第一/通讯作者在 Nat. Electron.、Mater. Sci. Eng. R、npj Comput. Mater.、MGE Advances 等期刊发表论文15篇，主持中国博士后科学基金国家资助项目。担任 MGE Advances、AI for Science 期刊青年编委，多次在国际学术会议（如ICMAT 2025, Singapore）做邀请报告。",
      btn_more: "展开更多 ▼",
      btn_less: "收起 ▲"
    },
    research: {
      heading: "研究方向",
      items: [
        { title: "无机介质材料构效关系研究", desc: "" },
        { title: "机器学习辅助材料性能预测", desc: "" },
        { title: "大语言模型赋能新材料创制", desc: "" }
      ]
    },
    publications: {
      heading: "论文发表",
      allYears: "All Years",
      papers: [
        {
          "year": 2026,
          "authors": "Junlei Qi<sup>#</sup>, Yiying Chen<sup>#</sup>, <me>Jincheng Qin</me><sup>#</sup>, Bin Wei<sup>#</sup>, Hao Pan<sup>#</sup>, Tengfei Hu, Zhengqian Fu, Ruoyi Lv, Faqiang Zhang, Yujun Zhang, Wei Xu, Jianrong Zeng, Shangming He, Zhe Zhu, Hang Su, Zhao Yang, Zhenxiao Fu, Zhifu Liu, Ce-Wen Nan, Shujun Zhang<sup>*</sup>, Yuan-Hua Lin<sup>*</sup>",
          "me": "Jincheng Qin",
          "role": "共同一作",
          "title": "Temperature-stable high-κ oxides for ultra-miniaturized capacitors",
          "journal": "Nature Electronics",
          "detail": "2026, In Press",
          "roleType": "co-first"
        },
        {
          "year": 2026,
          "authors": "<me>Jincheng Qin</me><sup>*</sup>, Faqiang Zhang, Zhifu Liu<sup>*</sup>, Mingsheng Ma, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "第一作者, 通讯作者",
          "title": "Data-driven approaches for functional ceramics",
          "journal": "Materials Science and Engineering: R: Reports",
          "detail": "2026, 170: 101213",
          "roleType": "first-corresponding",
          "doi": "10.1016/j.mser.2026.101213"
        },
        {
          "year": 2026,
          "authors": "Mingyue Yang, Liangyu Mo, <me>Jincheng Qin</me><sup>*</sup>, Faqiang Zhang, Mingsheng Ma, Yongxiang Li, Zhifu Liu<sup>*</sup>",
          "me": "Jincheng Qin",
          "role": "通讯作者",
          "title": "Machine learning assisted τ<sub>f</sub> value prediction of ABO<sub>3</sub>-type microwave dielectric ceramics",
          "journal": "Journal of Materiomics",
          "detail": "2026, 12(1): 101117",
          "roleType": "corresponding",
          "doi": "10.1016/j.jmat.2025.101117"
        },
        {
          "year": 2026,
          "authors": "Mingyue Yang, Liangyu Mo, <me>Jincheng Qin</me><sup>*</sup>, Faqiang Zhang, Mingsheng Ma, Yongxiang Li, Zhifu Liu<sup>*</sup>",
          "me": "Jincheng Qin",
          "role": "通讯作者",
          "title": "Machine learning assisted τ<sub>f</sub> value prediction of ABO<sub>4</sub>-type microwave dielectric ceramics",
          "journal": "Materials Research Bulletin",
          "detail": "2026, 204: 114263",
          "roleType": "corresponding",
          "doi": "10.1016/j.materresbull.2026.114263"
        },
        {
          "year": 2026,
          "authors": "Tianyu Jiang, Faqiang Zhang, Jincheng Qin, Mingsheng Ma, Zhifu Liu",
          "me": "Jincheng Qin",
          "role": "",
          "title": "Physics-informed machine learning for lifetime prediction of multi-layer ceramic capacitors",
          "journal": "IEEE Transactions on Components, Packaging and Manufacturing Technology",
          "detail": "2026, Early Access",
          "roleType": "other",
          "doi": "10.1109/TCPMT.2026.3661614"
        },
        {
          "year": 2026,
          "authors": "莫良羽, <me>秦锦成</me><sup>*</sup>, 张发强, 刘志甫<sup>*</sup>, 马名生, 李永祥",
          "me": "Jincheng Qin",
          "role": "通讯作者",
          "title": "晶体图神经网络模型及其应用研究进展",
          "journal": "硅酸盐学报",
          "detail": "2026, In Press",
          "roleType": "corresponding"
        },
        {
          "year": 2026,
          "authors": "Hongyu Yang<sup>*</sup>, Chuntao Ou, Huan Liu, Lei Li<sup>*</sup>, Hua-ao Sun, Guangran Lin, Wanghuai Zhu, Feng Shi<sup>*</sup>, Weijia Guo<sup>*</sup>, Zhenxing Yue<sup>*</sup>, Ying Tang, Jie Li<sup>*</sup>, Huaicheng Xiang, Weishuang Fang, Huixing Lin, Junfeng Yang, Liang Fang<sup>*</sup>, Muhammad Adnan Munir, Jing Guo<sup>*</sup>, Kaixin Song<sup>*</sup>, Jincheng Qin, Zhifu Liu<sup>*</sup>, Zhichao Hu, Enzhu Li<sup>*</sup>, Hong Wang",
          "me": "Jincheng Qin",
          "role": "",
          "title": "A review of microwave dielectric ceramics: from fundamental mechanisms and property regulation to advanced preparation, applications, and data-driven discovery",
          "journal": "Journal of Advanced Ceramics",
          "detail": "2026, In Press",
          "roleType": "other",
          "doi": "10.26599/JAC.2026.9221320"
        },
        {
          "year": 2025,
          "authors": "<me>Jincheng Qin</me><sup>*</sup>, Faqiang Zhang, Zhifu Liu<sup>*</sup>, Mingsheng Ma, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "第一作者, 通讯作者",
          "title": "Multiobjective optimization of dielectric, thermal and mechanical properties of inorganic glasses utilizing explainable machine learning and genetic algorithm",
          "journal": "MGE Advances",
          "detail": "2025, 3(2): e70005",
          "roleType": "first-corresponding",
          "doi": "10.1002/mgea.70005"
        },
        {
          "year": 2025,
          "authors": "Liangyu Mo, <me>Jincheng Qin</me><sup>*</sup>, Mingsheng Ma, Zhifu Liu<sup>*</sup>",
          "me": "Jincheng Qin",
          "role": "通讯作者",
          "title": "Machine learning assisted Q×f value prediction of ABO<sub>4</sub>-type microwave dielectric ceramics",
          "journal": "Journal of Materiomics",
          "detail": "2025, 11(4): 100926",
          "roleType": "corresponding",
          "doi": "10.1016/j.jmat.2024.100926"
        },
        {
          "year": 2025,
          "authors": "Tianyu Jiang, <me>Jincheng Qin</me><sup>*</sup>, Faqiang Zhang, Mingcao Li, Xiaolian Yan, Mingsheng Ma, Yongxiang Li, Zhifu Liu",
          "me": "Jincheng Qin",
          "role": "通讯作者",
          "title": "Time to failure prediction for MLCCs: A machine learning approach based on leakage current data",
          "journal": "APL Machine Learning",
          "detail": "2025, 3: 026105",
          "roleType": "corresponding",
          "doi": "10.1063/5.0262717"
        },
        {
          "year": 2025,
          "authors": "<me>秦锦成</me>, 张发强, 刘志甫<sup>*</sup>, 马名生<sup>*</sup>, 李永祥",
          "me": "Jincheng Qin",
          "role": "第一作者",
          "title": "机器学习优化Clausius-Mossotti介电常数计算方程",
          "journal": "硅酸盐学报",
          "detail": "2025, 53(9): 2643-2650",
          "roleType": "first",
          "doi": "10.14062/j.issn.0454-5648.20250039"
        },
        {
          "year": 2025,
          "authors": "Haiwen Xi, Taolin Lv, Jingchen Qin, Mingsheng Ma, Jingyin Xie<sup>*</sup>, Shigang Lu, Zhifu Liu<sup>*</sup>",
          "me": "Jincheng Qin",
          "role": "",
          "title": "Prediction of lithium battery voltage and state of charge using a fusion of second-order RC equivalent circuit model and multi-head attention BiLSTM",
          "journal": "Applied Sciences",
          "detail": "2025, 15(6), 3011",
          "roleType": "other",
          "doi": "10.3390/app15063011"
        },
        {
          "year": 2023,
          "authors": "<me>Jincheng Qin</me>, Zhifu Liu<sup>*</sup>, Mingsheng Ma<sup>*</sup>, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "第一作者",
          "title": "Optimizing and extending ion dielectric polarizability database for microwave frequencies using machine learning methods",
          "journal": "npj Computational Materials",
          "detail": "2023, 9: 132",
          "roleType": "first",
          "doi": "10.1038/s41524-023-01093-6"
        },
        {
          "year": 2023,
          "authors": "秦锦成, 刘志甫<sup>*</sup>, 马名生<sup>*</sup>, 李永祥",
          "me": "Jincheng Qin",
          "role": "第一作者",
          "title": "数据驱动的微波介质陶瓷材料研究进展",
          "journal": "硅酸盐学报",
          "detail": "2023, 51(4): 921-933",
          "roleType": "first",
          "doi": "10.14062/j.issn.0454-5648.20220722"
        },
        {
          "year": 2022,
          "authors": "<me>Jincheng Qin</me>, Zhifu Liu<sup>*</sup>, Mingsheng Ma<sup>*</sup>, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "第一作者",
          "title": "Machine learning assisted materials design and discovery of low melting point inorganic oxides for low temperature co-fired ceramics applications",
          "journal": "ACS Sustainable Chemistry & Engineering",
          "detail": "2022, 10(4): 1554-1564",
          "roleType": "first",
          "doi": "10.1021/acssuschemeng.1c06983"
        },
        {
          "year": 2022,
          "authors": "<me>Jincheng Qin</me>, Zhifu Liu<sup>*</sup>, Mingsheng Ma<sup>*</sup>, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "第一作者",
          "title": "Crystal structure, lattice vibration and microwave dielectric properties of 3CaO·2SiO<sub>2</sub>·xCaF<sub>2</sub> (0 ≤ x ≤ 1.5) ceramics",
          "journal": "Ceramics International",
          "detail": "2022, 48(10): 14371-14377",
          "roleType": "first",
          "doi": "10.1016/j.ceramint.2022.01.328"
        },
        {
          "year": 2021,
          "authors": "<me>Jincheng Qin</me>, Zhifu Liu<sup>*</sup>, Mingsheng Ma, Yongxiang Li<sup>*</sup>",
          "me": "Jincheng Qin",
          "role": "第一作者",
          "title": "Machine learning approaches for permittivity prediction and rational design of microwave dielectric ceramics",
          "journal": "Journal of Materiomics",
          "detail": "2021, 7(6): 1284-1293",
          "roleType": "first",
          "doi": "10.1016/j.jmat.2021.02.012"
        },
        {
          "year": 2021,
          "authors": "<me>Jincheng Qin</me>, Zhifu Liu<sup>*</sup>, Mingsheng Ma<sup>*</sup>, Feng Liu, Ze-Ming Qi, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "第一作者",
          "title": "Structure and microwave dielectric properties of gillespite-type ACuSi<sub>4</sub>O<sub>10</sub> (A = Ca, Sr, Ba) ceramics and quantitative prediction of the Q×f value via machine learning",
          "journal": "ACS Applied Materials & Interfaces",
          "detail": "2021, 13(15): 17817-17826",
          "roleType": "first",
          "doi": "10.1021/acsami.1c01909"
        }
      ]
    },
    patents: {
      heading: "专利",
      items: [
        { title: "一种X8R型陶瓷电容器电介质材料及其制备方法", year: 2020, number: "CN114685161A", inventor: "顾燕，张发强，刘志甫，欧阳琪，秦锦成", detail: "申请号：CN114685161A | 申请日：2020-12-28", status: "未授权", statusClass: "unauthorized" },
        { title: "一种基于机器学习的MLCC剩余寿命预测方法", year: 2025, number: "CN120068408A", inventor: "刘志甫，蒋添宇，张发强，秦锦成，马名生", detail: "申请号：CN120068408A | 申请日：2025-01-23", status: "实质审查中", statusClass: "pending" }
      ]
    },
    grants: {
      heading: "项目",
      items: [
        { title: "中国博士后科学基金国家资助项目", role: "主持", detail: "" }
      ]
    }
  },

  en: {
    nav: {
      about: "About",
      research: "Research",
      publications: "Publications",
      patents: "Patents",
      grants: "Projects"
    },
    hero: {
      name: "Jincheng Qin",
      title: "Postdoctoral Fellow",
      affiliation: "Shanghai Institute of Ceramics, Chinese Academy of Sciences"
    },
    about: {
      heading: "About",
      full: "Jincheng Qin is a Postdoctoral Fellow at the Shanghai Institute of Ceramics, Chinese Academy of Sciences. He received his B.E. from the Powder Metallurgy Research Institute, Central South University in 2018, and his Ph.D. from the University of Chinese Academy of Sciences in 2023. His research focuses on the intelligent study of inorganic functional materials, with emphasis on machine learning and large language model-assisted performance prediction and structural design. He has published 15 papers as first/corresponding author in journals including Nat. Electron., Mater. Sci. Eng. R, npj Comput. Mater., and MGE Advances. He leads a project funded by the China Postdoctoral Science Foundation. He serves as a Youth Editorial Board member for MGE Advances and AI for Science, and has delivered invited talks at international conferences such as ICMAT 2025, Singapore.",
      btn_more: "Read More ▼",
      btn_less: "Show Less ▲"
    },
    research: {
      heading: "Research Interests",
      items: [
        { title: "Structure-Property Relationships of Inorganic Dielectric Materials", desc: "" },
        { title: "Machine Learning-Assisted Materials Property Prediction", desc: "" },
        { title: "Large Language Model-Empowered New Materials Discovery", desc: "" }
      ]
    },
    publications: {
      heading: "Publications",
      allYears: "All Years",
      papers: [
        {
          "year": 2026,
          "authors": "Junlei Qi<sup>#</sup>, Yiying Chen<sup>#</sup>, <me>Jincheng Qin</me><sup>#</sup>, Bin Wei<sup>#</sup>, Hao Pan<sup>#</sup>, Tengfei Hu, Zhengqian Fu, Ruoyi Lv, Faqiang Zhang, Yujun Zhang, Wei Xu, Jianrong Zeng, Shangming He, Zhe Zhu, Hang Su, Zhao Yang, Zhenxiao Fu, Zhifu Liu, Ce-Wen Nan, Shujun Zhang<sup>*</sup>, Yuan-Hua Lin<sup>*</sup>",
          "me": "Jincheng Qin",
          "role": "Co-first Author",
          "title": "Temperature-stable high-κ oxides for ultra-miniaturized capacitors",
          "journal": "Nature Electronics",
          "detail": "2026, In Press",
          "roleType": "co-first"
        },
        {
          "year": 2026,
          "authors": "<me>Jincheng Qin</me><sup>*</sup>, Faqiang Zhang, Zhifu Liu<sup>*</sup>, Mingsheng Ma, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "First Author, Corresponding Author",
          "title": "Data-driven approaches for functional ceramics",
          "journal": "Materials Science and Engineering: R: Reports",
          "detail": "2026, 170: 101213",
          "roleType": "first-corresponding",
          "doi": "10.1016/j.mser.2026.101213"
        },
        {
          "year": 2026,
          "authors": "Mingyue Yang, Liangyu Mo, <me>Jincheng Qin</me><sup>*</sup>, Faqiang Zhang, Mingsheng Ma, Yongxiang Li, Zhifu Liu<sup>*</sup>",
          "me": "Jincheng Qin",
          "role": "Corresponding Author",
          "title": "Machine learning assisted τ<sub>f</sub> value prediction of ABO<sub>3</sub>-type microwave dielectric ceramics",
          "journal": "Journal of Materiomics",
          "detail": "2026, 12(1): 101117",
          "roleType": "corresponding",
          "doi": "10.1016/j.jmat.2025.101117"
        },
        {
          "year": 2026,
          "authors": "Mingyue Yang, Liangyu Mo, <me>Jincheng Qin</me><sup>*</sup>, Faqiang Zhang, Mingsheng Ma, Yongxiang Li, Zhifu Liu<sup>*</sup>",
          "me": "Jincheng Qin",
          "role": "Corresponding Author",
          "title": "Machine learning assisted τ<sub>f</sub> value prediction of ABO<sub>4</sub>-type microwave dielectric ceramics",
          "journal": "Materials Research Bulletin",
          "detail": "2026, 204: 114263",
          "roleType": "corresponding",
          "doi": "10.1016/j.materresbull.2026.114263"
        },
        {
          "year": 2026,
          "authors": "Tianyu Jiang, Faqiang Zhang, Jincheng Qin, Mingsheng Ma, Zhifu Liu",
          "me": "Jincheng Qin",
          "role": "",
          "title": "Physics-informed machine learning for lifetime prediction of multi-layer ceramic capacitors",
          "journal": "IEEE Transactions on Components, Packaging and Manufacturing Technology",
          "detail": "2026, Early Access",
          "roleType": "other",
          "doi": "10.1109/TCPMT.2026.3661614"
        },
        {
          "year": 2026,
          "authors": "Liangyu Mo, <me>Jincheng Qin</me><sup>*</sup>, Faqiang Zhang, Zhifu Liu<sup>*</sup>, Mingsheng Ma, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "Corresponding Author",
          "title": "Crystal graph neural network models and their applications: a review",
          "journal": "Journal of the Chinese Ceramic Society",
          "detail": "2026, In Press",
          "roleType": "corresponding"
        },
        {
          "year": 2026,
          "authors": "Hongyu Yang<sup>*</sup>, Chuntao Ou, Huan Liu, Lei Li<sup>*</sup>, Hua-ao Sun, Guangran Lin, Wanghuai Zhu, Feng Shi<sup>*</sup>, Weijia Guo<sup>*</sup>, Zhenxing Yue<sup>*</sup>, Ying Tang, Jie Li<sup>*</sup>, Huaicheng Xiang, Weishuang Fang, Huixing Lin, Junfeng Yang, Liang Fang<sup>*</sup>, Muhammad Adnan Munir, Jing Guo<sup>*</sup>, Kaixin Song<sup>*</sup>, Jincheng Qin, Zhifu Liu<sup>*</sup>, Zhichao Hu, Enzhu Li<sup>*</sup>, Hong Wang",
          "me": "Jincheng Qin",
          "role": "",
          "title": "A review of microwave dielectric ceramics: from fundamental mechanisms and property regulation to advanced preparation, applications, and data-driven discovery",
          "journal": "Journal of Advanced Ceramics",
          "detail": "2026, In Press",
          "roleType": "other",
          "doi": "10.26599/JAC.2026.9221320"
        },
        {
          "year": 2025,
          "authors": "<me>Jincheng Qin</me><sup>*</sup>, Faqiang Zhang, Zhifu Liu<sup>*</sup>, Mingsheng Ma, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "First Author, Corresponding Author",
          "title": "Multiobjective optimization of dielectric, thermal and mechanical properties of inorganic glasses utilizing explainable machine learning and genetic algorithm",
          "journal": "MGE Advances",
          "detail": "2025, 3(2): e70005",
          "roleType": "first-corresponding",
          "doi": "10.1002/mgea.70005"
        },
        {
          "year": 2025,
          "authors": "Liangyu Mo, <me>Jincheng Qin</me><sup>*</sup>, Mingsheng Ma, Zhifu Liu<sup>*</sup>",
          "me": "Jincheng Qin",
          "role": "Corresponding Author",
          "title": "Machine learning assisted Q×f value prediction of ABO<sub>4</sub>-type microwave dielectric ceramics",
          "journal": "Journal of Materiomics",
          "detail": "2025, 11(4): 100926",
          "roleType": "corresponding",
          "doi": "10.1016/j.jmat.2024.100926"
        },
        {
          "year": 2025,
          "authors": "Tianyu Jiang, <me>Jincheng Qin</me><sup>*</sup>, Faqiang Zhang, Mingcao Li, Xiaolian Yan, Mingsheng Ma, Yongxiang Li, Zhifu Liu",
          "me": "Jincheng Qin",
          "role": "Corresponding Author",
          "title": "Time to failure prediction for MLCCs: A machine learning approach based on leakage current data",
          "journal": "APL Machine Learning",
          "detail": "2025, 3: 026105",
          "roleType": "corresponding",
          "doi": "10.1063/5.0262717"
        },
        {
          "year": 2025,
          "authors": "<me>Jincheng Qin</me>, Faqiang Zhang, Zhifu Liu<sup>*</sup>, Mingsheng Ma<sup>*</sup>, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "First Author",
          "title": "Machine learning-based optimization of the Clausius-Mossotti equation for dielectric constant calculation",
          "journal": "Journal of the Chinese Ceramic Society",
          "detail": "2025, 53(9): 2643-2650",
          "roleType": "first",
          "doi": "10.14062/j.issn.0454-5648.20250039"
        },
        {
          "year": 2025,
          "authors": "Haiwen Xi, Taolin Lv, Jingchen Qin, Mingsheng Ma, Jingyin Xie<sup>*</sup>, Shigang Lu, Zhifu Liu<sup>*</sup>",
          "me": "Jincheng Qin",
          "role": "",
          "title": "Prediction of lithium battery voltage and state of charge using a fusion of second-order RC equivalent circuit model and multi-head attention BiLSTM",
          "journal": "Applied Sciences",
          "detail": "2025, 15(6), 3011",
          "roleType": "other",
          "doi": "10.3390/app15063011"
        },
        {
          "year": 2023,
          "authors": "<me>Jincheng Qin</me>, Zhifu Liu<sup>*</sup>, Mingsheng Ma<sup>*</sup>, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "First Author",
          "title": "Optimizing and extending ion dielectric polarizability database for microwave frequencies using machine learning methods",
          "journal": "npj Computational Materials",
          "detail": "2023, 9: 132",
          "roleType": "first",
          "doi": "10.1038/s41524-023-01093-6"
        },
        {
          "year": 2023,
          "authors": "Jincheng Qin, Zhifu Liu<sup>*</sup>, Mingsheng Ma<sup>*</sup>, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "First Author",
          "title": "Data-driven advances in microwave dielectric ceramic materials",
          "journal": "Journal of the Chinese Ceramic Society",
          "detail": "2023, 51(4): 921-933",
          "roleType": "first",
          "doi": "10.14062/j.issn.0454-5648.20220722"
        },
        {
          "year": 2022,
          "authors": "<me>Jincheng Qin</me>, Zhifu Liu<sup>*</sup>, Mingsheng Ma<sup>*</sup>, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "First Author",
          "title": "Machine learning assisted materials design and discovery of low melting point inorganic oxides for low temperature co-fired ceramics applications",
          "journal": "ACS Sustainable Chemistry & Engineering",
          "detail": "2022, 10(4): 1554-1564",
          "roleType": "first",
          "doi": "10.1021/acssuschemeng.1c06983"
        },
        {
          "year": 2022,
          "authors": "<me>Jincheng Qin</me>, Zhifu Liu<sup>*</sup>, Mingsheng Ma<sup>*</sup>, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "First Author",
          "title": "Crystal structure, lattice vibration and microwave dielectric properties of 3CaO·2SiO<sub>2</sub>·xCaF<sub>2</sub> (0 ≤ x ≤ 1.5) ceramics",
          "journal": "Ceramics International",
          "detail": "2022, 48(10): 14371-14377",
          "roleType": "first",
          "doi": "10.1016/j.ceramint.2022.01.328"
        },
        {
          "year": 2021,
          "authors": "<me>Jincheng Qin</me>, Zhifu Liu<sup>*</sup>, Mingsheng Ma, Yongxiang Li<sup>*</sup>",
          "me": "Jincheng Qin",
          "role": "First Author",
          "title": "Machine learning approaches for permittivity prediction and rational design of microwave dielectric ceramics",
          "journal": "Journal of Materiomics",
          "detail": "2021, 7(6): 1284-1293",
          "roleType": "first",
          "doi": "10.1016/j.jmat.2021.02.012"
        },
        {
          "year": 2021,
          "authors": "<me>Jincheng Qin</me>, Zhifu Liu<sup>*</sup>, Mingsheng Ma<sup>*</sup>, Feng Liu, Ze-Ming Qi, Yongxiang Li",
          "me": "Jincheng Qin",
          "role": "First Author",
          "title": "Structure and microwave dielectric properties of gillespite-type ACuSi<sub>4</sub>O<sub>10</sub> (A = Ca, Sr, Ba) ceramics and quantitative prediction of the Q×f value via machine learning",
          "journal": "ACS Applied Materials & Interfaces",
          "detail": "2021, 13(15): 17817-17826",
          "roleType": "first",
          "doi": "10.1021/acsami.1c01909"
        }
      ]
    },
    patents: {
      heading: "Patents",
      items: [
        { title: "A dielectric material for X8R-type ceramic capacitors and a preparation method thereof (In Chinese)", year: 2020, number: "CN114685161A", inventor: "Yan Gu, Faqiang Zhang, Zhifu Liu, Qi Ouyang, Jincheng Qin", detail: "Application No.: CN114685161A | Filed: 2020-12-28", status: "Unauthorized", statusClass: "unauthorized" },
        { title: "A method for predicting remaining lifetime of MLCC based on machine learning (In Chinese)", year: 2025, number: "CN120068408A", inventor: "Zhifu Liu, Tianyu Jiang, Faqiang Zhang, Jincheng Qin, Mingsheng Ma", detail: "Application No.: CN120068408A | Filed: 2025-01-23", status: "Under Review", statusClass: "pending" }
      ]
    },
    grants: {
      heading: "Projects",
      items: [
        { title: "China Postdoctoral Science Foundation National Program", role: "PI", detail: "" }
      ]
    }
  }
};

/* ========================================
   Render Functions
   ======================================== */

let currentLang = "zh";

function $(id) { return document.getElementById(id); }

function toggleLang() {
  currentLang = currentLang === "zh" ? "en" : "zh";
  renderAll();
}

function renderAll() {
  renderNav();
  renderHero();
  renderAbout();
  renderResearch();
  renderPublications();
  renderPatents();
  renderGrants();
}

/* Navigation */
function renderNav() {
  const d = DATA[currentLang].nav;
  $("nav-name").textContent = DATA[currentLang].hero.name;
  $("nav-about").textContent = d.about;
  $("nav-research").textContent = d.research;
  $("nav-pub").textContent = d.publications;
  $("nav-patents").textContent = d.patents;
  $("nav-grants").textContent = d.grants;
  $("lang-btn").textContent = currentLang === "zh" ? "EN" : "中文";
}

/* Hero */
function renderHero() {
  const d = DATA[currentLang].hero;
  $("hero-name").textContent = d.name;
  $("hero-title").textContent = d.title;
  $("hero-affiliation").textContent = d.affiliation;
}

/* About */
function renderAbout() {
  const d = DATA[currentLang].about;
  $("about-heading").textContent = d.heading;
  $("about-full").textContent = d.full;
}

/* Research */
function renderResearch() {
  const d = DATA[currentLang].research;
  $("research-heading").textContent = d.heading;
  const grid = $("research-grid");
  grid.innerHTML = d.items.map(item => `
    <div class="research-card">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `).join("");
}

/* Publications */
function renderPublications() {
  const d = DATA[currentLang].publications;
  $("pub-heading").textContent = d.heading;

  // Year filter
  const years = [...new Set(d.papers.map(p => p.year))].sort((a, b) => b - a);
  const filterDiv = $("pub-year-filter");
  filterDiv.innerHTML = `<button class="pub-year-btn active" data-year="all">${d.allYears}</button>` +
    years.map(y => `<button class="pub-year-btn" data-year="${y}">${y}</button>`).join("");

  // Paper list
  const list = $("pub-list");
  let lastYear = null;
  list.innerHTML = d.papers.map((p, i) => {
    const showYear = p.year !== lastYear;
    lastYear = p.year;
    const titleHtml = p.doi
      ? `<a href="https://doi.org/${p.doi}" target="_blank" class="pub-doi-link">${p.title}</a>`
      : p.title;
    const roleHtml = p.role ? ` <span class="role">[${p.role}]</span>` : "";
    return `
      <li class="pub-item" data-year="${p.year}">
        ${showYear ? `<span class="pub-year-tag">${p.year}</span>` : ""}
        <div class="pub-authors">${p.authors.replace(/Jincheng Qin/g, "<strong>Jincheng Qin</strong>").replace(/秦锦成/g, "<strong>秦锦成</strong>")}${roleHtml}</div>
        <div class="pub-title">${titleHtml}</div>
        <span class="pub-journal"><em>${p.journal}</em></span>
        <span class="pub-detail">${p.detail}</span>
      </li>
    `;
  }).join("");

  // Filter event
  filterDiv.querySelectorAll(".pub-year-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      filterDiv.querySelectorAll(".pub-year-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      const year = this.dataset.year;
      list.querySelectorAll(".pub-item").forEach(item => {
        if (year === "all" || item.dataset.year === year) {
          item.classList.remove("hidden");
        } else {
          item.classList.add("hidden");
        }
      });
    });
  });
}

/* Patents */
function renderPatents() {
  const d = DATA[currentLang].patents;
  $("patent-heading").textContent = d.heading;
  const list = $("patent-list");
  if (!d.items || d.items.length === 0) {
    list.innerHTML = `<li class="patent-item" style="color: var(--text-muted);">${currentLang === "zh" ? "暂无" : "None"}</li>`;
    return;
  }
  const sorted = [...d.items].sort((a, b) => b.year - a.year);
  let lastYear = null;
  list.innerHTML = sorted.map(p => {
    const showYear = p.year !== lastYear;
    lastYear = p.year;
    const patentUrl = `https://patents.google.com/patent/${p.number}/`;
    const sc = p.statusClass || "";
    const statusClass = sc === "pending" ? "pending" : sc === "unauthorized" ? "unauthorized" : "";
    const labels = currentLang === "zh" ? { pending: "审查中", unauthorized: "未授权" } : { pending: "Pending", unauthorized: "Unauthorized" };
    const statusLabel = labels[sc] || "";
    return `
      <li class="patent-item" data-year="${p.year}">
        ${showYear ? `<span class="pub-year-tag">${p.year}</span>` : ""}
        <div class="patent-title"><a href="${patentUrl}" target="_blank" class="pub-doi-link">${p.title}</a>${statusLabel ? `<span class="patent-status ${statusClass}">${statusLabel}</span>` : ""}</div>
        <div class="patent-inventor">${currentLang === "zh" ? "发明人：" : "Inventor: "}${p.inventor}</div>
        <div class="patent-detail">${p.detail}</div>
      </li>
    `;
  }).join("");
}

/* Grants */
function renderGrants() {
  const d = DATA[currentLang].grants;
  $("grant-heading").textContent = d.heading;
  const list = $("grant-list");
  if (!d.items || d.items.length === 0) {
    list.innerHTML = `<p style="color: var(--text-muted);">${currentLang === "zh" ? "暂无" : "None"}</p>`;
    return;
  }
  list.innerHTML = d.items.map(g => `
    <div class="grant-item">
      <strong>${g.title}</strong>${g.role ? ` (${g.role})` : ""}${g.detail ? ` — ${g.detail}` : ""}
    </div>
  `).join("");
}

/* Init */
document.addEventListener("DOMContentLoaded", () => {
  renderAll();
  $("lang-btn").addEventListener("click", toggleLang);
});
