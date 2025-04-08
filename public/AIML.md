**Report: Object Extraction via SPACE\+MOC**

**Nils Grandien, Eylül Appak, Finn Engelmann, Julian Steiner, Anshul Chahar** **March 31, 2025**

**1. Contributions & Claims**

**Contributions**

• **We provide object extractor models for eight Atari games. **

• **We evaluate the object extractors extensively, both quantitatively and qualitatively, covering localization, encodings,** **classifiers and the combined object extractor. **

**Claims**

• **The assumption of encoding evaluation in MOC that the number of clusters should correspond to number of classes in** **OCAtari fails for some games \(see Figure 4\). **

• **X-means finds more fine-grained clusters that are semantically meaningful \(see Figure 5\). **

• **The classifier based on X-means outperforms the classifier based on k-means and can compete with a supervised** **classifier \(see Figure 6\). **

**2. Abstract**

Object extraction is essential for enabling object-centric reinforcement learning \(RL\). The SCoBots framework exemplifies this approach by explicitly introducing an object extractor module \[2\]. Building on this concept, we developed object extractors for eight different Atari games using SPACE\+MOC \[6, 3\]. Our evaluation reveals that the object encodings used within the object extractor form more fine-grained and meaningful clusters than previously assumed. Leveraging this insight, we enhanced the unsupervised classifier used to interpret these encodings, which is a key component of the object extractor. 

**3. Introduction**

**3.1. Motivation**

Reinforcement learning \(RL\) based on object-centric representations has gained increased interest. A specific example are SCoBots, RL agents that are designed to achieve interpretability and be correctable by leveraging object-centric representations. More general advantages of using object-centric representations for RL include faster training and better sample efficiency \[7\]. With OCAtari \[1\], a framework has been published that facilitates research in the domain of object-centric RL by providing object-centric representations for Atari games. Atari games are extremely popular in the RL research community. However, object-centric representations are not available in many other potentially interesting scenarios for object-centric RL. Therefore, we aim to contribute to this line of research by facilitating the extraction of object-centric representations from visual scenes more generally. 

We focus on SPACE\+MOC, which has emerged as a promising candidate for the purpose of extracting object-centric representations. 

Our precise problem formulation is based on the definition of the object extractor in SCoBots. To evaluate our object extractor, we leverage OCAtari to obtain ground-truth data. This comes with the additional benefit that our trained object extractors could later be evaluated on the downstream task of RL. 

1



**3.2. Goals**

Given the previous work on SPACE\+MOC, our goal is to extend it by training and evaluating SPACE\+MOC object extractors for additional games, namely Asterix, Freeway, Kangaroo, and Seaquest. For completeness, we also include the games Boxing, Pong, Skiing, and Tennis, which were already covered in prior work. 

Compared to previous work, we aim to provide a more in-depth qualitative analysis of the localization capabilities. Another focus lies on the qualitative analysis of the object encodings from the SPACE\+MOC model. We also aim to investigate how the unsupervised classifier for the object encodings could be improved. 

**3.3. Report structure**

First, we provide more background on the project topic, method, and precise requirements. Second, we present the results of our testing and evaluation. Then, we detail the development process on one hand, and on the other hand, how we worked together and individually to achieve the final outcome. Finally, we summarize our contributions, reflect on our learnings, and propose avenues to continue this line of research. 

**4. Project Overview**

**4.1. Project topic**

SCoBots have a component called the object extractor. We reuse this terminology as this is the component we implement. However, a few important details and minor differences should be made explicit. 

In SCoBots, the input to the object extractor is defined as a sequence of frames to allow for inferring object identity across time. 

Computing object identity is essential for computing relational features like speed within the relation extractor. However, we focus on independent single frames and leave the task of inferring object identity to be implemented by a separate downstream module. 

The output of an object extractor in SCoBots is defined as a set of object representations for each input frame. For each localized object, the object representation consists of a set of properties like class, position, or orientation. However, for most games, only the properties class and position were used in the experiments in SCoBots, effectively turning the object extractor into a multi-object detection system \(instead of a more general object extraction system\). 

In our work, we focus on the multi-object detection problem. However, in the context of evaluating the object encodings from SPACE\+MOC, we briefly touch upon the potential of extracting richer sets of properties. 

