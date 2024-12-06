---
theme: penguin
colorSchema: 'auto'
class: text-center
layout: intro
---

# Software Defect Prediction with AEW

Presenters: Bryan Portillo and Behzad Karimi

CSCI 550

---

# Software Defect Prediction

- Complex software projects require similarly large disparate coding departments 
- Debugging such projects is just as complex as producing it
- Automated bug detection critical 
- Previous work has typically involved the NASA PROMISE dataset with supervised learning and neural networks
- Results with supervised learning are positive ranging from anywhere between 80% to 98% 
- Clustering results rarely reported

---

# NASA PROMISE Dataset Overview

| Dataset | Dimensions  | Non-Defective/Defective (%) | System Type                                                                 |
|---------|-------------|-----------------------------|-----------------------------------------------------------------------------|
| CM1     | (498, 21)   | 90                          | Cruise missile control                    |
| JM1     | (13204, 21) | 85                          | Air Traffic control                       |
| KC1     | (2109, 21)  | 85                          | Aircraft control                          |
| KC2     | (522, 21)   | 80                          | Aircraft control                          |
| PC1     | (1109, 21)  | 93                          | Space shuttle telemetry data              |

---

#  NASA PROMISE Dataset Feature Description

<div style="font-size: 8px;">

| Feature Name    | Description                    | Feature Name       | Description                 |
|-----------------|--------------------------------|--------------------|-----------------------------|
| loc             | Lines of code                  | total_Opnd         | Total operands              |
| ev(g)           | Essential variables            | branchCount        | Branch counts               |
| iv(G)           | Involvement variables          | v(g)               | Cyclomatic complexity       |
| N               | Number of modules              | B                  | Number of branches          |
| V               | Software version               | T                  | Number of tests executed    |
| L               | Number of lines                | lOCode             | Code from last operation    |
| D               | Number of defects found        | lOComment          | Comments from last operation|
| I               | Number of interfaces           | locCodeAndComment  | Lines of code & comments    |
| E               | Number of external inputs/outputs| lOBlank           | Blank lines                 |
| total_Op        | Total operations               | uniq_Op            | Unique operations           |
|                 |                                | uniq_Opnd          | Unique operands             |
</div>

---
layout: cover
---
# Methodology

<img src="/modified_aew.jpg" style="width: 85%; height: 92%; margin:auto;">

---

<iframe src="/error_surface_cm1.html" width= '100%' height= '500px' style="border: none; position: absolute; top:0; left: 0; right: 0; bottom: 0; display: block; "></iframe>

---

# Results - CM1

| Model              | Parameters                      | Label Accuracy | Silhouette | Calinski-Harabasz | Davies-Bouldin | RAND  | FMs     |
|--------------------|---------------------------------|----------------|------------|-------------------|----------------|-------|---------|
| Gaussian Mixture   | ('tied', 'k-means++', 2)        | 0.7699         | 0.7156     | 1264.53           | 0.5074         | 0.645 | 0.7645  |
| Gaussian Mixture   | ('tied', 'random', 2)           | 0.5301         | 0.2557     | 69.63             | 2.336          | 0.606 | 0.7368  |
| Spectral           | ('kmeans', 'rbf', 2)            | 0.7747         | 0.7653     | 1854.58           | 0.3877         | 0.650 | 0.7681  |
| Spectral           | ('discretize', 'rbf', 2)        | 0.7578         | 0.7752     | 1997.79           | 0.4050         | 0.633 | 0.7541  |
| Kmeans             | ('lloyd', 2)                    | 0.6916         | 0.5788     | 1062.91           | 1.077          | 0.634 | 0.7565  |

---

# Results - JM1							