Our implementation of the object extractor is based on SPACE\+MOC. Originally, SPACE primarily investigated localization in Atari game environments. The object encodings derivable from the latent space received minimal attention. MOC enhanced SPACE by incorporating a motion loss and an object continuity loss, thereby improving the localization capabilities and, more importantly, the quality of the object encodings. The evaluation focused more on the quality of object encodings, using metrics like Adjusted Mutual Information to obtain quantitative results. Notably, an object extractor module was implemented and tested on object-centric RL in one of the experiments. \[5\] further built on this, focusing on implementing SPACE\+MOC-based object extractors and testing them on the downstream RL task. 

Figure 1: Object Extractor \(during Inference\)

**4.2. Key requirements and specifications**

An important requirement was to maintain an unsupervised setting. This was motivated by the goal of developing a solution that is as general as possible. Supervised data might not always be available, and if it is, there is usually no need to train an additional object extractor. 

2





To use the object extractors within the context of SCoBots, the aim was to train extractors for the same games used in SCoBots, namely: Asterix, Boxing, Freeway, Kangaroo, Pong, Seaquest, Skiing, Tennis, and Bowling. \(Note that Bowling is not included in final set of object extractors because object localization failed almost entirely for important objects like the pins, see Section 5.1.1.\)

Additionally, usage within SCoBots imposes specific requirements regarding the output format. More specifically, the goal was to integrate the object extractor into the project "Team 3 - 1.1. Modular Neurosymbolic Framework." 

With respect to collaboration, another requirement was to enable integration of the code from "Team K - 1.3 How comparable are different object extraction methods" into our code repository. Team K worked on object extraction based on Slot Attention and MOC. 

**4.3. Technologies and tools**

Apart from standard technology for deep learning \(e.g., Python, PyTorch\) and software development \(e.g., GitHub, GitHub Copilot\), the python package ocatari is the most notable tool we used. It was crucial for our project. 

**5. Testing and Evaluation**

**5.1. Testing Methodology**

**5.1.1. Considered Games**

To evaluate the generality and robustness of our object-centric representation learning and localization models, we conducted experiments on a diverse selection of OCAtari games. The selected games are listed in Table 1. 

**Asterix**

**Boxing**

**Freeway**

**Kangaroo**

**Pong**

**Seaquest**

**Skiing**

**Tennis**

Table 1: Considered OCAtari games

**Note**: Initially, we also included the game Bowling in our evaluation. However, due to the limited number of moving objects, we chose to focus on the remaining eight games for the core of our analysis. 

**5.1.2. Localization**

To evaluate the localization performance of the model, we assessed how accurately the predicted object bounding boxes align with the ground-truth annotations across multiple OCAtari game environments. This evaluation focuses on two key aspects:

• Quantitative metrics to assess localization accuracy

• Qualitative analysis to understand model failure modes 3





**Quantitative metrics to assess localization accuracy. **As illustrated in Figure 2 for the game Freeway, the bounding boxes predicted by SPACE\+MOC are often too large. Since the downstream task of RL primarily relies on the center coordinates of the localized objects, we opted to use Center Divergence rather than IoU for evaluation. 

Figure 2: Predicted boxes \(green\) vs. ground-truth boxes \(red\) for the game Freeway Center Divergence, introduced in \[4\], measures the normalized distance between the center points of predicted and ground-truth bounding boxes. This method uses the diagonal length of the ground-truth box for normalization. We used the same threshold of 0.5

as in the main paper to determine whether a predicted box matches a ground-truth object. 

Based on the Center Divergence metric, we computed precision and recall values to quantify the quality of object localization. 

Figure 3 shows the precision and recall values for each game. We observe that most games achieve a precision of at least 95%. 

Seaquest and Tennis are outliers with respect to precision. Recall is consistently 76% or higher, with Kangaroo being the only outlier in terms of recall. 

Figure 3: Precision and Recall for Localization per Game. 

**Qualitative analysis to understand model failure modes. **In addition to the numerical evaluation, we manually inspected failure cases to understand where and why the model fails in object localization. Common failure modes include: small objects, overlapping objects, and non-moving objects. Table 2 shows example images for the different failure modes. 

4





**Failure Mode**

**Figures**

Small Objects

Tennis

Tennis

Pong

Kangaroo

Overlapping Objects

Tennis

Freeway

Boxing

Non-Moving Objects

Bowling

Table 2: Overview of failure modes illustrated with example scenarios from selected games. 

**5.1.3. Evaluating Latent Object Encodings via Clustering and Classification** A core component of our evaluation pipeline centers on analyzing the structure of the learned latent object encodings. This involves both unsupervised clustering techniques and downstream classifiers to assess how well the latent space captures semantic regularities. 

Our exploration began by evaluating clustering performance in latent space, initially using standard methods like K-means, as done in MOC. In MOC, the Adjusted Mutual Information \(AMI\) was used to compare discovered clusters against ground-truth labels. 

However, these methods rely on restrictive assumptions — notably a fixed number of clusters and a one-to-one correspondence between clusters and semantic classes — which can break down in environments with visual variability within a class. 

This shortcoming became evident, for example, in the game Freeway, where the visual variation of different colors and orientations within the car class caused problems. In such cases, K-means fails to capture the diversity of meaningful object variants due to its assumption of a fixed number of clusters. Moreover, metrics like AMI unfairly penalize the model for discovering additional, semantically valid subtypes, leading to deceptively low scores. This limitation revealed a key flaw in prior evaluation pipelines, including that of MOC. 

To address this, we adopted X-means, a clustering algorithm that extends K-means by automatically selecting the number of clusters based on statistical criteria like the Bayesian Information Criterion \(BIC\). This allows the model to flexibly adapt to the complexity of each environment, discovering finer-grained clusters without requiring a predefined object count. In practice, X-means consistently revealed substructures that aligned with meaningful distinctions among objects — particularly in visually complex games like Freeway. 

We paired X-means clustering with qualitative visual inspection to ensure that the discovered clusters corresponded to semantically coherent groupings. As shown in Figure 4, X-means can identify fine-grained clusters in the object encodings from the SPACE\+MOC

model, while K-means fails to capture nuanced information contained in the object encodings. 

5





Figure 4: PCA visualization of the encodings with labels assigned based on ground-truth \(OCAtari\), k-means, X-means. 

Figures 5a and 5b further demonstrate this ability by showcasing distinct clusters formed by X-means. Specifically, Figure 5a

highlights a cluster of green vehicles, while Figure 5b captures a different fine-grained cluster composed entirely of red vehicles. 

These results underscore the effectiveness of X-means in disentangling semantically meaningful object groups that would otherwise be merged by standard clustering methods. 

\(a\) Cluster of green cars

\(b\) Cluster of red cars

Figure 5: Examples of fine-grained clusters discovered by X-means. Each subfigure shows a distinct semantic cluster \(green cars vs. 

red cars\) formed from the object encodings. 

To quantitatively evaluate the utility of these clusters, we derived a 1-nearest-neighbor \(1-NN\) classifier based on the X-means clustering: each cluster centroid is labeled via majority vote over the training set, and test samples are classified based on their nearest centroid. This simple classifier serves as a strong indicator of whether the latent space encodes discriminative and meaningful object representations. Figure 6 shows that classifiers based on X-means clusters often outperform K-means-based ones, in some cases approaching the performance of few-shot supervised baselines such as Ridge classifiers trained with 64 labels per class. 

6



Figure 6: Comparison of F1-Score of the classifiers across the different games. 

In summary, identifying the limitations of K-means prompted a shift to X-means clustering, validated both qualitatively and quantitatively. The final evaluation hinges on a 1-NN classifier derived from X-means, which provides a robust measure of latent space structure without relying on heavy supervision. 

**5.1.4. Final Object Extractor System Performance**

Table 3 shows the overall performance of the object extractor. These results are effectively a combination of the localization and classifier performance. Most games exhibit strong performance, but Kangaroo, Seaquest, and Tennis demonstrate noticeable drops. 

However, these lower scores do not necessarily entail that the models cannot be used for the downstream task of RL. For example in the case of Kangaroo, the low score can mainly be attributed to the object extractor not localizing the presumably less important non-moving objects like the ladders. 

**Asterix**

**Boxing**

**Freeway**

**Kangaroo**

**Pong**

**Seaquest**

**Skiing**

**Tennis**

90%

90%

95%

33%

89%

63%

91%

58%

Table 3: F1 scores of the Object Extractor for the 8 OCAtari games **5.2. Limitations**

In games like Kangaroo, where the objects or background change significantly after reaching certain levels, our object extractor is likely to fail when such changes occur. This is because we did not use a trained agent for data collection. As a result, the SPACE\+MOC

model did not see the change during its training. 

While the OCAtari RAM-based labeling system provides a valuable source of ground-truth annotations, it is not perfect. Therefore, treating it as definitive ground truth can be problematic—especially when precision and recall are close to 100%. For example, in Kangaroo, we observed that some objects remain hidden beneath the persistent black ribbon at the bottom of the screen. They are listed in the ground-truth data because they exist in the game state, but they are not yet visible on the screen. 