| Model              | Parameters                      | Label Accuracy | Silhouette | Calinski-Harabasz | Davies-Bouldin | RAND  | FMs     |
|--------------------|---------------------------------|----------------|------------|-------------------|----------------|-------|---------|
| Gaussian Mixture   | ('tied', 'k-means++', 2)        | 0.8406         | 9.145e-05  | 0.9680            | 1.734          | 0.732 | 0.8555  |
| Gaussian Mixture   | ('tied', 'random', 2)           | 0.4957         | 7.933e-06  | 1.1047            | 109.318        | 0.500 | 0.6051  |
| Spectral           | ('kmeans', 'rbf', 2)            | 0.8035         | 0.0029     | 36.5001           | 11.359         | 0.686 | 0.8147  |
| Spectral           | ('discretize', 'rbf', 2)        | 0.7904         | 0.0025     | 33.0358           | 11.380         | 0.676 | 0.8026  |
| Kmeans             | ('lloyd', 2)                    | 0.5914         | 0.0026     | 34.1456           | 73.604         | 0.546 | 0.6629  |

---

# Results - KC1

| Model              | Parameters                      | Label Accuracy | Silhouette | Calinski-Harabasz | Davies-Bouldin | RAND  | FMs     |
|--------------------|---------------------------------|----------------|------------|-------------------|----------------|-------|---------|
| Gaussian Mixture   | ('tied', 'k-means++', 2)        | 0.8481         | 0.9309     | 4913.37           | 0.3724         | 0.742 | 0.8548  |
| Gaussian Mixture   | ('tied', 'random', 2)           | 0.8427         | 0.8607     | 384.84            | 0.8463         | 0.735 | 0.8530  |
| Spectral           | ('kmeans', 'rbf', 2)            | 0.8483         | 0.9724     | 29927.28          | 0.1437         | 0.742 | 0.8515  |
| Spectral           | ('discretize', 'rbf', 2)        | 0.8486         | 0.9730     | 32100.20          | 0.1479         | 0.743 | 0.8517  |
| Kmeans             | ('lloyd', 2)                    | 0.8491         | 0.9733     | 33510.61          | 0.1629         | 0.744 | 0.8519  |

---

# Results - KC2

| Model              | Parameters                      | Label Accuracy | Silhouette | Calinski-Harabasz | Davies-Bouldin | RAND  | FMs     |
|--------------------|---------------------------------|----------------|------------|-------------------|----------------|-------|---------|
| Gaussian Mixture   | ('tied', 'k-means++', 2)        | 0.6464         | 0.8008     | 13196.02          | 0.2990         | 0.577 | 0.6732  |
| Gaussian Mixture   | ('tied', 'random', 2)           | 0.7238         | 0.3630     | 191.13            | 1.4323         | 0.634 | 0.7561  |
| Spectral           | ('kmeans', 'rbf', 2)            | 0.6352         | 0.9543     | 22594.76          | 0.0707         | 0.567 | 0.6475  |
| Spectral           | ('discretize', 'rbf', 2)        | 0.6345         | 0.9545     | 22668.26          | 0.0713         | 0.566 | 0.6469  |
| Kmeans             | ('lloyd', 2)                    | 0.5885         | 0.9545     | 22668.26          | 0.0713         | 0.566 | 0.6469  |

---

# Results - PC1

| Model              | Parameters                      | Label Accuracy | Silhouette | Calinski-Harabasz | Davies-Bouldin | RAND  | FMs     |
|--------------------|---------------------------------|----------------|------------|-------------------|----------------|-------|---------|
| Gaussian Mixture   | ('tied', 'k-means++', 2)        | 0.3823         | 0.2507     | 411.16            | 1.643          | 0.587 | 0.7244  |
| Gaussian Mixture   | ('tied', 'random', 2)           | 0.4905         | 0.2713     | 415.19            | 1.553          | 0.511 | 0.6700  |
| Spectral           | ('kmeans', 'rbf', 2)            | 0.4885         | 0.3351     | 597.23            | 1.377          | 0.503 | 0.6624  |
| Spectral           | ('discretize', 'rbf', 2)        | 0.4970         | 0.3354     | 599.31            | 1.381          | 0.500 | 0.6601  |
| Kmeans             | ('lloyd', 2)                    | 0.5161         | 0.3368     | 601.16            | 1.377          | 0.500 | 0.6602  |

---