**6. Development Process**

**6.1. Initial setup and planning**

The initial situation for our project was that a code repository1 already existed, containing an implementation of SPACE\+MOC, including the necessary code for training and evaluation. However, several aspects of the code were either missing or required improvement. Initially, only the games Boxing, Pong, and Skiing were integrated. Furthermore, the code was still tailored for an outdated version of Ocatari. Moreover, the code needed to be adapted to facilitate the integration of the Slot Attention \+ MOC

approach. In addition, some parts of the codebase could be enhanced to streamline the training and evaluation process. 

1 https://github.com/nlsgrndn/SCoBots/tree/dev

7

To guide our efforts, we devised an initial project plan. While we anticipated that some components of the plan might evolve over time, it served as a useful starting point. Internally, we also developed an informal project proposal to act as a reference, outlining, for example, our evaluation strategy. 

The high-level steps of our plan were:

• Familiarizing ourselves with the methods \(i.e., reading the relevant papers\) and the existing codebase

• Making small initial refactoring changes to the code

• Conducting an initial training run for a single game

• Performing an initial evaluation and identifying lessons learned for subsequent training

• Running training across all games

• Conducting game-specific evaluations and extracting insights for further improvements

• Executing a final training run

• Carrying out a comprehensive final evaluation

Throughout the project, we also planned to iteratively update the codebase to accommodate new requirements discovered during the model training and evaluation processes. 

**6.2. Design and architecture decisions**

As the core components of the code and the architecture of the SPACE\+MOC-based object extractor were already in place, we only needed to make minor decisions concerning design and architecture. 

With respect to code architecture, the primary considerations focused on adapting the code to support the integration of Slot Attention \+ MOC into the repository. A key question was which components should be shared between the two approaches and which should remain separate. These decisions had significant implications for how easily the approaches could be compared, as well as for how efficiently each team could iterate on their parts of code. 

For the object extractor, the main decision made during the project was to transition from a clustering method that assumes a fixed number of clusters to one that automatically determines the appropriate number of clusters. 

**6.3. Implementation steps and progress**

The main deviation from our initial plan was that we examined the classifier approach in more detail, as we discovered during our evaluation that the k-means-based classifier failed for some of the games, as discussed in the section Testing and Evaluation. 

Consequently, the original plan had to be adjusted by adding a new step, "Improving the classifier," before the final evaluation. 

8

**6.4. Challenges faced and solutions applied** **Challenge**

**Solution**

Since training SPACE\+MOC requires GPU resources, the fact To overcome this, we initially focused on improving the code that we only gained access to the university’s GPUs at the and tested GPU-dependent parts using Google Colab. 

end of December was a challenge. 

The Python package OCAtari \(used for evaluating the object We adapted the affected parts of the code accordingly \(e.g., extractor\) received a significant update during the project, the dataset creation code\). 

rendering some parts of our code dysfunctional. 

For some games, we found that the latent clusters did not We experimented with methods to automatically determine match the number of objects defined in OCAtari, but were the appropriate number of clusters \(e.g., via X-means\). 

more fine-grained. 

In Bowling, the important pin objects were not localized, We decided to focus on the other games instead. 

likely because they do not move and thus the motion loss did not work effectively. 

For some team members, a lack of experience with relevant The solution was to invest time early on to systematically packages \(e.g., PyTorch\) was a significant challenge. 

become familiar with these packages. 

Working with imperfect research code caused difficulties Fortunately, one major contributor of the code was part of the \(e.g., poor handling of edge cases, lack of comments, and team, so one-on-one meetings were arranged when needed. 

missing type annotations\). 

Debugging tools like the Python package ipdb also proved helpful. 

Table 4: Challenges and solutions during the SPACE\+MOC project. 

**7. Teamwork and Contribution Evaluation**

**7.1. Team collaboration**

We structured our project into weekly sprints. Using Trello, we created a Kanban-style board to track the tickets in the current sprint. 

Additionally, we maintained a second board with a backlog of tickets that would become relevant during the course of the project. 

In our weekly online meetings via Zoom, we began by updating the current state of the sprint board. After a brief discussion of general questions, we decided which tickets to tackle in the next iteration. These tickets either came from the backlog or were added based on insights from the discussion. To ensure productive meetings, one team member was assigned to lead and take responsibility for facilitating the meeting. 

During the sprint, we communicated primarily via Discord. 

**7.2. Task distribution**

**Type of Task**

**Responsible Team Members**

Project management and organization

Nils

Communication with other groups \(e.g.m Team K, Team 3, 

Nils

Team 15\)

Neural network training

Julian

Evaluation

Julian, Nils

Code

Finn, Anshul, Eylül, Julian, Nils

Preparation of submission documents \(e.g., report, poster, Julian, Nils

README\)

Table 5: Overview of task types and responsible team members. 

For details about the contributions of each team member, see Section A.1. 

**7.3. Teamwork dynamics**

The teamwork dynamics were primarily influenced by the prior experience of the team members. Julian and Nils had more relevant experience \(e.g., with important libraries like PyTorch\) than the other team members. Nils had even worked on the exact same project and codebase during his bachelor’s thesis, leading to a significant level of information asymmetry within the team. 

9

Another important factor affecting the teamwork dynamics was the availability of team members during certain periods of the project \(e.g., due to other deadlines or exams\). However, we communicated these constraints early on, which helped prevent major internal conflicts. 

**7.4. Grading**

Julian and Nils contributed the most to the final outcome. Both had more experience than the other team members, especially Nils, who had already worked on the same project before. Anshul, Finn, and Eylül, despite having less prior experience, made meaningful efforts and contributed parts of the code. 

If prior experience is considered in grading, one could argue that all team members should receive the same grade. However, if grading is based solely on contributions to the final outcome, Julian and Nils should receive a higher grade than Anshul, Finn, and Eylül. 

**8. Conclusion and Reflection**

**8.1. Summary of accomplishments**

We developed SPACE\+MOC object extractors for eight different Atari games. 

Our evaluation includes both quantitative metrics and a qualitative failure mode analysis of the localization capabilities. Additionally, we conduct a qualitative analysis of the object encodings and compare the performance of different classifiers on these encodings. 

During our analysis, we identified a limitation in MOC’s encoding evaluation—specifically, the assumption that object encodings should form exactly clusters, where corresponds to the number of object classes defined in OCAtari. 

To address this, we introduced a more flexible classifier based on X-means, which outperforms the previously used k-means-based classifiers. 

**8.2. Lessons learned**

The lessons learned varied among team members. For some, the main takeaway was the experience of working with research code in the domain of deep learning, along with learning effective debugging strategies—such as using tools like import ipdb; ipdb.set\_trace\(\). By now, all team members are undoubtedly very familiar with running pip install -e .. 

For others, valuable lessons included learning how to systematically train deep learning models and leading a group project—especially one involving team members with varying levels of prior knowledge. Additionally, creating a research poster was a new and meaningful experience, particularly in combination with the personal feedback received during the poster session. 

**8.3. Potential future improvements or extensions**

Unfortunately, we did not have the opportunity to test the object extractors on the downstream task of RL. This is an obvious and important next step for future work. 

Building on our interesting finding that the encodings form fine-grained, meaningful clusters for some games, further research could explore this phenomenon more deeply. Currently, we primarily use this insight to enhance the unsupervised classifier approach, while still mapping clusters to the predefined class labels used in OCAtari. However, one could experiment with returning the fine-grained clusters directly as class labels. These labels would be enumerated and not immediately interpretable by humans, but this is not an issue for RL algorithms. 

A more advanced direction could involve extracting additional properties \(e.g., orientation\) from the encodings, further enriching the representations used for downstream tasks. 

**References**

\[1\] Quentin Delfosse, Jannis Blüml, Bjarne Gregori, Sebastian Sztwiertnia, and Kristian Kersting. OCAtari: Object-centric Atari 2600

reinforcement learning environments. *Reinforcement Learning Journal*, 1:400–449, 2024. 

\[2\] Quentin Delfosse, Hikaru Shindo, Devendra Dhami, and Kristian Kersting. Interpretable and explainable logical policies via neurally guided symbolic abstraction. *Advances in Neural Information Processing Systems*, 2024. 

\[3\] Quentin Delfosse, Wolfgang Stammer, Thomas Rothenbächer, Dwarak Vittal, and Kristian Kersting. Boosting object representation learning via motion and object continuity. In *Machine Learning and Knowledge Discovery in Databases: Research Track*, 2023. 

\[4\] Quentin Delfosse, Wolfgang Stammer, Thomas Rothenbächer, Dwarak Vittal, and Kristian Kersting. *Boosting Object Representation* *Learning via Motion and Object Continuity*, page 610–628. Springer Nature Switzerland, 2023. 

10

\[5\] Nils Grandien, Quentin Delfosse, and Kristian Kersting. Interpretable end-to-end neurosymbolic reinforcement learning agents, 2024. 

\[6\] Zhixuan Lin, Yi-Fu Wu, Skand Vishwanath Peri, Weihao Sun, Gautam Singh, Fei Deng, Jindong Jiang, and Sungjin Ahn. Space: Unsupervised object-oriented scene representation via spatial attention and decomposition. In *International Conference on* *Learning Representations*, 2020. 

\[7\] Jaesik Yoon, Yi-Fu Wu, Heechul Bae, and Sungjin Ahn. An investigation into pre-training object-centric representations for reinforcement learning. In *International Conference on Machine Learning*, 2023. 

**A. Appendices**

**A.1. Detailed Contributions of each team member**

• **Nils:**

**– **Project management and organization

**– **Helping other groups \(Team K, Team 15\) and coordination with other groups \(Team 3\)

**– **Poster

**– **Report

**– **Evaluation of the encodings and classifier

**– **Code reviews to ensure code quality of main branch

**– **Code:

∗ Integrating of X-means clustering and X-means-based classifer

∗ Improving classifier creation and evaluation \(multiple classifiers, visualization etc.\)

∗ Api to "Team 3 - 1.1 Modular Neurosymbolic Framework" 

∗ Filtering relevant bounding box

∗ Multiple bugfixes

∗ Improving evaluation pipeline

∗ Refactoring MOC Loss

∗ Refactor arch config

• **Julian:**

**– **Refactor dataset creation

**– **Started training models in Google Colab

**– **Setup and Prepared GPU Cluster

**– **Initial Training Run for all Models on GPU Cluster \(created dataset and trained models for every game\)

**– **Adapt code for storing latents during training

**– **Second Training for all Games

**– **Loss curves for games with bad performance analyzed

**– **Ensure using OCAtari Version 2.0.0

**– **Fix ‘NoObject‘ bug for Seaquest Game during Dataset creation

**– **Supported creation of the Presentation

**– **Supported creation of the Report

• **Anshul:**

**– **Added functions to draw predicted bounding boxes on objects. 

**– **Refactored the code for visualization. 

**– **Restructured the codebase to separate the visualization files. 

**– **Wrote tests for drawing bounding boxes. 

11

**– **Added code for comparing supervised and unsupervised classifiers based on F1-score, accuracy, precision. 

**– **Added the functionality to draw colored and labelled bounding boxes for different classes of objects. 

• **Finn:**

**– **Added an option to the evaluation process to let only valid object-localization results contribute to classifier training

**– **Enabled the reuse of precomputed latents during evaluation

**– **Enhanced naming conventions, readability, and functionality in logging

**– **Cleaned up and improved the structure of latent evaluation, classifier code, and logging for better maintainability and clarity

• **Eylül:**

**– **Refactored evaluation code so that; 

∗ method to calculate MSE works again after removing logs and method to create latent dataset is not called so often

∗ maintainability and reusability are improved with the help of function extractions, list comprehensions, dictionaries, and data classes

∗ exceptions are handled more effectively

**– **Improved checkpointing:

∗ created the "evaluation checkpoint" logic and adjusted files to work with it

∗ ensured that the epoch starts counting from the last step number of the checkpoint

∗ fixed the issue that the training of the classifier resumed from a checkpoint even when resume flag is false

**– **Improved early return logic in the Atari\_Z\_What dataset class

**– **Bugfixes to the main branch

12


# Document Outline

+ Contributions & Claims 
+ Abstract 
+ Introduction  
	+ Motivation 
	+ Goals 
	+ Report structure 

+ Project Overview  
	+ Project topic 
	+ Key requirements and specifications 
	+ Technologies and tools 

+ Testing and Evaluation  
	+ Testing Methodology  
		+ Considered Games 
		+ Localization 
		+ Evaluating Latent Object Encodings via Clustering and Classification 
		+ Final Object Extractor System Performance 

	+ Limitations 

+ Development Process  
	+ Initial setup and planning 
	+ Design and architecture decisions 
	+ Implementation steps and progress 
	+ Challenges faced and solutions applied 

+ Teamwork and Contribution Evaluation  
	+ Team collaboration 
	+ Task distribution 
	+ Teamwork dynamics 
	+ Grading 

+ Conclusion and Reflection  
	+ Summary of accomplishments 
	+ Lessons learned 
	+ Potential future improvements or extensions 

+ Appendices  
	+ Detailed Contributions of each team member



